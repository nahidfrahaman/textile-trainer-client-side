import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Shared/firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
export const AuthContext = createContext();


const Context = ({ children }) => {
  const [userdetails,setUserdetails]= useState({});
  const [loader, setLoader]=useState(true)

 const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateName = (name,photo) => {
    
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL: photo ,
     
    });
  };

  const signINWithGoogle=()=>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const signInwithFacebook=()=>{
   return signInWithPopup(auth, facebookProvider)
  }

  useEffect(()=>{
  const unsubcribe= onAuthStateChanged(auth, LoggedUser=>{
    setUserdetails(LoggedUser)
    setLoader(false)
  })
   return ()=>{
    unsubcribe();
   }
  },[])

  const LogOut=()=>{
   return signOut(auth)
  }

  const authInfo = {
    userdetails,
    createUser,
    updateName,
    signInwithFacebook,
    signINWithGoogle,
    logIn,
    LogOut,
    loader,
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
