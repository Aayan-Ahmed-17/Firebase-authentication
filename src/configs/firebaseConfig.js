// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrSUNuqRS9e8p9gBpR2cABY1nIE_k4ZgQ",
  authDomain: "fire-auth-291024.firebaseapp.com",
  projectId: "fire-auth-291024",
  storageBucket: "fire-auth-291024.appspot.com",
  messagingSenderId: "905232136398",
  appId: "1:905232136398:web:e3e519aeda23496dcdb89f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);