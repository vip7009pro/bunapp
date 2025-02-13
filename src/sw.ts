// sw.ts

self.addEventListener('push', (event: any) => {
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(
    (self as unknown as ServiceWorkerGlobalScope).registration.showNotification('Notification Title', options)
  );
});
