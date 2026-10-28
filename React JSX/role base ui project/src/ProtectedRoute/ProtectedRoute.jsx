
import { useEffect, useState } from "react";
import auth from "../auth/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAllow(false);
        setLoading(false);
        return;
      }

      if (user.email === "admin@mail.com") {
        setAllow(true);
      } else {
        setAllow(false);
        await signOut(auth);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Checking admin...</p>;
  }

  return allow ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
