self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);            
        })
    )
    console.log("Install dcode!");
})

self.addEventListener("fetch", e => {
    e.responseWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )

})