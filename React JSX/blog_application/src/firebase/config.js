import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0V4NIfwpxNPHb859O2Yi30ZrJe1aLof0",
  authDomain: "blog-application-283fd.firebaseapp.com",
  projectId: "blog-application-283fd",
  storageBucket: "blog-application-283fd.firebasestorage.app",
  messagingSenderId: "472095020897",
  appId: "1:472095020897:web:d5724456acc740fb02d720",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;
