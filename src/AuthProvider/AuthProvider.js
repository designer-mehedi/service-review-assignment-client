import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const googleAuthProvider = new GoogleAuthProvider(); 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) 
    }

     const googleSignIn = () => {
            setLoading(true);
			return signInWithPopup(auth, googleAuthProvider);
		};

    const logOut = () => {
        setLoading(true); 
        return signOut(auth); 
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser); 
            setUser(currentUser); 
            setLoading(false); 
        });
        return () => unsubscribe; 
    }, [])

    const authInfo = {
		user,
		createUser,
		loginUser,
        googleSignIn,
		loading,
		logOut
	};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;