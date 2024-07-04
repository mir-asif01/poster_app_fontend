function Write() {
  return (
    <>
      <section className="px-10 py-32 flex justify-center items-center">
        <form className="p-10 border border-slate-400 rounded-md w-2/4 ">
          <h1 className="text-4xl mb-7 text-center">Create Post</h1>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Title
            </label>
            <br />
            <input
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
              className="outline-none border border-gray-300 rounded-md w-full file:bg-indigo-500 file:outline-none file:border-none file:px-2 file:py-2 file:text-white file:font-semibold"
              type="file"
              name="postImage"
              placeholder="Your post image"
              required
            />
          </div>
          <div className="mt-3">
            <label className="" htmlFor="password">
              Summary
            </label>
            <br />
            <input
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
  );
}
export default Write;
