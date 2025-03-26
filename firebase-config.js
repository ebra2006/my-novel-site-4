// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVgX5siwAvifImpq4_u7T2-s3Wv0oso3g",
  authDomain: "veronnovel-fd5c8.firebaseapp.com",
  projectId: "veronnovel-fd5c8",
  storageBucket: "veronnovel-fd5c8.firebasestorage.app",
  messagingSenderId: "581899832569",
  appId: "1:581899832569:web:423e84bb20e1aa54856628",
  measurementId: "G-PK4WPW2LVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
