import { NavLink, useNavigate } from "react-router-dom"
import bannerImg from "../../assets/Programming.png"
import { useEffect } from "react"
function Home() {
  const navigate = useNavigate()
  const userStr = localStorage.getItem("user")
  const user = JSON.parse(userStr)

  useEffect(() => {
    if (user?.email) {
      navigate("/read")
    }
  }, [])

  return (
    <>
      <section className="bg py-3 px-4 md:px-20 md:py-40 flex justify-between items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>
            <h1 className="text-4xl md:text-8xl">From Ideas,</h1>
            <h1 className="text-4xl md:text-8xl">To Words</h1>
            <p className="text-2xl md:text-3xl mt-6">
              Place to write ideas into reality.
            </p>
            <p className="text-2xl md:text-3xl">
              Developers' world to show how they write...
            </p>
            <button className="bg-indigo-500 mt-6 px-5 py-2 font-semibold text-white rounded-3xl">
              <NavLink to={"/register"}>Register</NavLink>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img src={bannerImg} className="size-96" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
