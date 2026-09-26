import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClSIOgH36x5hiyrs5f8MSFfVZOUbb8R-s",
  authDomain: "e-commerce-app-e8d26.firebaseapp.com",
  projectId: "e-commerce-app-e8d26",
  storageBucket: "e-commerce-app-e8d26.firebasestorage.app",
  messagingSenderId: "147375388325",
  appId: "1:147375388325:web:134dd6e43c1ff3c8c9ff4c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth