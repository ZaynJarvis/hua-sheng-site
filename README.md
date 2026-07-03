# Huasheng Static Site

Static Cloudflare Pages version of the Huasheng corporate website and blog.

## Structure

- `/en/` English corporate website root
- `/zh/` Chinese corporate website root
- `/en/blog/` English blog index
- `/zh/blog/` Chinese blog index
- `/en/blog/ai-application-meeting/` and `/zh/blog/ai-application-meeting/` first blog post
- `/en/blog/steel-structure-toc-market-report-2026-2027/` and `/zh/blog/steel-structure-toc-market-report-2026-2027/` ToC steel outdoor structures market report
- `/en/answers/` and `/zh/answers/` AI-search answer pages
- `/en/bus-stop-shelters/` and `/zh/bus-stop-shelters/` keyword landing hub (bus stop / bus shelter manufacturer)
- `/en/metal-furniture/` and `/zh/metal-furniture/` keyword landing hub (metal furniture manufacturer / OEM)
- `/entity-profile.jsonld` machine-readable Organization and offer catalog profile
- `/llms.txt` answer-engine summary with buyer intent, workflow and citation guidance
- `/blog/assets/` blog media

The SPA corporate pages (`/en/`, `/en/about/`, etc.) are React-rendered. `scripts/update-geo-assets.mjs`
pre-renders crawlable static content into each page's `<div id="root">` (sourced from `content.js`), so
search engines and non-JS AI crawlers see full page text; React's `createRoot().render()` replaces it for
JS users. The answer pages and the two keyword hubs are fully static HTML.

## Updating

For a new blog post:

1. Create language-scoped pages under `/en/blog/<slug>/index.html` and `/zh/blog/<slug>/index.html`.
2. Add the post card to `/en/blog/index.html` and `/zh/blog/index.html`.
3. Add the URL to `/sitemap.xml`.
4. Push to GitHub or redeploy the directory to Cloudflare Pages.

For a new corporate page:

1. Add the page module under `/pages/`.
2. Register the route in `/app.jsx`.
3. Rebuild the browser-ready files in `/compiled/`:
   `npx -y esbuild@0.25.12 ui.jsx pages/*.jsx app.jsx --outbase=. --outdir=compiled --format=iife --jsx-factory=React.createElement --jsx-fragment=React.Fragment --target=es2017`
4. Update SEO metadata, GEO assets, `robots.txt`, `sitemap.xml`, `llms.txt`, answer pages, and JSON-LD:
   `node scripts/update-seo-assets.mjs`
   `node scripts/update-geo-assets.mjs`
5. Add any direct route fallback in `/_redirects`.
6. Keep language-scoped links under `/en/...` and `/zh/...`; legacy unprefixed paths redirect to `/en/...`.

## Deployment

This site has no CI (no `.github/`, no build script). Deploys are manual: push to
GitHub, or drag-and-drop the project directory into the Cloudflare Pages dashboard.

**After every production deploy**, run the smoke check to confirm the GEO/prerender
layer is live (not a stale build):

```
node scripts/smoke-check.mjs
```

It HEAD-requests 10 critical URLs (answer pages, keyword hubs, entity profile,
sitemap, llms.txt, homepage) and exits non-zero if any return non-2xx. This
prevents silent regressions where a deploy serves an older build.

To check a pending deploy before promoting it:

```
BASE_URL=https://hua-sheng-site-<alias>.pages.dev node scripts/smoke-check.mjs
```

## Blocking the pages.dev origin

The Cloudflare Pages origin `hua-sheng-site.pages.dev` is a complete crawlable
duplicate of `hua-sheng.org`. No repo file can reliably block it (the worker
fetches *from* pages.dev, and `robots.txt`/canonical are served identically on
both hosts). Fix it at the edge via the Cloudflare dashboard:

1. Go to **Rules > Redirect Rules** (zone-level, for `hua-sheng.org`).
2. Create a rule:
   - **When**: Hostname equals `hua-sheng-site.pages.dev`
   - **Then**: Static redirect `301` to `https://hua-sheng.org${http.request.uri.path}${http.request.uri.query}`
   - **Status code**: 301 Permanent
3. Save and deploy.

After this, `curl -sI https://hua-sheng-site.pages.dev/en/` should return `301`
pointing at `hua-sheng.org`, not a 200 indexable page.

## IndexNow

An IndexNow key file (`a36fde7d61dfbfe80fdb0c19133cfc80.txt`) is committed at the
repo root. It deploys with the site so Bing/Yandex can verify key ownership.

To submit changed URLs to IndexNow (Bing/Yandex only, low priority):

```
INDEXNOW_KEY=a36fde7d61dfbfe80fdb0c19133cfc80 node scripts/submit-indexnow.mjs
```

If you ever rotate the key, regenerate the key file and commit it:

```
INDEXNOW_KEY=<new-key> node scripts/submit-indexnow.mjs --write-key
git add <new-key>.txt
git commit -m "Rotate IndexNow key"
```

Then deploy so the new key file is reachable at `https://hua-sheng.org/<new-key>.txt`.

## Search and GEO Updates

After adding or changing public pages:

1. Run `node scripts/update-geo-assets.mjs` (this regenerates the answer pages, both keyword hubs, the `#root` pre-render content, and all GEO assets). Keyword data (products, FAQ, hubs, `knowsAbout`) lives at the top of that script.
2. Verify `sitemap.xml`, `llms.txt`, `/en/answers/`, `/zh/answers/`, `/en/bus-stop-shelters/`, `/en/metal-furniture/`, `/entity-profile.jsonld`, `robots.txt`, `_headers`, and `_redirects`.
3. Confirm the answer pages still expose buyer-intent cards, manufacturing workflow, FAQ structured data, and canonical citation links in both English and Chinese.
4. Run the post-deploy smoke check (see **Deployment** above) and submit to IndexNow if needed (see **IndexNow** above).
