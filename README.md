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

## Search and GEO Updates

After adding or changing public pages:

1. Run `node scripts/update-geo-assets.mjs` (this regenerates the answer pages, both keyword hubs, the `#root` pre-render content, and all GEO assets). Keyword data (products, FAQ, hubs, `knowsAbout`) lives at the top of that script.
2. Verify `sitemap.xml`, `llms.txt`, `/en/answers/`, `/zh/answers/`, `/en/bus-stop-shelters/`, `/en/metal-furniture/`, `/entity-profile.jsonld`, `robots.txt`, `_headers`, and `_redirects`.
3. Confirm the answer pages still expose buyer-intent cards, manufacturing workflow, FAQ structured data, and canonical citation links in both English and Chinese.
4. If an IndexNow key is configured, write/deploy the key file and submit changed URLs:
   `INDEXNOW_KEY=<key> node scripts/submit-indexnow.mjs --write-key`
   Deploy the generated `<key>.txt`, then run:
   `INDEXNOW_KEY=<key> node scripts/submit-indexnow.mjs`
