import { FaRegBookmark } from "react-icons/fa6"
import { LuThumbsUp } from "react-icons/lu"
import { FaComment } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { useLoaderData } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"

function PostDetails() {
  const [commentDrawerOpen, setCommentDrawerOpen] = useState(false)
  const [commentArray, setCommentsArray] = useState([])
  const [comment, setComment] = useState("")
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)
  const res = useLoaderData()
  const post = res.data.post
  const {
    _id,
    creatorId,
    creatorName,
    creatorProfileImage,
    title,
    content,
    postImage,
    createdAt,
    likesCount,
  } = post
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

  const handleCommentsPanelOpen = async () => {
    setCommentDrawerOpen(true)
  }

  const fetchComments = async () => {
    try {
      await axios
        .get(`http://localhost:3000/comments-for-post?id=${_id}`)
        .then((res) => {
          if (res.data.success) {
            setCommentsArray(res.data.comments)
          }
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  const closeCommentDrawer = async () => {
    setCommentDrawerOpen(false)
  }

  const handleAddComment = async () => {
    try {
      const newComment = {
        comment: comment,
        postId: _id,
        commentorName: loggedInUser.fullName,
        commentorProfileImage: loggedInUser.profileImage,
      }
      setCommentsArray([
        ...commentArray,
        { ...newComment, createdAt: Date.now() },
      ])
      await axios
        .post("http://localhost:3000/add-comment", newComment)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message)
            setComment("")
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
    fetchComments()
  }, [])

  return (
    <section className="relative">
      <div className="p-3 md:px-56">
        <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
        <div className="border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md">
          <div className="border-b border-gray-200 relative">
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
                <p className="bg-slate-900 text-xs px-2 py-1 rounded-3xl text-white">
                  {new Date(createdAt).toLocaleDateString()}
                </p>
                <p className="bg-slate-900 text-xs px-2 py-1 rounded-3xl text-white">
                  {content.length > 450 ? Math.round(content.length / 450) : 1}{" "}
                  min read
                </p>
                <p className="bg-slate-900 text-xs px-2 py-1 rounded-3xl text-white">
                  {likesCount} {likesCount === 1 ? "Like" : "Likes"}
                </p>
              </div>
              <div className="flex justify-between gap-6 items-center text-2xl">
                <LuThumbsUp
                  className="cursor-pointer text-2xl"
                  onClick={handleLikeButton}
                />
                <FaComment
                  className="cursor-pointer text-2xl"
                  onClick={handleCommentsPanelOpen}
                />
              </div>
            </div>
            <div
              className="my-10 text-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
      {/* drawer */}
      <div
        className={`${
          commentDrawerOpen ? "absolute" : "hidden"
        } right-0 top-0 bg-slate-200 p-5 h-full overflow-x-hidden overflow-y-scroll`}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold">Comments</h1>
          <RxCross1
            className="text-2xl cursor-pointer"
            onClick={closeCommentDrawer}
          />
        </div>
        <div className="border p-5 rounded-lg bg-white">
          <div>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-lg border mb-2 outline-none p-2"
              name="comment"
              id=""
            />
          </div>
          <button
            onClick={handleAddComment}
            className="bg-indigo-500 px-3 py-2 font-semibold text-white rounded-md"
          >
            Add Comment
          </button>
        </div>
        {/* // comments  */}
        {commentArray.map((comment) => (
          <div key={comment?._id} className="p-5 bg-white rounded-lg my-5">
            <div className="flex justify-between items-center p-2 mb-2 gap-4">
              <div>
                <img
                  src={comment.commentorProfileImage}
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  {comment.commentorName}
                </h1>
                <h1 className="">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </h1>
              </div>
            </div>
            <hr />
            <p className="mt-5">{comment.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default PostDetails
