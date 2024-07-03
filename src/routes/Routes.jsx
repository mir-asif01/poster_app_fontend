import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/main/Home";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import About from "../components/main/About";
import Read from "../components/main/Read";
import Write from "../components/main/Write";

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
                path : "/read",
                element : <Read></Read>
            },
            {
                path : "/write",
                element : <Write></Write>
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