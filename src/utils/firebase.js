// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATOIx6USd36wXHloISRMnc5Jo1e3z7kSQ",
  authDomain: "test2-93db0.firebaseapp.com",
  projectId: "test2-93db0",
  storageBucket: "test2-93db0.appspot.com",
  messagingSenderId: "569480067393",
  appId: "1:569480067393:web:3b30a1b35541d81596c9c0",
  measurementId: "G-3S6FPZVS64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();