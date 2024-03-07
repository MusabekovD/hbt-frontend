import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth" ;

const firebaseConfig = {
  apiKey: "AIzaSyCQWM0rs3dX_ASOwvh3AR_SvhESkN7S_4c",
  authDomain: "eastern-adapter-380806.firebaseapp.com",
  projectId: "eastern-adapter-380806",
  storageBucket: "eastern-adapter-380806.appspot.com",
  messagingSenderId: "115672116830",
  appId: "1:115672116830:web:7ad2267f095c2bd9fe4ecf",
  measurementId: "G-LYJJ0C4ZC3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()