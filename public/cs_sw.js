workbox.clientsClaim();
workbox.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

workbox.routing.registerNavigationRoute('/index.html', {
	blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
});

workbox.routing.precacheAndRoute(
	new RegExp('//.*/*.json'),
	workbox.strategies.networkFirst()
);

self.addEventListener('fetch', event => {
	if (event.request.method === 'POST' || event.request.method === 'DELETE') {
		event.respondWith(event.request).catch(error => {
			return new Promise(
        JSON.stringify({ error: 'this action disabled while app is offline' }),
        Headers: {
          "Content-Type": 'application/json'
        }
			);
		});
	}
});
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
