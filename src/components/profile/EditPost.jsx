import { useRef, useState } from "react"
import { useLoaderData } from "react-router-dom"
import JoditEditor from "jodit-react"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"

export default function EditPost() {
  const res = useLoaderData()
  const post = res.data.post
  const contentRef = useRef(null)
  const [content, setContent] = useState("")
  const [summary, setSummary] = useState("")

  const handleUpdateForm = async (e) => {
    e.preventDefault()
    try {
      if (!summary || !content) {
        toast.error("Input filed is empty!")
      }
      await axios
        .patch("http://localhost:3000/edit-post", {
          postId: post?._id,
          newSummary: summary,
          newContent: content,
        })
        .then((res) => {
          if (!res.data.success) {
            toast.error(res.data.message)
          }
          if (res.data.success) {
            toast.success(res.data.message)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="md:py-10 md:px-48">
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
      <div>
        <h1 className="text-3xl text-red-700 text-center underline mb-5 border rounded-md border-red-600 p-5">
          You can only edit the content and summary!
        </h1>
        <form
          onSubmit={(e) => handleUpdateForm(e)}
          className="border p-2 md:p-10"
        >
          <div className="mt-3">
            <label className="" htmlFor="password">
              Summary
            </label>
            <br />
            <input
              className="outline-none border border-gray-300 rounded-md px-2 py-2 w-full"
              type="text"
              onChange={(e) => setSummary(e.target.value)}
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
            <JoditEditor
              ref={contentRef}
              value={content}
              onChange={(newContent) => setContent(newContent)}
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="bg-violet-500 rounded-md px-3 py-2 mt-5 text-white cursor-pointer"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
