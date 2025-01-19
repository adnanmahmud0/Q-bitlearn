import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile, 
    sendPasswordResetEmail 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Pages/Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUserProfile = async (name, photo) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
            // Update the user state with the latest details
            setUser({
                ...auth.currentUser,
                displayName: name,
                photoURL: photo,
            });
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser); // Update the state with the current user
            if (currentUser) {
                try {
                    const userInfo = { email: currentUser.email };
                    const res = await axiosPublic.post('/jwt', userInfo);

                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                } catch (error) {
                    console.error("Error fetching token:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            console.log("Authenticated User:", currentUser);
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        signInWithGoogle,
        updateUserProfile,
        passwordReset,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
