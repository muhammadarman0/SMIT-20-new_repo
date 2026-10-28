import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAirh3ILqbf9NKq1ZOHeS-mJV4CcEgvcpQ",
  authDomain: "role-based-ui.firebaseapp.com",
  projectId: "role-based-ui",
  storageBucket: "role-based-ui.firebasestorage.app",
  messagingSenderId: "1054000883361",
  appId: "1:1054000883361:web:80ec6cdffd8596851972e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export default auth;
