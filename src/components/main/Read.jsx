import PostCard from "../shared/PostCard"
import { useEffect, useState } from "react"
import axios from "axios"

function Read() {
  // posts stats to show in the read section
  const [posts, setPosts] = useState([])
  const [searchedPosts, setSearchedPosts] = useState([])

  const [activeTab, setActiveTab] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchkeyWord, setSearchkeyword] = useState("")

  const handleTabClick = (e) => {
    setActiveTab(e.target.name)
  }

  // onlick of search button the handleSearch function will be called.....
  const handleSearch = async () => {
    try {
      // fetch posts with keyword
      // update the posts state - > setPosts() to show searched results
      await axios
        .get(
          `http://localhost:3000/search-post?search_keyword=${searchkeyWord}`
        )
        .then((res) => {
          console.log(res)
          setPosts(res.data.posts)
          // console.log(searchedPosts)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPosts = async () => {
    try {
      await axios.get("http://localhost:3000/posts").then((res) => {
        setPosts(res.data.posts)
        setLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-3xl">Loading......</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <section className="md:py-10 md:px-48">
        <div className="border border-indigo-500 border-opacity-25 hover:border-opacity-60 hover:transition-all hover:duration-300 rounded-lg flex justify-between items-center">
          <div className="flex justify-center items-center">
            <button
              onClick={(e) => {
                handleTabClick(e)
              }}
              name="all"
              className="md:mx-3 md:px-5 font-semibold hover:text-indigo-500 hover:transition-all hover:duration-500"
            >
              Follows
            </button>
            <button
              onClick={(e) => {
                handleTabClick(e)
              }}
              name="recommended"
              className="md:mx-3 md:px-5 font-semibold hover:text-indigo-500 hover:transition-all hover:duration-500"
            >
              Recommended
            </button>
          </div>
          <div className="flex p-3">
            <input
              onChange={(e) => setSearchkeyword(e.target.value)}
              type="text"
              placeholder="search by topics"
              className="px-3 py-2 w-full outline-none text-black rounded-l-md border border-"
            />
            <button
              onClick={handleSearch}
              className="px-5 py-2 font-semibold bg-indigo-500 text-white rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-span-7 p-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {posts.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Read
