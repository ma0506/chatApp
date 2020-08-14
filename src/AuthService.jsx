import React, { useState,useEffect }from 'react';
import firebase from './config/firebase';

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    // firebase.auth().onAuthStateChanged(account => {
    //     setUser(account)
    // })
    // firebase.auth().onAuthStateChanged(setUser)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])
    
    return (
        <AuthContext.Provider value = {user}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext; 
export {
    AuthProvider
}
