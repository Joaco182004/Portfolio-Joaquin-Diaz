    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_EM_phWeWDl7lGIER8SAz4UONeUz7RIw",
  authDomain: "portfolio-joaquin-diaz.firebaseapp.com",
  projectId: "portfolio-joaquin-diaz",
  storageBucket: "portfolio-joaquin-diaz.appspot.com",
  messagingSenderId: "194474042891",
  appId: "1:194474042891:web:c71457466546cbf8ad490e",
  measurementId: "G-6JMCF6MSGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)
 
export {db}