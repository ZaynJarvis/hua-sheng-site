const ORIGIN = 'https://hua-sheng-site.pages.dev';
const TRAILING_SLASH_PATHS = new Set([
  '/products/bus-shelters',
  '/products/advertising-light-boxes',
  '/products/metal-kiosks',
  '/products/precision-metal-oem',
]);

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const incoming = new URL(request.url);

  if (incoming.protocol === 'http:' || incoming.hostname.startsWith('www.')) {
    const host = incoming.hostname.replace(/^www\./, '');
    return Response.redirect('https://' + host + incoming.pathname + incoming.search, 301);
  }

  if (incoming.pathname.startsWith('/downloads/')) {
    return new Response('Removed', {
      status: 410,
      headers: {
        'cache-control': 'private, no-store',
        'x-robots-tag': 'noindex, nofollow, noarchive',
        'content-type': 'text/plain; charset=utf-8',
      },
    });
  }

  if (incoming.pathname === '/cases') {
    return Response.redirect(incoming.origin + '/projects' + incoming.search, 301);
  }

  if (TRAILING_SLASH_PATHS.has(incoming.pathname)) {
    return Response.redirect(incoming.origin + incoming.pathname + '/' + incoming.search, 301);
  }

  const target = new URL(ORIGIN);
  target.pathname = incoming.pathname;
  target.search = incoming.search;

  const upstreamRequest = new Request(target.toString(), {
    method: request.method,
    headers: request.headers,
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    redirect: 'manual',
  });

  const response = await fetch(upstreamRequest);
  const headers = new Headers(response.headers);
  headers.delete('content-security-policy');
  headers.delete('content-security-policy-report-only');
  headers.set('x-huasheng-site-proxy', 'cloudflare-pages');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
