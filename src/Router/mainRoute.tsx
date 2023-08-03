import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Layout from "../Components/common/Layout";
import HomePage from "../pages/HomePage";
import HomeScreen from "../pages/HomeScreen";
import Category from "../pages/auth/Category";


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element:<SignUp/>,
    },
    {
        path: "/category",
        element:<Category/>,
    },
    {
        path: "/sign-in",
        element:<SignIn/>,
    },
    {
        path: "/layout",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>,
            },
            {
                index:true,
                element:<HomeScreen/>,
            },
        ]
    },
])