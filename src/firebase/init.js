import {getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Ra6cnhK78OM9jJCPkOTHkj_6_tA6cxM",
  authDomain: "honkai-star-rail-relic-scan.firebaseapp.com",
  projectId: "honkai-star-rail-relic-scan",
  storageBucket: "honkai-star-rail-relic-scan.appspot.com",
  messagingSenderId: "508733720109",
  appId: "1:508733720109:web:56d9fbf1ed7283caf0daa4",
  measurementId: "G-MV8QPDTJT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
export default db