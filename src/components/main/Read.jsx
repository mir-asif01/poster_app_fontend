import PostCard from "../shared/PostCard"
import { useEffect, useState } from "react"
import axios from "axios"

function Read() {
  // posts stats to show in the read section
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchkeyWord, setSearchkeyword] = useState()

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
          if (res.data.posts.length === 0) {
            setSearchkeyword("")
          }
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
          <div className="animate-pulse">
            <div className="w-24 h-24 border-8 border-t-indigo-500  animate-spin rounded-full"></div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section className="md:py-10 md:px-48">
        <div className="border border-indigo-500 border-opacity-25 hover:border-opacity-60 hover:transition-all hover:duration-300 rounded-lg flex justify-center items-center">
          {/* <div className="flex justify-center items-center">
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
          </div> */}
          <div className="flex p-3 w-1/2">
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
          {posts.length == 0 ? (
            <div>
              <p className="text-2xl text-center text-red-500">
                no search results found
              </p>
              <p className="text-xl text-indigo-500 font-semibold text-center">
                "/refresh to see all posts"
              </p>
            </div>
          ) : (
            posts.map((post) => <PostCard key={post?._id} post={post} />)
          )}
        </div>
      </section>
    </>
  )
}

export default Read
