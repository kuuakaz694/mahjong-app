const cacheName = 'mahjong-app-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icon/icon-192.png',
  './icon/icon-512.png'
];


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

