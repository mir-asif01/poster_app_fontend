import toast,{Toaster} from "react-hot-toast"

function Login(){

    function showToast(){
        toast.success("Good Toast")
    }
    return <>
        <Toaster position="top-center" toastOptions={{duration:1500}}/>
        <section className="py-20">
            <h1 className="text-6xl mb-10 text-center" onClick={showToast}>Login</h1>
            <div className="flex justify-center items-center">
                <form className="w-2/5 border rounded-md px-14 py-10">
                    <div className="mt-3">
                        <label className="text-xl" htmlFor="email">Email</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-3 py-2 w-full"  type="text" name="email" placeholder="Enter email" required/>
                    </div>
                    <div className="mt-3"> 
                        <label className="text-xl" htmlFor="password">Password</label>
                        <br />
                        <input className="outline-none border border-gray-300 rounded-md px-3 py-2 w-full" type="password" name="password" placeholder="Enter password" required/>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <input className="bg-indigo-500 cursor-pointer font-semibold rounded-3xl text-white px-10 py-2 shadow-indigo-500 hover:shadow-md" type="submit" value={"Login"} />
                    </div>
                </form>
            </div>
        </section>
    </>
}
export default Login