const CACHE_NAME = "taskeearn-v1";
const URLS_TO_CACHE = [
  "/taskeearn-pwa/",
  "/taskeearn-pwa/index.html",
  "/taskeearn-pwa/manifest.json",
  "/taskeearn-pwa/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
