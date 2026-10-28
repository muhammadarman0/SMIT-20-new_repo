import React, { use, useEffect, useState } from 'react'
import auth from '../auth/auth'
import { signOut } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const [loading,setLoading] = useState(true)
    const [allow,setAllow] = useState(true)
    useEffect(()=>{
const checkAdmin = async() => {
    const user = auth.currentUser;
    console.log(user);
    
    if(!user){
        setAllow(false)
        setLoading(false)
        return
    }
    if(user.email === "admin@mail.com"){
        setAllow(true)
    }else{
        await signOut(auth)
        setAllow(false)
    }
    setLoading(false)
}
checkAdmin()

    },[])
    if(loading){
    return <p>Check Admin........</p>
}
 return allow ? <Outlet /> : <Navigate to="/" replace />;
 
}

export default ProtectedRoute