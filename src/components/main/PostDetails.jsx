import { FaRegBookmark } from "react-icons/fa6"
import { LuThumbsUp } from "react-icons/lu"
import { useLoaderData } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

function PostDetails() {
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)
  const res = useLoaderData()
  const post = res.post
  const { _id, creatorId, title, content, postImage, createdAt, likesCount } =
    post

  const handleLikeButton = async () => {
    try {
      await axios
        .post("http://localhost:3000/add-one-like", {
          userId: loggedInUser._id,
          postId: _id,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message)
          } else if (!res.data.success) {
            toast.error(res.data.message)
          }
        })
        .catch((e) => console.log(e))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="p-3 md:px-56">
        <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
        <div className="border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md">
          <div className="border-b border-gray-200">
            <img src={postImage} className="w-full h-80 p-2" alt="" />
          </div>
          <div className="px-4 py-3">
            {/* <div className="flex justify-between text-2xl items-center my-2">
          <div className="flex gap-2 items-center">
            <img src={img} className="w-5 h-5 rounded-full" alt="" />
            <p className="font-semibold">Mir Kamrul Ahsan Asif</p>
          </div>
          <p className="font-semibold">Web Developer</p>
        </div> */}
            <div>
              <p className="text-4xl font-semibold">{title}</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex justify-between gap-3 items-center mt-2 text-xl">
                <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                  {new Date(createdAt).toLocaleDateString()}
                </p>
                <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                  {content.length > 450 ? Math.round(content.length / 450) : 1}{" "}
                  min read
                </p>
                <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                  {likesCount} {likesCount === 1 ? "Like" : "Likes"}
                </p>
              </div>
              <div className="flex justify-between gap-6 items-center text-2xl">
                <FaRegBookmark
                  className="cursor-pointer"
                  onClick={() => alert("Added to favorites")}
                />{" "}
                {/* add to bookmark button */}
                <LuThumbsUp
                  className="cursor-pointer text-3xl"
                  onClick={handleLikeButton}
                />
              </div>
            </div>

            <div
              className="my-10 text-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default PostDetails
