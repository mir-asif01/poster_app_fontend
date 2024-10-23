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
import Edit from "../components/profile/Edit"
import AllPosts from "../components/profile/AllPosts"
import Friends from "../components/profile/Friends"
import Followers from "../components/profile/Followers"
import axios from "axios"
import PostCreatorProfile from "../components/main/PostCreatorProfile"

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
          await fetch(`http://localhost:3000/posts/${params.id}`),
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
          await fetch(`http://localhost:3000/users/${params.id}`),
        element: <PostCreatorProfile></PostCreatorProfile>,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "all-posts",
        element: <AllPosts />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "followers",
        element: <Followers />,
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])
