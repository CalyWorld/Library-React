// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nhgOZT3T6VsAM6ap_ko8oe074FgweMw",
  authDomain: "library-react-ec857.firebaseapp.com",
  projectId: "library-react-ec857",
  storageBucket: "library-react-ec857.appspot.com",
  messagingSenderId: "998752352378",
  appId: "1:998752352378:web:11b0a2ff0827020f9ca3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}