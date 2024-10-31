import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
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

  const handlePostDelete = async (postId) => {
    try {
      axios.delete(`http://localhost:3000/post/${postId}`).then((res) => {
        if (res.data.success) {
          setPosts([...posts.filter((p) => p._id !== postId)])
          toast.success("Post deleted")
        }
        if (!res.data.success) {
          toast.error(res.data.message)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <section className="p-3 md:py-10 md:px-48">
      <h1 className="text-3xl text-center mb-1">
        "edit/delete posts you added"
      </h1>
      <p className="text-center font-semibold mb-10">profile/manage-post</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          posts.map((post) => (
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
                  <div className="flex justify-between gap-3 items-center mt-2 text-[0.55rem]">
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
                    <button
                      onClick={() => handlePostDelete(post?._id)}
                      className="text-sm bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
