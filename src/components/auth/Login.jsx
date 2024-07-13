import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <section className="md:py-20 py-10">
        <h1 className="text-6xl mb-10 text-center">Login</h1>
        <h1 className="text-center text-xl font-medium ">Are you new user ? <NavLink className="underline text-indigo-500" to={"/register"}>Register</NavLink></h1>
        <div className="flex justify-center items-center px-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-2/5 border rounded-md px-4 py-3 md:px-14 md:py-10"
          >
            <div className="mt-3">
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <br />
              <input
                {...register("email", { required: true })}
                className="outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                type="text"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mt-3">
              <label className="text-xl" htmlFor="password">
                Password
              </label>
              <br />
              <input
                {...register("password", { required: true })}
                className="outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                className="bg-indigo-500 cursor-pointer font-semibold rounded-3xl text-white px-10 py-2 shadow-indigo-500 hover:shadow-md"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Login;
