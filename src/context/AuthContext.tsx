import { createContext, useState, useEffect } from "react";
import firebaseService from "../services/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any>(null)
    const [isLoaded, setIsLoaded] = useState<Boolean>(false)

    useEffect(() => {
        firebaseService.auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsLoaded(true);
        })

    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, isLoaded}}>
            {children}
        </AuthContext.Provider>
    )

}