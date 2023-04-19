// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmM38QNEB7XA_zCzt0mZSWBeVuWcC0gQo",
  authDomain: "m61-ema-john-firebase-auth.firebaseapp.com",
  projectId: "m61-ema-john-firebase-auth",
  storageBucket: "m61-ema-john-firebase-auth.appspot.com",
  messagingSenderId: "431692441656",
  appId: "1:431692441656:web:8ffacb13c517c70f5d5ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;