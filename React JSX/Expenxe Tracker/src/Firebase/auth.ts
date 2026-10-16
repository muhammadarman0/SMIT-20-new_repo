import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWbb0sVl531VSIeJ0FXINuExQVkw_Y2Jw",
  authDomain: "expense-tracker-app-4754d.firebaseapp.com",
  projectId: "expense-tracker-app-4754d",
  storageBucket: "expense-tracker-app-4754d.firebasestorage.app",
  messagingSenderId: "184464540984",
  appId: "1:184464540984:web:ba9615c0fe4f9025a3edcd",
  measurementId: "G-E17XB38ZVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
