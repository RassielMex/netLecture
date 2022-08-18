// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA3r1H1OIgguVGNI3WQXOW_hYaUaK6Vjc",
  authDomain: "js-netlecture.firebaseapp.com",
  databaseURL: "https://js-netlecture-default-rtdb.firebaseio.com",
  projectId: "js-netlecture",
  storageBucket: "js-netlecture.appspot.com",
  messagingSenderId: "85035158086",
  appId: "1:85035158086:web:f5a5f9ad325850613c9847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
