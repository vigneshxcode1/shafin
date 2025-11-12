// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb9YAUhC0REQYnbeOI-3_KlPghgk2Q9vY",
  authDomain: "zculturelogin.firebaseapp.com",
  projectId: "zculturelogin",
  storageBucket: "zculturelogin.firebasestorage.app",
  messagingSenderId: "167982861158",
  appId: "1:167982861158:web:2983cc668d2d95805116a7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

