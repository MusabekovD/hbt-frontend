import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
 } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import html2canvas from 'html2canvas';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const gmailRef = useRef(null)
  const [user, setUser] = useState({});

  const captureScreenshot = () => {
    html2canvas(gmailRef.current).then(canvas => {
      // Convert canvas to image
      const imgData = canvas.toDataURL('image/png');

      // Create a new window and display the screenshot
      const screenshotWindow = window.open();
      screenshotWindow.document.write('<img src="' + imgData + '" width="100%" />');
    });
  }
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
    <AuthContext.Provider value={{ signUp, signIn, logOut, user, signInWithGoogle, captureScreenshot,gmailRef }}>
      {children}
    </AuthContext.Provider>
  );
}
export const UserAuth = () => useContext(AuthContext);
