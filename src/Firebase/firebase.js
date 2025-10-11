// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0IcHP6Yv4KifkPbbS-OUdfN1a9bf2CLM",
    authDomain: "health-x-fe584.firebaseapp.com",
    projectId: "health-x-fe584",
    storageBucket: "health-x-fe584.firebasestorage.app",
    messagingSenderId: "561390132891",
    appId: "1:561390132891:web:fdda266b2a499d8c36303e",
    measurementId: "G-FLGDVS4F8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 