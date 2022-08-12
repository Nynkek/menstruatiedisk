// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "menstruatiedisk.firebaseapp.com",
    projectId: "menstruatiedisk",
    storageBucket: "menstruatiedisk.appspot.com",
    messagingSenderId: "117814409687",
    appId: "1:117814409687:web:73430c60902498065bb392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);