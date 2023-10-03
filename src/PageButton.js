import React from "react";

export default function PageButton({ number, onpress }) {
  return (
    <div
      onClick={onpress}
      className=" h-[50px] w-[50px]  bg-white shadow-sm shadow-black mx-2 rounded-md flex items-center justify-center"
    >
      <p className="  font-bold  text-black">{number}</p>
    </div>
  );
}
