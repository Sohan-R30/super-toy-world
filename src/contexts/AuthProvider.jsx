/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../utils/firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignInUser = () => {
        setLoading(false)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }) 
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignInUser,
        signOutUser,
        auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;