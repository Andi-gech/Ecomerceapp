import React from "react";

export default function ImageSelector({ productpic }) {
  return (
    <div className=" h-[59px] w-[70px] mx-4 bg-slate-400 overflow-hidden rounded-md">
      <img
        src={productpic}
        alt="productpic"
        className="  h-full w-full  object-fill"
      />
    </div>
  );
}
