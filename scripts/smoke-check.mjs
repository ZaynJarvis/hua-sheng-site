#!/usr/bin/env node
/**
 * Post-deploy smoke check.
 *
 * Verifies that the key GEO/SEO assets return HTTP 200 after a deploy.
 * Run this after every Cloudflare Pages production deploy to catch
 * silent regressions (stale build, missing generated files, etc.).
 *
 * Usage:
 *   node scripts/smoke-check.mjs
 *   BASE_URL=https://hua-sheng-site.pages.dev node scripts/smoke-check.mjs
 */

const BASE_URL = process.env.BASE_URL || 'https://hua-sheng.org';

const URLS = [
  '/en/answers/',
  '/zh/answers/',
  '/en/bus-stop-shelters/',
  '/zh/bus-stop-shelters/',
  '/en/metal-furniture/',
  '/zh/metal-furniture/',
  '/entity-profile.jsonld',
  '/sitemap.xml',
  '/llms.txt',
  '/en/',
];

async function check(url) {
  const full = BASE_URL + url;
  try {
    const res = await fetch(full, { method: 'HEAD', redirect: 'follow' });
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    return { url, status: 0, ok: false, error: err.message };
  }
}

async function main() {
  console.log(`Smoke-checking ${URLS.length} URLs at ${BASE_URL} ...\n`);

  const results = await Promise.all(URLS.map(check));
  let failed = 0;

  for (const r of results) {
    const icon = r.ok ? 'OK ' : 'FAIL';
    const line = r.error
      ? `  ${icon}  ${r.url}  ->  ${r.error}`
      : `  ${icon}  ${r.url}  ->  ${r.status}`;
    console.log(line);
    if (!r.ok) failed++;
  }

  console.log(`\n${failed === 0 ? 'All passed' : failed + ' failed'} of ${URLS.length} URLs.`);

  if (failed > 0) {
    process.exit(1);
  }
}

main();
