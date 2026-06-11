# Huasheng Static Site

Static Cloudflare Pages version of the Huasheng corporate website and blog.

## Structure

- `/en/` English corporate website root
- `/zh/` Chinese corporate website root
- `/zh/blog/` and `/en/blog/` blog indexes
- `/zh/blog/ai-application-meeting/` AI application meeting blog post
- `/zh/blog/steel-structure-toc-market-report-2026-2027/` steel structure market report
- `/blog/assets/` blog media

## Updating

For a new blog post:

1. Create `/blog/<slug>/index.html`.
2. Add the post card to `/blog/index.html`.
3. Add the URL to `/sitemap.xml`.
4. Push to GitHub or redeploy the directory to Cloudflare Pages.

For a new corporate page:

1. Add the page module under `/pages/`.
2. Register the route in `/app.jsx`.
3. Rebuild the browser-ready files in `/compiled/`:
   `npx -y esbuild@0.25.12 ui.jsx pages/*.jsx app.jsx --outbase=. --outdir=compiled --format=iife --jsx-factory=React.createElement --jsx-fragment=React.Fragment --target=es2017`
4. Update SEO metadata, `robots.txt`, `sitemap.xml`, and `llms.txt`:
   `node scripts/update-seo-assets.mjs`
5. Add any direct route fallback in `/_redirects`.
6. Keep language-scoped links under `/en/...` and `/zh/...`; legacy unprefixed paths redirect to `/en/...`.
