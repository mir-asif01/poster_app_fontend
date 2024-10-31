import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function ManagePosts() {
  const [posts, setPosts] = useState([])
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)
  const fetchPosts = async () => {
    try {
      await axios
        .get(`http://localhost:3000/posts-by-user?id=${loggedInUser._id}`)
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
    <section className="md:py-10 md:px-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <div
            key={post?._id}
            className="border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md"
          >
            <div className="border-b border-gray-200">
              <img src={post.postImage} className="w-full h-52 p-2" alt="" />
            </div>
            <div className="px-4 py-3">
              <div className="flex justify-between text-xs items-center my-2">
                <div className="flex gap-2 items-center">
                  <img
                    src={post.creatorProfileImage}
                    className="w-5 h-5 rounded-full"
                    alt=""
                  />
                  <NavLink to={`/users/${post.creatorId}`}>
                    <p className="font-semibold hover:underline">
                      {post.creatorName}
                    </p>
                  </NavLink>
                </div>
                <p className="font-semibold">
                  {post.creatorCurrentPosition === "undefined"
                    ? "N/A"
                    : post.creatorCurrentPosition}
                </p>
              </div>
              <div>
                <div>
                  <p className="text-2xl font-semibold">{post.title}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex justify-between gap-3 items-center mt-2 text-xs">
                  <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                    {post.content.length > 450
                      ? Math.round(post.content.length / 450)
                      : 1}{" "}
                    min read
                  </p>
                  <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                    {post.likesCount}{" "}
                    {post.likesCount === 1 ? " Like" : "Likes"}
                  </p>
                </div>
                <div className="flex justify-between gap-6 items-center text-2xl">
                  <button className="text-sm bg-green-500 text-white px-2 py-1 rounded-md">
                    <NavLink to={`/edit-post/${post._id}`}>Edit</NavLink>
                  </button>
                  <button className="text-sm bg-red-500 text-white px-2 py-1 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
