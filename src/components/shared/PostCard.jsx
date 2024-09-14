import { NavLink } from "react-router-dom"
import img from "../../assets/Login.png"
import { FaArrowRightLong, FaRegBookmark } from "react-icons/fa6"

function PostCard({ post }) {
  const {
    _id,
    postImage,
    creatorName,
    creatorProfileImage,
    title,
    createdAt,
    creatorCurrentPosition,
  } = post
  return (
    <div className="border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md">
      <div className="border-b border-gray-200">
        <img src={postImage} className="w-full h-52 p-2" alt="" />
      </div>
      <div className="px-4 py-3">
        <div className="flex justify-between text-xs items-center my-2">
          <div className="flex gap-2 items-center">
            <img
              src={creatorProfileImage}
              className="w-5 h-5 rounded-full"
              alt=""
            />
            <p className="font-semibold">{creatorName}</p>
          </div>
          <p className="font-semibold">
            {creatorCurrentPosition === "undefined"
              ? "N/A"
              : creatorCurrentPosition}
          </p>
        </div>
        <div>
          <div>
            <p className="text-2xl font-semibold">{title}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex justify-between gap-3 items-center mt-2 text-xs">
            <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
              7/7/2024
            </p>
            <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
              3 min read
            </p>
          </div>
          <div className="flex justify-between gap-6 items-center text-2xl">
            <FaRegBookmark className="cursor-pointer" />
            <NavLink to={`/read/${_id}`}>
              <p className="flex items-center justify-center gap-3">
                <span className="text-lg">Read</span>
                <FaArrowRightLong />
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
