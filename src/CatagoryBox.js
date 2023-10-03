import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function CatagoryBox({ active, name }) {
  return (
    <div
      className={`  bg-sky-50 h-full w-full px-2 rounded-full flex items-center justify-center  font-semibold text-sm`}
    >
      {name}
      <FaAngleDown size={10} />
    </div>
  );
}
