
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBrr83vwBLEXeexnTKvIANyr6THSqNW7TI",
    authDomain: "clone-project-pooja.firebaseapp.com",
    projectId: "clone-project-pooja",
    storageBucket: "clone-project-pooja.appspot.com",
    messagingSenderId: "504382199194",
    appId: "1:504382199194:web:0304f09761257b0b299623",
    measurementId: "G-T14LTHPW6Z"
  };

const firebaseApp =  initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);



export { db, auth, provider}