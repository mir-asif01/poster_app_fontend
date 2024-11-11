import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PostCard from "../shared/PostCard"
import { NavLink } from "react-router-dom"

export default function AllPosts() {
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)

  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      await axios
        .get(
          `https://posterbackend-d96664smb-mirasif01s-projects.vercel.app/posts-by-user?id=${loggedInUser._id}`
        )
        .then((res) => {
          setPosts(res.data.posts)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="p-3 md:py-10 md:px-48">
      <h1 className="text-3xl text-center mb-1">"Posts added by you"</h1>
      <p className="text-center font-semibold mb-10">profile/all-posts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        {posts.length == 0 ? (
          <div>
            <h1 className="text-xl font-semibold text-red-500">
              "You have not posted anything yet"-
              <NavLink to="/write" className="text-indigo-500 underline">
                post here
              </NavLink>
            </h1>
          </div>
        ) : (
          posts.map((post) => <PostCard key={post?._id} post={post}></PostCard>)
        )}
      </div>
    </div>
  )
}
