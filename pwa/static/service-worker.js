const CACHE_NAME = 'cache-v1'

const urlsToCache = [
  '/',
  'icon48.png',
  'icon144.png',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'styles.css',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', event => {
  console.log("SW Activated", event)
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => { // Response may be null if not in cache
        if (response) {
          return response
        } else {
          return fetch(event.request)
        }
      })
  )
})

