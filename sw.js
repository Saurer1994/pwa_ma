self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);            
        })
    )
    console.log("Install dcode!");
})

self.addEventListener("fetch", e => {
    console.log("Fetch from Cache");
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )

})
