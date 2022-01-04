// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmO6ewQiieQg0-uT4cXSrtKVwk7qelVZo",
    authDomain: "ecommerce-sneakers.firebaseapp.com",
    projectId: "ecommerce-sneakers",
    storageBucket: "ecommerce-sneakers.appspot.com",
    messagingSenderId: "368854226427",
    appId: "1:368854226427:web:caa763c9152d7c2ee8a75e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db