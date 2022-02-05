import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrsSi0JqaZ6bE1WS9JDJUrL6Tuusy98Fw",
  authDomain: "house-market-place-99a5b.firebaseapp.com",
  projectId: "house-market-place-99a5b",
  storageBucket: "house-market-place-99a5b.appspot.com",
  messagingSenderId: "960265913900",
  appId: "1:960265913900:web:2fafc01e04ca5d08cfb389",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
