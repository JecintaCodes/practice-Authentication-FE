import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Layout from "../Components/common/Layout";
import HomePage from "../pages/HomePage";
import HomeScreen from "../pages/HomeScreen";
import Category from "../pages/auth/Category";
import ViewFriend from "../pages/ViewFriend";
import ViewRequest from "../pages/ViewRquest";
import Friends from "../pages/Friends";
import ViewArticles from "../pages/ViewArtcles";
import Authors from "../pages/Authors";
import ViewAuthors from "../pages/ViewAuthors";
import ContentPage from "../pages/ContentPage";

export const mainRoute = createBrowserRouter([
    {
        path: "/signup",
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
    path:"/",
    element:<Layout/>,
    children:[
        {
            index: true,
            element:<HomePage/>,
        },
        {
            path:"/homescreen",
            element:<HomeScreen/>,
        },
        {
            path:"/view-friend",
            element:<ViewFriend/>,
        },
        {
            path:"/view-request",
            element:<ViewRequest/>,
        },
        {
            path:"/friends",
            element:<Friends/>,
        },
       
        {
            path:"/authors",
            element:<Authors/>,
        },
        {
            path:"/view-authors",
            element:<ViewAuthors/>,
        },
        {
            path:"/view-authors",
            element:<ViewAuthors/>,
        },
        {
            path:"/content-page",
            element:<ContentPage/>,
        },
    ]
   },
])