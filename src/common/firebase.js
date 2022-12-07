// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMSU6m2m3R_nherN-JBlEjBKYEmw5U84o",
  authDomain: "laslesvpn-payment.firebaseapp.com",
  projectId: "laslesvpn-payment",
  storageBucket: "laslesvpn-payment.appspot.com",
  messagingSenderId: "140024102969",
  appId: "1:140024102969:web:764474dafaee05f85d4de8",
  measurementId: "G-T2VJWSFPJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
