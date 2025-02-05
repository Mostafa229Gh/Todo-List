const CACHE_NAME = "todo-app-cache-v1.06";
const BASE_PATH = "/Todo-List";

self.addEventListener("install", (event) => {
  event.waitUntil(
    fetch(`${BASE_PATH}/asset-manifest.json`)
      .then((response) => response.json())
      .then((manifest) => {
        const urlsToCache = [
          `${BASE_PATH}/`,
          `${BASE_PATH}${manifest.files["index.html"]}`,
          ...Object.values(manifest.files)
            .filter((url) => url.endsWith(".js") || url.endsWith(".css") || url.endsWith(".svg"))
            .map((url) => `${BASE_PATH}${url}`)
        ];
        return caches.open(CACHE_NAME).then((cache) => {
          console.log("Caching files:", urlsToCache);
          return cache.addAll(urlsToCache);
        });
      })
      .catch((error) => console.error("Error fetching asset-manifest.json:", error))
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
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request)
        .then((response) => {
          let responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(`${BASE_PATH}/index.html`));
    })
  );
});
