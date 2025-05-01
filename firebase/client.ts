// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNqVaS3FWXMBbQJt_lKAVrBjf69lrvFrA",
  authDomain: "wawancarai-9370b.firebaseapp.com",
  projectId: "wawancarai-9370b",
  storageBucket: "wawancarai-9370b.firebasestorage.app",
  messagingSenderId: "253882092514",
  appId: "1:253882092514:web:ab4db4e8e90e57e3c2c7bb",
  measurementId: "G-NE12XT08X7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);