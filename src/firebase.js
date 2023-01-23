// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYurYzuSNddRen-zKRD4OMIi1atykOnuk",
  authDomain: "admin-panel-706a5.firebaseapp.com",
  projectId: "admin-panel-706a5",
  storageBucket: "admin-panel-706a5.appspot.com",
  messagingSenderId: "361099372252",
  appId: "1:361099372252:web:3fc792417fac11cf71f619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);