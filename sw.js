
// Service Worker

// Send notification on push
self.addEventListener('push', (e) => {

  let n = self.registration.showNotification('A notification from the SW.');
  e.waitUntil(n);
});


// //to send messsagesss

// // Service Worker

// self.addEventListener('message', (e) => {

//   // Respond to all clients
//   self.clients.matchAll().then((clients) => {

//     clients.forEach((client) => {

//       // Only respond to sending client
//       if (e.source.id === client.id) {
//         client.postMessage("Private Hello from Service Worker");
//       }
//     });
//   });

// });
