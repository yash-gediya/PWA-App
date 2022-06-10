let cacheData = "appV1";
this.addEventListener("install", (event: any) => {
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
        ]);
      })
      .catch((error) => {
        console.log(error);
      })
  );
});

this.addEventListener("fetch", (event: any) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((resp) => {
          if (resp) {
            return resp;
          }
          let requestUrl = event.request.clone();
          fetch(requestUrl);
        })
        .catch((err) => console.log(err))
    );
  }
});
