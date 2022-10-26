import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, signInWithPopup, updateProfile
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Shared/firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();


const Context = ({ children }) => {
  const [userdetails,setUserdetails]= useState();

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
//   useEffect(()=>{
//   const unsubcribe= onAuthStateChanged(auth, currentUser=>{
    
//     setUserdetails(currentUser.auth)
//   })
//    return ()=>{
//     unsubcribe();
//    }
//   },[])

  const authInfo = {
    userdetails,
    createUser,
    updateName,
    signINWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
