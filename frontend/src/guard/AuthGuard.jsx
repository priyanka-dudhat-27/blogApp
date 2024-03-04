// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
    const {authenticated}=useContext(AuthContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if(authenticated){
            navigate('/');
       }
    },[authenticated, navigate])
  return <div>{children}</div>;
}

export default AuthGuard;
