const CACHE_NAME = "myPortofoliov1";
var urlsToCache = [
    "/",
    "/index.html",
    "/js/app.js",
    "/pages/certifications.html",
    "/pages/educations.html",
    "/pages/experiences.html",
    "pages/nav.html",
    "/pages/home.html",
    "/pages/portofolio.html",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "/css/materialize.min.css",
    "/css/portofolio.css",
    "/js/materialize.min.js",
    "/images/bnsp.jpg",
    "/images/code.jpg",
    "/images/dicoding.jpg",
    "/images/mandita.jpg",
    "/images/qiscus.png",
    "/images/sample-1.jpg",
    "/images/sipedu.png",
    "/images/smk2.png",
    "/images/sschool.png",
    "/images/start-up.png",
    "/images/uny.jpg",
    "/images/web1.png",
    "/images/web2.png",
    "/images/maskable_icon.png",
    "/images/maskable_icon_192px.png",
    "/manifest.json"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    )
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("Serviceworker: Gunakan aset dari cache:", response.url);
                    return response;
                }

                console.log(
                    "Serviceworker: Memuat ase dari server: ",
                    event.request.url
                );
                return fetch(event.request)
            })
    );
});


self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});