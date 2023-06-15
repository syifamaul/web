const cacheName = 'v1'

const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

const fetchEvent = () => {
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
};



const installEvent = () => {
    self.addEventListener('install', () => {
      console.log('service worker installed');
    });
};
  

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open("v1")
        .then((cache) =>
          cache.addAll([
            "/"])
        )
    );
  });
  
  const activateEvent = () => {
    self.addEventListener('activate', () => {
      console.log('service worker activated');
    });
};
  
activateEvent();
fetchEvent();
installEvent();
  