const CACHE_NAME = 'csv-editor-v4'; // Tăng version để ép cập nhật
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  // Buộc Service Worker mới trở thành active ngay lập tức
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  // Xóa toàn bộ cache cũ
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Chiến lược: Ưu tiên mạng, nếu lỗi thì lấy từ cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
