import { FaGithub,FaLinkedin,FaFacebook  } from "react-icons/fa";
function Footer(){
    return <>
        <footer className="px-20 bg py-16 border-t border-black flex justify-between items-center">
            <div className="flex justify-center items-center">
                <div className="">
                    <h1 className="text-xl">Design and Developed by <br/>
                    <span className="text-indigo-500 text-2xl font-bold">Mir Kamrul Ahsan Asif</span></h1>
                    <div className="flex justify-start items-center gap-3 mt-1">
                    <a href="https://www.linkedin.com/in/mir-kamrul-ahsan-asif-7a19a62b7/" target="_blank">
                        <FaLinkedin className="text-3xl text-slate-800 cursor-pointer "></FaLinkedin>
                    </a>
                    <a href="https://github.com/mir-asif01" target="_blank">
                        <FaGithub className="text-3xl text-slate-800 cursor-pointer "></FaGithub>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61554728202989" target="_blank">
                        <FaFacebook className="text-3xl text-slate-800 cursor-pointer "></FaFacebook>
                    </a>
                    </div>
                    <p className="text-xl mt-2">+8801315405814(whatsapp)</p>
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