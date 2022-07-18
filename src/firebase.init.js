// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDDNJy3cldfW8V5OxYjhwb7X_0j3ogXJM",
    authDomain: "your-warehouse.firebaseapp.com",
    projectId: "your-warehouse",
    storageBucket: "your-warehouse.appspot.com",
    messagingSenderId: "649902779144",
    appId: "1:649902779144:web:f29fe6227d30589363dabd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 