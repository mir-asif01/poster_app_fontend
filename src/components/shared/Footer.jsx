function Footer(){
    return <>
        <footer className="px-20 bg py-16 border-t border-black flex justify-between items-center">
            <div className="flex justify-center items-center">
                <div className="">
                    <h1 className="text-xl">Design and Developed by <br/>
                    <span className="text-sky-400 text-2xl font-bold">MIR KAMRUL AHSAN ASIF</span></h1>
                    <p>social media links</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex">
                    <input type="text" placeholder="Email to support team"
                    className="px-3 py-2 w-full outline-none text-black rounded-l-md"/>
                    <button 
                    className="px-5 py-2 font-semibold bg-sky-400 text-white rounded-r-md">
                    Send</button>
                </div>
            </div>
        </footer>
    </>
}
export default Footer