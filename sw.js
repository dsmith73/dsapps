// Service Worker  
// must be created in the root directory - if created in a sub-dir, then it can only be used for files in that dir  

const VERSION = "1"
const assets = [
    "./", 
    "./src/styles.css", 
    "./images/null192.png", 
    "./images/null32.png", 
    "./images/null16.png",
    "./images/codemind.jpg", 
    "./images/wordle.jpg", 
    "./images/calculator.jpg", 
    "./images/card-match.jpg",
    "./images/mine-sweeper.jpg", 
    "./images/simon-says.jpg",
    "./images/markdown-maker.jpg", 
    "./images/asteroids.jpg", 
    "./images/matrix-screen.jpg", 
    "./images/trivia.jpg", 
    "./images/basic-website.jpg", 
    "./images/synthesizer.jpg",
]


self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(`dsapps-v${VERSION}`).then(cache => {
            return cache.addAll(assets)
        })
    )
})


self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            // run from cached data first -OR- go fetch the data if it isn't cached  
            return response || fetch(e.request)
        })
    )
})

