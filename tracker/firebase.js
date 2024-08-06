// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6amggpeM1dVWUqmZZl5YVOzLd-WTC88Q",
  authDomain: "pantry-tracker-fb127.firebaseapp.com",
  projectId: "pantry-tracker-fb127",
  storageBucket: "pantry-tracker-fb127.appspot.com",
  messagingSenderId: "58338140172",
  appId: "1:58338140172:web:6334ae57ec8ec5aba84e29",
  measurementId: "G-3GLT4SZCDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {analytics, firestore}
