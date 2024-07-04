import { NavLink } from "react-router-dom";
import img from "../../assets/Login.png";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import PostCard from "../shared/PostCard";

function Read() {
  return (
    <>
      <section className="py-20 px-24">
        <PostCard />
      </section>
    </>
  );
}

export default Read;
