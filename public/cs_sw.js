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

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
