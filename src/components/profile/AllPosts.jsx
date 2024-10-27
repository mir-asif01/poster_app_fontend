import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PostCard from "../shared/PostCard"

export default function AllPosts() {
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    try {
      await axios
        .get(`http://localhost:3000/posts-by-user?id=${loggedInUser._id}`)
        .then((res) => {
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

  return (
    <div className="md:py-10 md:px-48">
      <h1 className="text-4xl mb-10">"Posts added by you"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        {posts.map((post) => (
          <PostCard key={post?._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  )
}
