import React, { useState } from "react";
import BannerAds from "./BannerAds";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SlideShow() {
  const [current, setCurrent] = useState(0); // Start with the first slide

  const clickNext = () => {
    const nextPage = (current + 1) % 4; // Assuming you have 4 slides
    setCurrent(nextPage);
  };

  const clickPrev = () => {
    const prevPage = (current - 1 + 4) % 4; // Assuming you have 4 slides
    setCurrent(prevPage);
  };

  return (
    <div className="relative w-9/12 flex items-center justify-center">
      <div
        onClick={clickPrev}
        className={`flex items-center ${
          current === 0 ? "bg-slate-400" : "active:bg-blue-200"
        } z-30 justify-center cursor-pointer h-[60px] w-[60px] bg-blue-100 rounded-full absolute border-4 border-white -left-[30px]`}
      >
        <FaAngleLeft size={10} />
      </div>
      <div
        onClick={clickNext}
        className="h-[60px] w-[60px] flex z-30 active:bg-blue-200 cursor-pointer items-center justify-center bg-blue-100 rounded-full absolute border-4 border-white -right-[30px]"
      >
        <FaAngleRight size={10} />
      </div>
      <div className="relative h-[250px] rounded-2xl w-full flex flex-row mt-3 overflow-hidden">
        <div
          className={`relative h-full w-full flex flex-row duration-1000 transform -translate-x-[${
            current * 100
          }%]`}
        >
          <div className="h-[250px] w-full shrink-0">
            <BannerAds content={"Content 1"} />
          </div>
          <div className="h-[250px] w-full shrink-0">
            <BannerAds content={"Content 2"} />
          </div>
          <div className="h-[250px] w-full shrink-0">
            <BannerAds content={"Content 3"} />
          </div>
          <div className="h-[250px] w-full shrink-0">
            <BannerAds content={"Content 4"} />
          </div>
        </div>
      </div>
    </div>
  );
}
