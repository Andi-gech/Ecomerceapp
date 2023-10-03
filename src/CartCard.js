import React from "react";

export default function CartCard({ data }) {
  return (
    <div className="w-full h-full  bg-white rounded-sm border-b-2  border-zinc-100 flex flex-row items-center justify-center">
      <p className=" font-bold text-sm flex items-center justify-center w-2/3 h-full overflow-hidden">
        {data.itemname}
      </p>
      <p className=" font-bold  flex items-center justify-center w-1/3 h-full">
        {data.quantity}
      </p>
    </div>
  );
}
