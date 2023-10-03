import React from "react";
import image from "./assets/iphones.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function BannerAds({ content }) {
  return (
    <div
      style={{
        background: "rgb(72,67,161)",
        background:
          "linear-gradient(90deg, rgba(33,31,59,1) 0%, rgba(30,30,92,1) 35%, rgba(20,30,32,1) 100%)",
      }}
      className="  relative h-full w-full  flex flex-row bg-black items-center p-10  justify-evenly  "
    >
      <div className=" flex-col items-center justify-center">
        <p className="  font-bold text-white">{content}</p>
        <h1 className=" text-4xl text-white font-extrabold">Buy Your new </h1>
        <p className="  font-bold text-white">lorem ipsun</p>
      </div>
      <img
        src={image}
        className="   w-[140px] h-[190px] flex items-center justify-center"
      />
    </div>
  );
}

export default BannerAds;
