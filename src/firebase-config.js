// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "fir-test-ec17e.firebaseapp.com",
    projectId: "fir-test-ec17e",
    storageBucket: "fir-test-ec17e.appspot.com",
    messagingSenderId: "1079732807865",
    appId: "1:1079732807865:web:88f889db81e5c729215368",
    measurementId: "G-YB86EM9QR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);