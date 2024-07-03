import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const storedToken = localStorage.getItem('Token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const storeToken = (serverToken) => {
        localStorage.setItem('Token', serverToken);
        setToken(serverToken);
    };


     const getToken = () => {
        return token
    };

    const removeToken = () => {
        localStorage.removeItem('Token');
        setToken(null);
    };

    return <AuthContext.Provider value={{storeToken, getToken,removeToken}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    const authContextValue =useContext (AuthContext);

    return authContextValue;
}