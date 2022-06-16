import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

export const AuthContext = React.createContext();

export default function ContexUser({ children }) {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL, phoneNumber } = user;
                setUser({
                    displayName,
                    email,
                    uid,
                    photoURL,
                    phoneNumber,
                });
                navigate('/', { replace: false });
            } 
            else navigate('/login');
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
