const CACHE_NAME = "little-oracle-v48-auth-reset-field";
const APP_SHELL = [
  "./",
  "./index.html",
  "./admin.html",
  "./styles.css?v=auth-reset-field-20260903",
  "./admin.css?v=auth-reset-field-20260903",
  "./app.js?v=auth-reset-field-20260903",
  "./assets/fonts/jinmei-doudou.ttf",
  "./assets/fonts/guaiguai.ttf",
  "./admin.js?v=auth-reset-field-20260903",
  "./manifest.webmanifest",
  "./version.json",
  "./admin.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (new URL(event.request.url).pathname.startsWith("/api/")) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
