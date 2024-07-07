import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import img from "../../assets/Login.png";

function Navbar() {
  const { user } = useContext(Context);

  return (
    <>
      <nav className="flex sticky top-0 z-10 bg justify-between items-center px-4 py-3 md:px-20 md:py-4 border-b border-black">
        <div>
          <h1 className="text-4xl font-bold">Poster</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            {user?.name ? (
              <>
                <li>
                  <NavLink to={"/read"}>Read</NavLink>
                </li>
                <li>
                  <NavLink to={"/write"}>Write</NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"}>
                    <img src={img} className="h-8 w-8 rounded-full" alt="" />
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <button className="bg-indigo-500 px-5 py-2 font-semibold text-white rounded-3xl">
                  <NavLink to={"/login"}>Login</NavLink>
                </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
