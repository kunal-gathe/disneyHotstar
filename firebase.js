// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-jg3FyiLG3KU9NCbqkshH6fbrwvb4B0",
  authDomain: "test1-2161e.firebaseapp.com",
  projectId: "test1-2161e",
  storageBucket: "test1-2161e.appspot.com",
  messagingSenderId: "799099668760",
  appId: "1:799099668760:web:9b5ef55efc4f328758b66d",
  measurementId: "G-RGJ5RHEWRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
