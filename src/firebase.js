// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXPjMtHZ3c2Jfinbp9OVcc21R8A94Y-ak",
  authDomain: "ecommerce-ef59c.firebaseapp.com",
  projectId: "ecommerce-ef59c",
  storageBucket: "ecommerce-ef59c.firebasestorage.app",
  messagingSenderId: "754078487016",
  appId: "1:754078487016:web:7f90477f325ff1735d145d",
  measurementId: "G-8KDWM0M3X1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };