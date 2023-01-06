// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAdS1GnptoqVQhBSneLZ54Go1nZbi69Am8",
  authDomain: "laslesvpn-1ec6e.firebaseapp.com",
  projectId: "laslesvpn-1ec6e",
  storageBucket: "laslesvpn-1ec6e.appspot.com",
  messagingSenderId: "585100408328",
  appId: "1:585100408328:web:7a93dd49ab567291b6c3bd",
  measurementId: "G-43JG2T2NER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
