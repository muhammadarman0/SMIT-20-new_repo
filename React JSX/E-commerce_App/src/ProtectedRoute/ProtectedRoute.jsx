import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    return () => getUser();
  }, []);
  if (loading) {
    return <p>Loading Users</p>;
  }
  if (user) {
    return { children };
  } else {
    navigate("/login");
  }
};

export default ProtectedRoute;
