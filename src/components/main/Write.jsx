import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

function Write() {
  const { register, handleSubmit, reset } = useForm()
  const userStr = localStorage.getItem("user")
  const loggedInUser = JSON.parse(userStr)
  console.log(loggedInUser)
  const onSubmit = async (data) => {
    const postData = new FormData()
    postData.append("title", data.title)
    postData.append("postImage", data.postImage[0])
    postData.append(
      "tags",
      data.tags.split(",").map((v) => v.trim())
    )
    postData.append("summary", data.summary)
    postData.append("content", data.content)
    postData.append("creatorId", loggedInUser._id)
    postData.append("creatorName", loggedInUser.fullName)
    postData.append("creatorProfileImage", loggedInUser.profileImage)
    postData.append("creatorCurrentPosition", loggedInUser.currentPostion)

    axios
      .post("http://localhost:3000/create-post", postData)
      .then((res) => {
        if (res.data.success) {
          toast.success("Post created successfully")
          reset()
        }
      })
      .catch((error) => {
        console.log(error)
      })

    console.log(postData)
  }
  return (
    <>
      <section className="p-2 md:px-10 py-3 md:py-32 md:flex justify-center items-center">
        <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-2 md:p-10 border border-slate-400 rounded-md md:w-2/4 "
        >
          <h1 className="text-4xl mb-7 text-center">Create Post</h1>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Title
            </label>
            <br />
            <input
              {...register("title")}
              className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
              type="text"
              name="title"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Post Image
            </label>
            <br />
            <input
              {...register("postImage")}
              className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
              type="file"
              name="postImage"
              placeholder="Your post image"
              required
            />
          </div>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Tags
            </label>
            <br />
            <input
              {...register("tags")}
              className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
              type="text"
              name="tags"
              placeholder="eg - javascript,reactjs..."
              required
            />
          </div>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Summary
            </label>
            <br />
            <input
              {...register("summary")}
              className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
              type="text"
              name="summary"
              placeholder="Summary of your post"
              required
            />
          </div>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Content
            </label>
            <br />
            <textarea
              {...register("content")}
              className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
              type=""
              name="content"
              placeholder="Content of your post"
              required
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <input
              className="bg-indigo-500 cursor-pointer font-semibold rounded-3xl text-white px-10 py-2"
              type="submit"
              value={"Publish"}
            />
          </div>
        </form>
      </section>
    </>
  )
}
export default Write
