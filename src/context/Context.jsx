import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Shared/firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();




const Context = ({ children }) => {
  const [user,setUser]= useState();

 const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateName = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: { name },
      photoURL: { photoURL },
    });
  };

  useEffect(()=>{
  const  unsubcribe= onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
  })

  },[])

  const authInfo = {
    user,
    createUser,
    updateName,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
