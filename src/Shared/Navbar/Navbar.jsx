import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import mylogo from "../../assets/logo.png";
import { AuthContext } from "../../context/Context";
import './Navbar.css';


const Navbar = () => {

  const {userdetails,LogOut}= useContext(AuthContext)
  console.log(userdetails)
  const user=userdetails?.displayName

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handlelogout=()=>{
    LogOut()
    toast.success('Successfully logOut!')
  }
  
  return (
    <div>
      <div className="bg-gray-900">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <img src={mylogo} className="w-8 h-8" alt="" />
              <Link
                to="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 text-2xl font-bold tracking-wide   text-[#FEC32D]">
                  Textile Trainer
                </span>
              </Link>
            </div>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/home"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Cources
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </Link>
              </li>
              {
                userdetails?.uid ? 
                <>
                <li>
                <div className="tooltip-container">
                <div className="img-container">
                <img  src={userdetails.photoURL} className="w-8 h-8 rounded-full bg-slate-50" alt="" />
                </div>
                <div>
                  <p className="text-tooltip">{user}</p>
                </div>

                </div>
                
              </li>
              <li>
              <Link
                  onClick={handlelogout}
                  to="/login"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                 Logout
                </Link>
              </li>
            </>
                :  <li>
                <Link
                  to="/login"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  LogIN
                </Link>
              </li>
              
              }
             <li>
             <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
             <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
           <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
  </label>
             </li>
              
            </ul>
            <div className="lg:hidden z-10">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">

              <div className="p-5 bg-gray-900 border rounded shadow-sm">
              <div className="relative top-1 mb-6 rounded">
              <button onClick={() => setIsMenuOpen(false)} className="text-blue m-2 bg-white">Close</button>
              </div>
              <div className="flex items-center ">
              <img src={mylogo} className="w-8 h-8" alt="" />
              <Link
                to="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 text-2xl font-bold tracking-wide   text-[#FEC32D]">
                  Textile Trainer
                </span>
              </Link>
            </div>
                    <nav className="mt-4">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/home"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/courses"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/faq"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            FaQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                         
                        </li>
                        {
                userdetails?.uid ? 
                <>
                <li>
                <div className="tooltip-container">
                <div className="img-container">
                <img  src={userdetails.photoURL} className="w-8 h-8 rounded-full bg-slate-50" alt="" />
                </div>
                <div>
                  <p className="text-tooltip">{user}</p>
                </div>

                </div>
                
              </li>
              <li>
              <Link
                  onClick={handlelogout}
                  to="/login"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                 Logout
                </Link>
              </li>
            </>
                :  <li>
                <Link
                  to="/login"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  LogIN
                </Link>
              </li>
              
              }
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
