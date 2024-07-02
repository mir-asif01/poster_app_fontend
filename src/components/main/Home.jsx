import bannerImg from '../../assets/Programming.png'
function Home(){
    return <>
        <section className="bg py-40 px-20 flex justify-between items-center">
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className="text-8xl">From Ideas,</h1>
                    <h1 className="text-8xl">To Words</h1>
                    <p className="text-3xl mt-6">Place to write ideas into reality.</p>
                    <p className="text-3xl">Developers' world to show how they write...</p>
                    <button className="bg-sky-300 mt-6 px-5 py-2 font-semibold text-white rounded-3xl">Read/Write</button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={bannerImg} className="size-96" alt="" />
            </div>
        </section>
    </>
}

export default Home