// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZ4EoB0EdfWZ40tieu5h05dGZHNaMM0Y",
  authDomain: "delivery-app-frontend.firebaseapp.com",
  projectId: "delivery-app-frontend",
  storageBucket: "delivery-app-frontend.appspot.com",
  messagingSenderId: "581247290622",
  appId: "1:581247290622:web:52ff24e5ebae4dc2ada9af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)