import toast,{Toaster} from "react-hot-toast"

function Register(){
    function showToast(){
        toast.success("Good Toast")
    }

    return <>
       <Toaster position="top-center" toastOptions={{duration:1500}}/>
        <section className="py-16">
            <h1 className="text-6xl mb-10 text-center" onClick={showToast}>Register</h1>
            <div className="flex justify-center items-center">
                <form className="w-4/5 border rounded-md px-14 py-5">
                    {/* {input fields} */}
                    <div className="flex justify-between items-center gap-10">
                    {/* {input fields left} */}
                        <div className="w-1/2">
                        <div className="mt-3">
                        <label className="" htmlFor="email">Email</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"  type="text" name="email" placeholder="Enter your email" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Password</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="password" name="password"  placeholder="Enter your password" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Username</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="text" name="username"  placeholder="Enter your username" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Fullname</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="text" name="fullname"  placeholder="Enter your fullname" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Profile Image</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold" type="file" name="ProfileImage"  placeholder="Your profile image" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Cover Image</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold" type="file" name="coverImage" 
                        placeholder="Your cover image" required/>
                    </div>
                        </div>
                        {/* {input fields right} */}
                        <div className="w-1/2">
                        <div className="mt-3">
                        <label className="" htmlFor="about">About</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"  type="text" name="about" placeholder="Describe yourself"/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Technical Skills</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="text" name="username" placeholder="eg- javascript,reactjs"/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Current Position</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="password" name="password" placeholder="eg- Software Engineer"/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">LinkendIn Profile</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="password" name="password" placeholder="LinkedIn profile link"/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Github Profile</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="password" name="password" placeholder="Github profile link"/>
                    </div>
                    <div className="mt-3"> 
                        <label className="" htmlFor="password">Facebook Profile</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full" type="password" name="password" placeholder="Facebook profile link"/>
                    </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <input className="bg-indigo-500 hover:shadow-indigo-500 hover:shadow-sm cursor-pointer font-semibold rounded-3xl text-white px-10 py-2" type="submit" value={"Register"} />
                    </div>
                </form>
            </div>
        </section>
    </>
}
export default Register