let cacheData = "appV1";
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) => {
        cache.addAll([
          "/static/js/bundle.js",
          "/favicon.ico",
          "/logo192.png",
          "/ws",
          "/manifest.json",
          "/index.html",
          "/",
          "/users",
          "/about",
          "/static/js/main.3c66cd22.js",
          "/static/css/main.38cd8d06.css",
        ]);
      })
      .catch((error) => {
        console.log(error);
      })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((resp) => {
          if (resp) {
            return resp;
          }
          // let requestUrl = event.request.clone();
          // fetch(requestUrl);
        })
        .catch((err) => console.log(err))
    );
  }
});
