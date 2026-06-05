# Huasheng Static Site

Static Cloudflare Pages version of the Huasheng corporate website and blog.

## Structure

- `/en/` English corporate website root
- `/zh/` Chinese corporate website root
- `/en/blog/` English blog index
- `/zh/blog/` Chinese blog index
- `/en/blog/ai-application-meeting/` and `/zh/blog/ai-application-meeting/` first blog post
- `/en/blog/steel-structure-toc-market-report-2026-2027/` and `/zh/blog/steel-structure-toc-market-report-2026-2027/` ToC steel outdoor structures market report
- `/blog/assets/` blog media

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
4. Update SEO metadata, `robots.txt`, `sitemap.xml`, and `llms.txt`:
   `node scripts/update-seo-assets.mjs`
5. Add any direct route fallback in `/_redirects`.
6. Keep language-scoped links under `/en/...` and `/zh/...`; legacy unprefixed paths redirect to `/en/...`.
