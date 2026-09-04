import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcJZ3wIzR8b5CPvFwx8i6ny5rmuiQ9Gsk",
  authDomain: "react-with-firebase-1ea1b.firebaseapp.com",
  projectId: "react-with-firebase-1ea1b",
  storageBucket: "react-with-firebase-1ea1b.firebasestorage.app",
  messagingSenderId: "734141946037",
  appId: "1:734141946037:web:bf419556c19e13f71706fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app