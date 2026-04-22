const CACHE_NAME = "yt-focus-v1";

const urlsToCache = [
  "/",
  "index.html",
  "manifest.json",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200..900&display=swap"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch (serve from cache if available)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});