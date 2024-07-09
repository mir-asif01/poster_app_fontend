import { NavLink } from "react-router-dom"
import img from "../../assets/not-found.png"

export default function ErrorPage(){
    return <>
        <div className="min-h-screen flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-medium text-center">404 | Page not found</h1>
                <img src={img} className="w-64" alt="" />
                <NavLink className="text-green-600 text-2xl font-bold underline" to="/">Home</NavLink>
            </div>
        </div>
    </>
} 