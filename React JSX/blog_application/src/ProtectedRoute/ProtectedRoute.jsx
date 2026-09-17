import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = React.useState(10);
  const navigate = useNavigate();
  console.log(user);

  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getUser();
    return () => getUser();
  }, []);

  if (loading) {
    return <p>Loading Users</p>
  }
  if (user) {
    return <>{children}</>;
  } else {
    navigate("/login");
  }
};

export default ProtectedRoute;
