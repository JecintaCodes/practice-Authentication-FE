import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Layout from "../Components/common/Layout";
// import HomePage from "../pages/userPages/HomePage";


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element:<SignUp/>,
    },
    {
        path: "/sign-in",
        element:<SignIn/>,
    },
    {
        path: "/layout",
        element:<Layout/>,
        // children:[
        //     {
        //         index:true,
        //         element:<HomePage/>
        //     }
        // ]
    },
])