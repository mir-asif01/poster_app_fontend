import { NavLink } from "react-router-dom"
import img from "../../assets/Login.png"

function Navbar() {
  const userStr = localStorage.getItem("user")
  const user = JSON.parse(userStr)
  console.log(user)
  return (
    <>
      <nav className="flex sticky top-0 z-10 bg justify-between items-center px-4 py-3 md:px-20 md:py-4 border-b border-black">
        <div>
          <h1 className="text-4xl font-bold">
            <NavLink to={"/"}>Poster</NavLink>
          </h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            {user?.email ? (
              <>
                <li>
                  <NavLink to={"/read"}>Read</NavLink>
                </li>
                <li>
                  <NavLink to={"/write"}>Write</NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"}>
                    <img
                      src={user?.profileImage ? user?.profileImage : img}
                      className="h-8 w-8 rounded-full"
                      alt=""
                    />
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
  )
}
export default Navbar
