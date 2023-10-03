import React from "react";
import product from "./assets/iphones.png";
import { Link } from "react-router-dom";
export default function CAtagoryCirclecard({ name, picture, id }) {
  return (
    <Link to={`catagories/${id}`}>
      <div className=" h-full w-full  cursor-pointer  group  flex flex-col items-center justify-center    ">
        <div className=" h-[100px] w-[100px] group-hover:border-2 border-blue-400   rounded-full overflow-hidden bg-slate-200 flex items-center justify-center  ">
          <img src={picture} className="  max-h-full max-w-full  " />
        </div>
        <div className=" h-1/4 w-full flex items-center justify-center">
          <p className=" text-sm font-bold text-zinc-800">{name}</p>
        </div>
      </div>
    </Link>
  );
}
