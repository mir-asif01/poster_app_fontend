import { NavLink } from "react-router-dom";
import img from "../../assets/Login.png";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import PostCard from "../shared/PostCard";
import { useState } from "react";

function Read() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (e) => {
    setActiveTab(e.target.name);
  };
  return (
    <>
      <section className="md:py-10 md:px-48">
        <div className="border-b mb-10 border-slate-200 flex justify-between items-center">
          <div className="flex justify-between items-center gap-10 px-2 py-4">
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={(e) => {
                  handleTabClick(e);
                }}
                name="all"
                className="md:mx-3 md:pb-3 md:px-5"
              >
                For You
              </button>
              <button
                onClick={(e) => {
                  handleTabClick(e);
                }}
                name="following"
                className="md:mx-3 md:pb-3 md:px-5"
              >
                Following
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="md:mr-5">Filter</div>
              <select
                name="Filter By Tags"
                className="px-10 py-1 outline-none border border-gray-300 rounded-md"
                id="Category"
              >
                <option value="one">one</option>
                <option value="one">one</option>
                <option value="one">one</option>
                <option value="one">one</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-7 p-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {activeTab === "following" ? (
            <>
              <PostCard />
              <PostCard />
            </>
          ) : (
            <>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Read;
