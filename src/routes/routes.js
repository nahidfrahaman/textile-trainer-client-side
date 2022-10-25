import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import Blog from "../components/Pages/Blog";
import Cources from "../components/Pages/Cources";
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
                path: "/home",
                element: <Home></Home>
            },
            {
                path:"/cources",
                element: <Cources></Cources>
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
