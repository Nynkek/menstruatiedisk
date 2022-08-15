import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "menstruatiedisk.firebaseapp.com",
    databaseURL: "https://menstruatiedisk-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "menstruatiedisk",
    storageBucket: "menstruatiedisk.appspot.com",
    messagingSenderId: "117814409687",
    appId: "1:117814409687:web:73430c60902498065bb392"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);