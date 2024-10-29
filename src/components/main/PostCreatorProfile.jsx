import { useLoaderData } from "react-router-dom"

export default function PostCreatorProfile() {
  const res = useLoaderData()
  const user = res.user
  const {
    fullName,
    currentPosition,
    about,
    profileImage,
    facebookProfileLink,
    githubProfileLink,
    linkedInProfileLink,
  } = user

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center p-2 md:p-10 md:gap-10 w-full">
        <div className="md:p-6 border border-indigo-500 rounded-lg  md:w-1/3">
          <div className="flex flex-col items-center relative">
            <img
              src={profileImage}
              className="w-52 h-52 rounded-full border border-indigo-200"
              alt=""
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold mt-4 mb-2">{fullName}</h1>
              <h1 className="font-semibold text-lg text-gray-500 mb-5">
                {currentPosition}
              </h1>
              <p></p>
              <ul className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {linkedInProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={linkedInProfileLink}>LinkedIn</a>
                  )}
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {githubProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={githubProfileLink}>Github</a>
                  )}
                </li>
                <li className="px-6 py-1 border border-gray-300 rounded-full hover:border hover:border-white hover:px-6 hover:py-1 hover:rounded-full hover:bg-indigo-500 hover:text-white cursor-pointer transition ease-linear hover:duration-300">
                  {facebookProfileLink === "N/A" ? (
                    "N/A"
                  ) : (
                    <a href={facebookProfileLink}>Facebook</a>
                  )}
                </li>
              </ul>
              <p className=" text-justify">{about}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
