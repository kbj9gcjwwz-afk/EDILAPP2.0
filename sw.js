const CACHE_NAME = 'edilapp-v45';
const ASSETS = [
  './',
  './Testo4_iPhone_PWA_computo_v45.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.const urlsToCache = [
  "/EDILAPP2.0/",
  "/EDILAPP2.0/index.html",
  "/EDILAPP2.0/manifest.json",
  "/EDILAPP2.0/icon-192.png",
  "/EDILAPP2.0/icon-512.png"
];
    }).catch(() => caches.match('./Testo4_iPhone_PWA_computo_v45.html')))
  );
});
