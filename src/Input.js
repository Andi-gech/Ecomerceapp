import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Input({
  background,
  value,
  placeholder,
  type,
  ontextchange,
}) {
  return (
    <div
      className={`w-full relative   flex flex-row h-full ${background}   rounded-lg overflow-hidden`}
    >
      {type == "search" && (
        <div className="  h-full w-[50px] top-0 flex items-center justify-center">
          <FaSearch className=" text-blue-400 font-thin" />
        </div>
      )}
      <input
        placeholder={placeholder}
        onChange={ontextchange}
        value={value}
        type="text"
        className="w-full h-full  focus:outline-none  bg-transparent rounded-lg"
      />
    </div>
  );
}
