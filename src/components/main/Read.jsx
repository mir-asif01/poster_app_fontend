import { NavLink } from "react-router-dom";
import img from "../../assets/Login.png"
import { FaRegBookmark,FaRegHeart  } from "react-icons/fa";

function Read(){
    return <>
        <section className="py-20 px-24">
            <NavLink to={"/login"}>
            <div className="w-1/3 border border-gray-300 rounded-md">
                <div className="border-b border-gray-200">
                    <img src={img} className="w-full h-52 p-2" alt="" />
                </div>
                <div className="px-4 py-3">
                <div className="flex justify-between text-xs items-center my-2">
                    <div className="flex gap-2 items-center">
                        <img src={img} className="w-5 h-5 rounded-full" alt="" />
                        <p className="font-semibold">Mir Kamrul Ahsan Asif</p>
                    </div>
                    <p className="font-semibold">Web Developer</p>
                </div>
                <div>
                    <div>
                        <p className="text-2xl font-semibold">Learn about this keyword</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-between gap-3 items-center mt-2 text-xs">
                        <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">7/7/2024</p>
                        <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">3 min read</p>
                    </div>
                    <div className="flex justify-between gap-6 items-center text-2xl">
                        <p className="flex items-center justify-center gap-1">
                        <span className="text-xl">10</span>
                        <FaRegHeart className="cursor-pointer hover:scale-105"></FaRegHeart></p>
                        <FaRegBookmark className="cursor-pointer hover:scale-105"></FaRegBookmark>
                    </div>
                </div>
                </div>
            </div>
         </NavLink>
        </section>
    </>
}

export default Read