"use client";
import { type FirebaseOptions, initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDE9-F-tJgOOD0tUFVhjOwawS2KVWhi7ps",
  authDomain: "test1-db675.firebaseapp.com",
  projectId: "test1-db675",
  storageBucket: "test1-db675.appspot.com",
  messagingSenderId: "934895313032",
  appId: "1:934895313032:web:bbca63858a02e9ba443f3d",
  measurementId: "G-SQML950GRY"
};

const firebaseapp = initializeApp(firebaseConfig);

export const messaging = () => getMessaging(firebaseapp);

export default firebaseapp;