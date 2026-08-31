// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcW7yHNL1tKLOeMavTTZTOTOdFcs6JkzI",
    authDomain: "hanelquiz.firebaseapp.com",
    projectId: "hanelquiz",
    storageBucket: "hanelquiz.firebasestorage.app",
    messagingSenderId: "995728643515",
    appId: "1:995728643515:web:2bf7f74c69a858d42c609e"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDB = getFirestore();
