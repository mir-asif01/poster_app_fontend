import { useForm } from "react-hook-form"

export default function Edit() {
  const { register, handleSubmit } = useForm()

  // parsing the logged in users information from local storage
  const userStr = localStorage.getItem("user")
  const user = JSON.parse(userStr)
  console.log(user)

  const onSubmit = async (data) => {
    console.log(data)
  }
  return (
    <>
      <section className="p-4 md:py-16">
        <h1 className="text-6xl mb-10 text-center">Edit Profile</h1>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-4/5 border rounded-md px-3 md:px-14 py-5"
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
                    placeholder="Update your email"
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
                    placeholder="Update your password"
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
                    placeholder="Update your username"
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
                    placeholder="Update your fullname"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Profile Image
                  </label>
                  <br />
                  <input
                    {...register("profileImage", { required: true })}
                    className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
                    type="file"
                    name="ProfileImage"
                    placeholder="Update profile image"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Cover Image
                  </label>
                  <br />
                  <input
                    {...register("coverImage", { required: true })}
                    className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
                    type="file"
                    name="coverImage"
                    placeholder="Update cover image"
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
                    placeholder="Update description about yourself"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Technical Skills
                  </label>
                  <br />
                  <input
                    {...register("technicalSkills", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="technicalSkills"
                    placeholder="eg- javascript,reactjs"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    Current Position
                  </label>
                  <br />
                  <input
                    {...register("currentPostion", { required: true })}
                    className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
                    type="text"
                    name="currentPostion"
                    placeholder="eg- Software Engineer"
                  />
                </div>
                <div className="mt-3">
                  <label className="" htmlFor="password">
                    LinkendIn Profile
                  </label>
                  <br />
                  <input
                    {...register("linkedInProfileLink", { required: true })}
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
                    {...register("githubProfileLink", { required: true })}
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
                    {...register("facebookProfileLink", { required: true })}
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
                value={"Save"}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
