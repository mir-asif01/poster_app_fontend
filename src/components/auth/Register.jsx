import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { NavLink, useNavigate } from "react-router-dom"

function Register() {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  // add validations for empty input fields
  const onSubmit = async (data) => {
    const userData = new FormData()

    userData.append("email", data.email)
    userData.append("password", data.password)
    userData.append("userName", data.userName)
    userData.append("fullName", data.fullName)
    userData.append("profileImage", data.profileImage[0])
    userData.append("coverImage", data.coverImage[0])
    userData.append("currentPosition", data.currentPosition)
    userData.append("technicalSkills", data.technicalSkills)
    userData.append("linkedInProfileLink", data.linkedInProfileLink)
    userData.append("githubProfileLink", data.githubProfileLink)
    userData.append("facebookProfileLink", data.facebookProfileLink)

    await axios
      .post("http://localhost:3000/register", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("Registration Successfull")
          reset() // this method is from react-hook-form to reset the form to the default state or empty
          navigate("/login")
        }
      })
      .catch((error) => {
        console.log(error)
      })

    console.log(userData.get("currentPosition"))
  }

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
      <section className="p-4 md:py-16">
        <h1 className="text-6xl mb-10 text-center">Register</h1>
        <h1 className="text-center text-xl font-medium ">
          Already have an account?
          <NavLink className="underline text-indigo-500" to={"/login"}>
            Login
          </NavLink>
        </h1>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-4/5 border rounded-md px-3 md:px-14 py-5"
            encType="multipart/form-data"
          >
            {/* {input fields} */}
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-10">
              {/* {input fields left} */}
              <div className="w-full md:w-1/2">
                <div className="mt-3">
                  <label className="" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    {...register("email")}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Password
                  </label>
                  <br />
                  <input
                    {...register("password", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Username
                  </label>
                  <br />
                  <input
                    {...register("userName", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="userName"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Fullname
                  </label>
                  <br />
                  <input
                    {...register("fullName", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="fullName"
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="profileImage">
                    Profile Image
                  </label>
                  <br />
                  <input
                    type="file"
                    {...register("profileImage")}
                    className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
                    name="profileImage"
                    placeholder="Your profile image"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="coverImage">
                    Cover Image
                  </label>
                  <br />
                  <input
                    type="file"
                    {...register("coverImage", { required: true })}
                    className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
                    name="coverImage"
                    placeholder="Your cover image"
                  />
                </div>
              </div>
              {/* {input fields right} */}
              <div className="w-full md:w-1/2">
                <div className="mt-3">
                  <label className="" htmlFor="about">
                    About
                  </label>
                  <br />
                  <input
                    {...register("about", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="about"
                    placeholder="Describe yourself"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Technical Skills
                  </label>
                  <br />
                  <input
                    {...register("technicalSkills", {
                      required: true,
                    })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="technicalSkills"
                    placeholder="eg- javascript,reactjs"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="currentPosition">
                    Current Position
                  </label>
                  <br />
                  <input
                    {...register("currentPosition", {
                      required: true,
                    })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="currentPosition"
                    placeholder="eg- Software Engineer"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    LinkendIn Profile
                  </label>
                  <br />
                  <input
                    {...register("linkedInProfileLink", {
                      required: true,
                    })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="linkedInProfileLink"
                    placeholder="LinkedIn profile link"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Github Profile
                  </label>
                  <br />
                  <input
                    {...register("githubProfileLink", {
                      required: true,
                    })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="githubProfileLink"
                    placeholder="Github profile link"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Facebook Profile
                  </label>
                  <br />
                  <input
                    {...register("facebookProfileLink", {
                      required: true,
                    })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="facebookProfileLink"
                    placeholder="Facebook profile link"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                className="bg-indigo-500 hover:shadow-indigo-500 hover:shadow-sm cursor-pointer font-semibold rounded-3xl text-white px-10 py-2"
                type="submit"
                value={"Register"}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Register
