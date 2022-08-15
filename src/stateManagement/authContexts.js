import React, {createContext,useState,useCallback, useMemo} from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){

    const Authenticated = 'Authenticated';
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(Authenticated));

    const login = useCallback(() =>  {
        window.localStorage.setItem(Authenticated, true);
        setIsAuthenticated(true)
    },[]) 
    const logout = useCallback(() => {
        window.localStorage.removeItem(Authenticated, true);    
        setIsAuthenticated(false)
    },[])  
    
    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }),[isAuthenticated, login, logout])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}