// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

// eslint-disable-next-line react/prop-types
const GuestGuard = ({children}) => {
    const {authenticated}=useContext(AuthContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if(!authenticated){
            navigate('/login');
       }
    },[authenticated, navigate])
  return (
    <div>{children}</div>
  )
};

export default GuestGuard;