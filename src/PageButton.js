import React from "react";

export default function PageButton({ number, onpress }) {
  return (
    <div
      onClick={onpress}
      className=" h-[50px] w-[50px]  bg-white dark:bg-zinc-800  shadow-sm shadow-black mx-2 rounded-md flex items-center justify-center"
    >
      <p className="  font-bold dark:text-white text-black">{number}</p>
    </div>
  );
}
