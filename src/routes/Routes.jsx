import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/main/Home";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import About from "../components/main/About";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            
        ]
    }
]) 