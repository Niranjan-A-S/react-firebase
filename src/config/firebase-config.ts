// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArm5FE5lf666Noyzc1f3bPMMIG2ut2vXI",
    authDomain: "expense-tracker-2f211.firebaseapp.com",
    projectId: "expense-tracker-2f211",
    storageBucket: "expense-tracker-2f211.appspot.com",
    messagingSenderId: "303892863412",
    appId: "1:303892863412:web:22e456dd6b9aa35c997ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();