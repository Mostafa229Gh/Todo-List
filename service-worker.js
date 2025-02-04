const CACHE_NAME = "todo-app-cache-v1.01";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/css/main.196adf7c.css",
  "/static/js/main.898bf3ba.js",
  "/static/js/453.81f383cb.chunk.js",
  "/static/media/check.a9a35a3745131b9fd766.svg",
  "/LogoD.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
