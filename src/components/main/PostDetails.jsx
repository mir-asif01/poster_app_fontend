import img from "../../assets/Login.png";
import { FaRegBookmark } from "react-icons/fa6";
import { LuThumbsUp } from "react-icons/lu";

function PostDetails() {
  return (
    <>
      <section className="p-3 md:px-56">
      <div className="border bg-card drop-shadow-sm shadow-indigo-200 border-gray-300 rounded-md">
      <div className="border-b border-gray-200">
        <img src={img} className="w-full h-80 p-2" alt="" />
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
            <p className="text-4xl font-semibold">Learn about this keyword</p>
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
            <FaRegBookmark className="cursor-pointer" onClick={()=>alert("Added to bookmark")} /> {/* add to bookmark button */}
            <LuThumbsUp className="cursor-pointer text-3xl" onClick={()=>alert("like added")}/>
          </div>
        </div>
        <div className="my-10 text-xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aperiam minima voluptatem corrupti tenetur amet nesciunt temporibus eligendi fugiat? Numquam doloribus quas quibusdam nihil, vero aut recusandae beatae porro inventore repellat provident eum asperiores consectetur consequuntur consequatur dolor ipsam. Doloremque totam cum ex vero, hic et distinctio cumque pariatur eos, non maiores beatae aperiam reiciendis in ipsa atque excepturi. Quo corporis dignissimos at magni deserunt, voluptatem provident vel voluptatum veniam blanditiis ex pariatur voluptate distinctio. Dolores architecto distinctio dolor magni porro, quo numquam aperiam officia tempore fuga. Debitis illo in deleniti itaque iste voluptas autem culpa. Optio, iusto nulla. Fugit, voluptatibus! Sapiente, fuga alias id ipsam nihil accusantium? Obcaecati, quam maiores corporis nam aspernatur esse cum laborum iusto odio debitis dolore omnis, saepe quia magnam in, impedit quos excepturi iure nostrum temporibus eaque itaque asperiores. Possimus harum quaerat, quod in esse iste eaque at doloribus repudiandae sunt enim. Beatae quibusdam, libero culpa ea sed numquam inventore sequi animi illum. Architecto laudantium enim culpa sed neque dignissimos tempore est eum similique animi soluta voluptates minus, iste consectetur dolorem distinctio voluptas exercitationem ad veniam ex, eius dolores a. Dolores tempore natus error quos dolor minima provident consequatur exercitationem harum deserunt beatae, nisi vero, veniam possimus ipsum magni quo facere! Explicabo harum sit nostrum! Id, perspiciatis itaque tenetur adipisci quis soluta repellat aliquid unde molestias ex provident iure alias expedita rerum sequi neque suscipit, maxime iusto doloribus. Enim repudiandae quis saepe quae omnis placeat esse quo odit soluta quaerat consectetur ut dolores suscipit dicta iste, totam, deleniti dolorem distinctio sunt minima ratione provident magni exercitationem a? Labore pariatur hic saepe iste. Similique quos officia debitis quas dolore veritatis eligendi eius voluptatum, ducimus animi eaque in doloremque, a minus necessitatibus at adipisci nemo maxime? Consequuntur vero quisquam optio nobis at. Inventore optio explicabo accusamus.</p>
        </div>
      </div>
    </div>
      </section>
    </>
  );
}
export default PostDetails;
