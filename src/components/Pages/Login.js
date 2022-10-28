import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/Context";

const Login = () => {
  const navigate = useNavigate()

  const location= useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(from)
  const {logIn,
    signINWithGoogle,
    signInwithFacebook}=useContext(AuthContext)

  const [userInfo, setUserInfo]= useState({
    email: '',
    password: '',
  })
  const [userError, setUserError]= useState({
    
    emailError: '',
    passwordError: '',
  })

  const handleEmail=(e)=>{
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      console.log(validEmail)
    if(!validEmail){
      setUserError({...userError, emailError: 'please provide a valid email'})
      setUserInfo({...userInfo, email:e.target.value})
    }else{
      setUserError({...userError, emailError: ''})
      setUserInfo({...userInfo, email:e.target.value})
    }
  }

  const handlePassword =(e)=>{
    setUserInfo({...userInfo, password:e.target.value})
 }

 const handleLogIN=(e)=>{
  e.preventDefault()
  logIn(userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    toast.success('Successfully logged!')
    navigate(from, {replace:true})
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
 }
  
 const handlegooleLogin=()=>{
  signINWithGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    // The signed-in user info.
    const user = result.user;
    toast.success('Successfully user Created!')
    navigate(from, {replace:true})
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error({errorMessage})
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    toast.success('succesfully login')
  });
  
  
 }

 const handleFacebook=()=>{
  signInwithFacebook()
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    toast.success('Successfully user Created!')
    navigate(from, {replace:true})
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    toast.error({errorMessage})
    // ...
  });
}


  return (
    <div className="w-5/6 lg:w-3/6 mx-auto border shadow-lg mt-8 mb-8">
      <div className="">
        <div className="w-3/6 mx-auto flex mt-4">
          <img src={logo} className="w-8 h-8  mr-2 lg:mr-4" alt="" />
          <h1 className="text-center  text-2xl mb-4 text-[#2C6DB0]">Please Login!</h1>
        </div>

        <form className="p-4">
          <div className="mb-6">
            {
              userError && <p className="text-sm text-[#ff6a2f]">{userError.emailError}</p>
            }
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              
            />
            <p>error</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              placeholder="password"
              
            />
          </div>
          <p  className='text-sm mb-4'> New Here?  <Link to="/register" className='text-blue-500 '><span className='underline'>Please register !!</span></Link></p>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className="w-5/6 mx-auto text-center">
          <button
            onClick={handleLogIN}
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Login
          </button>
          </div>
       <div className="mt-4 text-center">
       <button 
       onClick={handlegooleLogin}
       type="button" className="text-white bg-[#2673f0] hover:bg-[#4285F4]/90 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
<button
  onClick={handleFacebook}
  type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
  Sign in with Facebook
</button>
       </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
