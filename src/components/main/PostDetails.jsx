import { useState } from "react"
import img from "../../assets/Login.png"
import { FaRegBookmark } from "react-icons/fa6"
import { LuThumbsUp } from "react-icons/lu"
import { useLoaderData } from "react-router-dom"

function PostDetails() {
  const res = useLoaderData()
  const post = res.post
  console.log(post)
  const { title, content, postImage } = post

  return (
    <>
      <section className="p-3 md:px-56">
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
                  7/7/2024
                </p>
                <p className="bg-slate-900 px-2 py-1 rounded-3xl text-white">
                  3 min read
                </p>
              </div>
              <div className="flex justify-between gap-6 items-center text-2xl">
                <FaRegBookmark
                  className="cursor-pointer"
                  onClick={() => alert("Added to bookmark")}
                />{" "}
                {/* add to bookmark button */}
                <LuThumbsUp
                  className="cursor-pointer text-3xl"
                  onClick={() => alert("like added")}
                />
              </div>
            </div>
            <div className="my-10 text-xl">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default PostDetails
