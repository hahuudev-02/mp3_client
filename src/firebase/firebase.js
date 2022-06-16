// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCgYAjRizmKFWhOwQLtO-Teh7D-ANC_5k",
  authDomain: "huu-music.firebaseapp.com",
  projectId: "huu-music",
  storageBucket: "huu-music.appspot.com",
  messagingSenderId: "713960602308",
  appId: "1:713960602308:web:67554d490bb33ef6596791",
  measurementId: "G-03DDFFXZ21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


export { app, analytics, auth };