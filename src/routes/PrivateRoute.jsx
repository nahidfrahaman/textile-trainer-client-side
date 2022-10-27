import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {userdetails,loader}= useContext(AuthContext)
  
   if(loader){
    return <div>Loading ...</div>
   }

    if(userdetails && userdetails.uid){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace/> ;
};

export default PrivateRoute;