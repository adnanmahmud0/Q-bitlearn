import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Pages/Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }




    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            } else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        signInWithGoogle,
        updateUserProfile,
        passwordReset,

    }

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;