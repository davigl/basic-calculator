if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(
        (registration) => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          );
        },
        (err) => {
          console.log('ServiceWorker registration failed: ', err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  });
} else {
  console.log('ServiceWorker is not supported');
}
