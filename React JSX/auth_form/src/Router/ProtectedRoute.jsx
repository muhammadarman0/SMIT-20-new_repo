import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/auth";
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;

        setUser(user);

        // ...
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
    return (
      <>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      </>
    );
  }

  if (user) {

    return children;
  
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
