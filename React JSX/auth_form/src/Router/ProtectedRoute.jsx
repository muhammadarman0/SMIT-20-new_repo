import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const loginUser = false;
    if(!loginUser){
        return <Navigate to={"/login"}/>
    }
};

export default ProtectedRoute;
