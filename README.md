# Huasheng Static Site

Static Cloudflare Pages version of the Huasheng corporate website and blog.

## Structure

- `/` corporate website
- `/blog/` blog index
- `/blog/ai-application-meeting/` first blog post
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
3. Add any direct route fallback in `/_redirects`.
