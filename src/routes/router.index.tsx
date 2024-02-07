import {createBrowserRouter } from "react-router-dom";
import App from "@/App";
import SignIn from "@/pages/SignIn/signIn.index";
import { publicRoutes } from "./public/public";
export const router=createBrowserRouter([{
    path: publicRoutes.signIn,
    element: <App/>,
    children:[{
        index:true,
        element:<SignIn/>
    }]
}])

