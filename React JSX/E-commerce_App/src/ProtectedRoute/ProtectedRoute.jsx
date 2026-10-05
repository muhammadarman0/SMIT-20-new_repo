import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Navigate to={"/login"} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
