importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDE9-F-tJgOOD0tUFVhjOwawS2KVWhi7ps",
  authDomain: "test1-db675.firebaseapp.com",
  projectId: "test1-db675",
  storageBucket: "test1-db675.appspot.com",
  messagingSenderId: "934895313032",
  appId: "1:934895313032:web:bbca63858a02e9ba443f3d",
  measurementId: "G-SQML950GRY"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message!!!', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});