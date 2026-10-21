import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../Firebase/auth";

const ProtectedRoute = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-lg">Checking authentication...</p>
      </div>
    );
  }
console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
