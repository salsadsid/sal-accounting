// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr0PhDY0oMAY2V4j5twq9OrSFDJwkcDoE",
    authDomain: "sal-accounting.firebaseapp.com",
    projectId: "sal-accounting",
    storageBucket: "sal-accounting.appspot.com",
    messagingSenderId: "865307132858",
    appId: "1:865307132858:web:969d76afd1d9be3aab1383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;