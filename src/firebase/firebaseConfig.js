// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// You'll replace these placeholder values with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCd4K0xEfuVIR_bz0ArTwj-efiYSX-zWFo",
    authDomain: "challan-app-5afe3.firebaseapp.com",
    projectId: "challan-app-5afe3",
    storageBucket: "challan-app-5afe3.firebasestorage.app",
    messagingSenderId: "624828172719",
    appId: "1:624828172719:web:53cbeba26d156e07f3475a",
    measurementId: "G-Z7V45CB9PF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };