import { createBrowserRouter } from "react-router-dom";
import Cources from "../components/Cources/Cources";
import Home from '../components/Home/Home';
import Blog from "../components/Pages/Blog";
import Errorpage from "../components/Pages/Errorpage";
import Login from "../components/Pages/Login";
import Resgistration from "../components/Pages/Resgistration";
import Main from "./Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path:"/courses",
                element: <Cources></Cources>,
                loader: async ()=>{
                    return fetch('http://localhost:5000/courses')
                }
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Resgistration></Resgistration>
            },

        ]
    }
])
