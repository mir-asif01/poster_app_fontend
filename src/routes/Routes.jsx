import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../components/main/Home"
import Register from "../components/auth/Register"
import Login from "../components/auth/Login"
import About from "../components/main/About"
import Read from "../components/main/Read"
import Write from "../components/main/Write"
import Profile from "../components/main/Profile"
import PostDetails from "../components/main/PostDetails"
import ErrorPage from "../components/shared/ErrorPage"
import AllPosts from "../components/profile/AllPosts"
import PostCreatorProfile from "../components/main/PostCreatorProfile"
import axios from "axios"
import ManagePosts from "../components/profile/ManagePosts"
import EditPost from "../components/profile/EditPost"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/read",
        element: <Read></Read>,
      },
      {
        path: "/read/:id",
        loader: async ({ params }) =>
          await axios.get(
            `https://posterbackend-d96664smb-mirasif01s-projects.vercel.app/posts/${params.id}`
          ),
        element: <PostDetails />,
      },
      {
        path: "/write",
        element: <Write></Write>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/users/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://posterbackend-d96664smb-mirasif01s-projects.vercel.app/users/${params.id}`
          ),
        element: <PostCreatorProfile></PostCreatorProfile>,
      },
      {
        path: "manage-posts",
        element: <ManagePosts />,
      },
      {
        path: "all-posts",
        element: <AllPosts />,
      },
      {
        path: "edit-post/:id",
        loader: async ({ params }) =>
          await axios.get(
            `https://posterbackend-d96664smb-mirasif01s-projects.vercel.app/posts/${params.id}`
          ),
        element: <EditPost />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])
