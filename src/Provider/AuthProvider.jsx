import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const googleProvider = new GoogleAuthProvider();



    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;