import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
     const storeToken =(serverToken) =>{
        return localStorage.setItem('Token', serverToken)
     }
    return <AuthContext.Provider value={{storeToken}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    const authContextValue =useContext (AuthContext);

    return authContextValue;
}