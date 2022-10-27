import { useContext } from "react";
import { AuthContext } from "../context/Context";

const PrivateRoute = ({children}) => {
    
    const {userdetails}=useContext(AuthContext)
    console.log(userdetails)
    if(userdetails?.uid){
        return children;
    }
    return <navigate to='login'></navigate>
       ;
};

export default PrivateRoute;