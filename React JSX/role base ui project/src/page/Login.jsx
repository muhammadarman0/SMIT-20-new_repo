import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import auth, { db } from '../auth/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

const [role, setRole] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate()

const loginHandlerWithRoleBased = async () => {
  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    // Firebase login
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Firestore se user ka role lena
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      alert("User data not found!");
      return;
    }

    const userData = userSnap.data();

    // Email verification against the saved profile
    if (userData.email !== user.email) {
      alert("User profile does not match!");
      return;
    }

    if (userData.role === "admin") {
      setRole("admin");
      navigate("/admin")
    } else if (userData.role === "user") {
      setRole("user");
      navigate("/user")
    } else {
      alert("Invalid role!");
    }
  } catch (error) {
    console.error("Login failed:", error);

    if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      alert("Invalid email or password");
    } else {
      alert(error.message || "Login failed!");
    }
  } finally {
    setLoading(false);
  }
};

 
// if (role === "admin") {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, Admin!</p>
//     </div>
//   );
// }

// if (role === "user") {
//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <p>Welcome, User!</p>
//     </div>
//   );
// }
  return (
<>
<input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter your email' />

<input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
<button
  onClick={loginHandlerWithRoleBased}
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>
</>
    
  )
}

export default Login