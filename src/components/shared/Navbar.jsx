import { NavLink } from "react-router-dom"

function Navbar(){
    return <>
        <nav className="flex justify-between items-center md:px-20 md:py-4 border-b border-black bg">
            <div>
                <h1 className="text-4xl font-bold">Poster</h1>
            </div>
            <div>
                <ul className="flex justify-between items-center gap-5">
                    <li className="">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <button className="bg-sky-300 px-5 py-2 font-semibold text-white rounded-3xl">
                        <NavLink to={"/register"}>Read/Write</NavLink>
                    </button>
                </ul>
            </div>
        </nav>
    </>
}
export default Navbar