import { NavLink, useNavigate } from "react-router-dom"
import img from "../../assets/Login.png"
function Profile() {
  const navigate = useNavigate()
  const userStr = localStorage.getItem("user")
  const user = JSON.parse(userStr)
  if (user === null) {
    navigate("/login")
  }
  const {
    fullName,
    currentPosition,
    about,
    profileImage,
    facebookProfileLink,
    githubProfileLink,
    linkedInProfileLink,
    likesCount,
    postsCount,
  } = user

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 md:p-10 md:gap-10 w-full">
        <div className="my-10">
          <ul className="flex flex-col justify-center items-center gap-2">
            {/* <li className="bg-indigo-500 px-6 py-1 rounded-2xl text-white font-medium">
              <NavLink to={"/edit"}>Edit</NavLink>
            </li> */}
            <li className="bg-indigo-500 px-6 py-1 rounded-2xl text-white font-medium">
              <NavLink to={"/all-posts"}>All Posts</NavLink>
            </li>
            <li className="bg-indigo-500 px-6 py-1 rounded-2xl text-white font-medium">
              <NavLink to={"/manage-posts"}>Manage Posts</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:p-6 border border-indigo-500 rounded-lg  md:w-1/3">
          <div className="flex flex-col items-center relative">
            <img
              src={profileImage ? profileImage : img}
              className="w-52 h-52 rounded-full border border-indigo-200"
              alt=""
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold mt-4 mb-2">{fullName}</h1>
              <h1 className="font-semibold text-lg text-gray-500 mb-5">
                {currentPosition}
              </h1>
              <ul className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {linkedInProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={linkedInProfileLink}>LinkedIn</a>
                  )}
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {githubProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={githubProfileLink}>Github</a>
                  )}
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {facebookProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={facebookProfileLink}>Facebook</a>
                  )}
                </li>
              </ul>
              <p className=" text-justify">{about}</p>
              <p className="flex justify-center items-center gap-5 mt-3">
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs">
                  Number of posts {postsCount ? postsCount : 0}
                </span>
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs">
                  Number of likes {likesCount ? likesCount : 0}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Profile
