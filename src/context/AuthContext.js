import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
 } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const gmailRef = useRef(null)
  const [user, setUser] = useState({});

 const signUp = async (email, password)=>{
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut () {
    return signOut(auth);
  }
  function signInWithGoogle(){
    signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unSubscribed();
    }
  })


  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, user, signInWithGoogle,  }}>
      {children}
    </AuthContext.Provider>
  );
}
export const UserAuth = () => useContext(AuthContext);
