import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

import 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3qMO5WNeiB7dusazKLU_Sx7d9gE9nbvY",
    authDomain: "contactformportfolio-e8d5e.firebaseapp.com",
    projectId: "contactformportfolio-e8d5e",
    storageBucket: "contactformportfolio-e8d5e.appspot.com",
    messagingSenderId: "519467252287",
    appId: "1:519467252287:web:9bb293a3732b42669f968a",
    measurementId: "G-5VB37DEHTZ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const fireDB = getFirestore(firebase)

export default fireDB