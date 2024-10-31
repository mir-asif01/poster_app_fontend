import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"

function PostCard({ post }) {
  const {
    _id,
    content,
    postImage,
    creatorName,
    creatorId,
    creatorProfileImage,
    title,
    likesCount,
    commentsCount,
    createdAt,
    creatorCurrentPosition,
  } = post
  return (
    <div className="relative border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md">
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
            <NavLink to={`/users/${creatorId}`}>
              <p className="font-semibold hover:underline">{creatorName}</p>
            </NavLink>
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
          <div className="flex justify-between gap-3 items-center mt-2 text-[0.55rem] md:text-sm">
            <p className="bg-slate-900 px-2 py-1 rounded-md text-white absolute top-0 right-0 border border-red-500 animate-pulse shadow-sm shadow-indigo-400">
              {new Date(createdAt).toLocaleDateString()}
            </p>
            <p className="bg-slate-900 p-1 md:px-2 md:py-1 rounded-3xl text-white">
              {content.length > 450 ? Math.round(content.length / 450) : 1} min
              read
            </p>
            <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
              {likesCount} {likesCount === 1 ? " Like" : "Likes"}
            </p>
            <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
              {commentsCount} {commentsCount === 1 ? " Comment" : "Comments"}
            </p>
          </div>
          <div className="flex justify-between gap-6 items-center text-2xl">
            <NavLink to={`/read/${_id}`}>
              <p className="flex items-center justify-center gap-3">
                <span className="text-lg">More</span>
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
