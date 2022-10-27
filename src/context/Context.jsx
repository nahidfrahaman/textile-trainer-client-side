import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Shared/firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();


const Context = ({ children }) => {
  const [userdetails,setUserdetails]= useState({});

 const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateName = (name,photo) => {
    
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL: photo ,
     
    });
  };

  const signINWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
  }
 
  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(()=>{
  const unsubcribe= onAuthStateChanged(auth, LoggedUser=>{
    
    setUserdetails(LoggedUser)
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
    signINWithGoogle,
    logIn,
    LogOut,
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
