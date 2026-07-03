#!/usr/bin/env node
// Prerender / React parity guard.
//
// The SPA mounts with ReactDOM.createRoot(#root).render() (app.jsx), which discards
// the server-injected prerender and paints the client render instead. Googlebot indexes
// the client render, so the crawlable prerender and the React output MUST agree — a silent
// divergence (e.g. editing content.js without re-running the generators) would ship a
// prerendered heading that no longer matches what users and JS crawlers actually see.
//
// This check recomputes each SPA route's hero <h1> from content.js — the exact same
// source of truth React reads at runtime (window.HS_CONTENT) — and compares it against
// the <h1> baked into the on-disk prerender. It also asserts each prerender has exactly
// one non-empty <h1>. Any mismatch exits non-zero so it can gate a release.
//
// Run after the generators:  node scripts/check-prerender-parity.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Same derivation the generator's clean() uses for the prerendered <h1>.
function clean(value) {
  return escapeHtml(String(value || "").replace(/\s*\n\s*/g, " ").trim());
}

// Load content.js exactly as both the generator and the browser do (window.HS_CONTENT).
function loadContent() {
  const code = fs.readFileSync(path.join(ROOT, "content.js"), "utf8");
  const win = {};
  // eslint-disable-next-line no-new-func
  new Function("window", code)(win);
  return win.HS_CONTENT || {};
}

const CONTENT = loadContent();

// SPA routes that carry an injected #root prerender, and the content.js path whose
// hero title drives both the prerender <h1> and the React hero heading.
const ROUTES = [
  { file: "en/index.html", lang: "en", group: "home" },
  { file: "en/about/index.html", lang: "en", group: "about" },
  { file: "en/capabilities/index.html", lang: "en", group: "capabilities" },
  { file: "en/projects/index.html", lang: "en", group: "projects" },
  { file: "en/quality/index.html", lang: "en", group: "quality" },
  { file: "en/contact/index.html", lang: "en", group: "contact" },
  { file: "zh/index.html", lang: "zh", group: "home" },
  { file: "zh/about/index.html", lang: "zh", group: "about" },
  { file: "zh/capabilities/index.html", lang: "zh", group: "capabilities" },
  { file: "zh/projects/index.html", lang: "zh", group: "projects" },
  { file: "zh/quality/index.html", lang: "zh", group: "quality" },
  { file: "zh/contact/index.html", lang: "zh", group: "contact" },
];

function expectedH1(t, group) {
  const heroMap = {
    about: t.about && t.about.hero,
    capabilities: t.cap && t.cap.hero,
    projects: t.cases && t.cases.hero,
    quality: t.quality && t.quality.hero,
    contact: t.contact && t.contact.hero,
  };
  if (group === "home" && t.home) return clean(t.home.heroTitle);
  if (heroMap[group]) return clean(heroMap[group].title);
  return null;
}

const failures = [];

for (const route of ROUTES) {
  const full = path.join(ROOT, route.file);
  if (!fs.existsSync(full)) {
    failures.push(`${route.file}: file missing`);
    continue;
  }
  const html = fs.readFileSync(full, "utf8");
  const rootMatch = html.match(/<div id="root">[\s\S]*?<!-- React runtime -->/);
  if (!rootMatch) {
    failures.push(`${route.file}: no injected #root prerender block found`);
    continue;
  }
  const root = rootMatch[0];
  const h1s = [...root.matchAll(/<h1>([\s\S]*?)<\/h1>/g)].map((m) => m[1].trim());
  if (h1s.length !== 1) {
    failures.push(`${route.file}: expected exactly one <h1> in prerender, found ${h1s.length}`);
    continue;
  }
  const actual = h1s[0];
  if (!actual) {
    failures.push(`${route.file}: prerender <h1> is empty`);
    continue;
  }
  const t = CONTENT[route.lang === "zh" ? "cn" : "en"] || {};
  const expected = expectedH1(t, route.group);
  if (expected == null) {
    failures.push(`${route.file}: could not derive expected <h1> from content.js (group=${route.group})`);
    continue;
  }
  if (actual !== expected) {
    failures.push(
      `${route.file}: prerender <h1> diverges from content.js (React source).\n` +
        `    prerendered: ${actual}\n` +
        `    content.js : ${expected}`,
    );
  }
}

if (failures.length) {
  console.error(`Prerender parity check FAILED (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error("\nRe-run the generators (node scripts/update-seo-assets.mjs && node scripts/update-geo-assets.mjs) after editing content.js.");
  process.exit(1);
}

console.log(`Prerender parity check passed: ${ROUTES.length} SPA routes, prerendered <h1> matches content.js.`);
