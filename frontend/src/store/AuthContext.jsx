import { createContext } from "react";

export const AuthContext=createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider=({children})=>{
    return <AuthContext.Provider value={{authenticated:false}}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider