// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAisjF6za49sjpFzrPUFAn5b32OLY_c-Do",
  authDomain: "hcc-forms.firebaseapp.com",
  projectId: "hcc-forms",
  storageBucket: "hcc-forms.appspot.com",
  messagingSenderId: "54474949482",
  appId: "1:54474949482:web:36221c9de20d7e5ba11b13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
