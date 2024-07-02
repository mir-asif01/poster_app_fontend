import { FaGithub,FaLinkedin,FaFacebook  } from "react-icons/fa";
function Footer(){
    return <>
        <footer className="px-20 bg py-16 border-t border-black flex justify-between items-center">
            <div className="flex justify-center items-center">
                <div className="">
                    <h1 className="text-xl">Design and Developed by <br/>
                    <span className="text-indigo-500 text-2xl font-bold">Mir Kamrul Ahsan Asif</span></h1>
                    <div className="flex justify-start items-center gap-3 mt-1">
                        <FaLinkedin className="text-3xl cursor-pointer "></FaLinkedin>
                        <FaGithub className="text-3xl cursor-pointer "></FaGithub>
                        <FaFacebook className="text-3xl cursor-pointer "></FaFacebook>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex">
                    <input type="text" placeholder="Email to support team"
                    className="px-3 py-2 w-full outline-none text-black rounded-l-md"/>
                    <button 
                    className="px-5 py-2 font-semibold bg-indigo-500 text-white rounded-r-md">
                    Send</button>
                </div>
            </div>
        </footer>
    </>
}
export default Footer