import { createBrowserRouter } from "react-router-dom";
import Cources from "../components/Cources/Cources";
import Courseoption from "../components/Cources/Courseoption";
import Home from '../components/Home/Home';
import Blog from "../components/Pages/Blog";
import CheckOut from "../components/Pages/CheckOut";
import Errorpage from "../components/Pages/Errorpage";
import Login from "../components/Pages/Login";
import Resgistration from "../components/Pages/Resgistration";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";

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
                    return fetch('https://textile-trainer-server.vercel.app/courses')
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
            {
                path:'/courseoption/:id',
                loader: async ({params})=>{
                    return fetch(`http://localhost:5000/courseoption/${params.id}`)
                },
                element:<PrivateRoute>
                              <Courseoption></Courseoption>
                        </PrivateRoute>
            },
            {
                path:'/checkout',
                element: <CheckOut></CheckOut>
            }

        ]
    }
])
