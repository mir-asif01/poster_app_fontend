import img from "../../assets/Login.png";
function Profile() {
  return (
    <>
      <section className="flex justify-center items-center p-10 gap-10 w-full">
        <div className="p-6 border w-1/3">
          <div className="flex flex-col items-center ">
            <img
              src={img}
              className="w-52 h-52 rounded-full border border-indigo-200"
              alt=""
            />

            <div className="text-center">
              <h1 className="text-xl font-semibold mt-4 mb-0">
                Mir Kamrul Ahsan Asif
              </h1>
              <h1 className="font-semibold text-lg text-gray-500">
                Software Developer
              </h1>
              <ul className="flex justify-center items-center gap-4 mb-5">
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer">
                  LinkedIn
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer">
                  Github
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer">
                  Facebook
                </li>
              </ul>
              <p className=" text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                magni ab, eius eaque vitae recusandae. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid, explicabo?
              </p>
              <p className="flex justify-center items-center gap-5 mt-3">
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs">
                  Number of posts {10}
                </span>
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs">
                  Number of likes {111}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
