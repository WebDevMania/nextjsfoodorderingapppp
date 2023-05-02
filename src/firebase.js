// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_djmJyDWjcBOKWektXz8K8HhYCqViW2s",
    authDomain: "food-ordering-app-f0cf2.firebaseapp.com",
    projectId: "food-ordering-app-f0cf2",
    storageBucket: "food-ordering-app-f0cf2.appspot.com",
    messagingSenderId: "54084311841",
    appId: "1:54084311841:web:8c284a9ef5b4b35df3bc60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app