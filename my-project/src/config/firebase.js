// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF7p2GEfcx6JkvK9kr9lq2_rjiFWw-FDg",
    authDomain: "vite-contact-a9a7e.firebaseapp.com",
    projectId: "vite-contact-a9a7e",
    storageBucket: "vite-contact-a9a7e.appspot.com",
    messagingSenderId: "778934948466",
    appId: "1:778934948466:web:c45c7dda77d87a6671a8eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
