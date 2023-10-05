import React, { useState } from "react";
import BannerAds from "./BannerAds";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SlideShow({ isloading }) {
  const [current, setCurrent] = useState(0); // Start with the first slide

  const clickNext = () => {
    const nextPage = (current + 1) % 4; // Assuming you have 4 slides
    setCurrent(nextPage);
  };

  const clickPrev = () => {
    const prevPage = (current - 1 + 4) % 4; // Assuming you have 4 slides
    setCurrent(prevPage);
  };
  if (true) {
    return (
      <div className="relative animate-pulse h-[250px] dark:bg-zinc-800 justify-between flex-row rounded-3xl w-9/12 flex items-center  bg-gray-200">
        <div className=" w-1/2 h-full flex items-center flex-col justify-center  rounded-md ">
          <div className="w-11/12 dark:bg-zinc-700 bg-gray-300  rounded-2xl h-[20px] mt-3"></div>
          <div className="w-3/5 dark:bg-zinc-700 bg-gray-300 h-[12px] rounded-full mt-3"></div>
          <div className="w-2/3 dark:bg-zinc-700 bg-gray-300 h-[12px] rounded-full mt-3"></div>
        </div>
        <div className=" w-1/2 h-full flex items-center justify-center">
          <div class="flex items-center justify-center  w-[230px]  h-[230px] dark:bg-zinc-700 bg-gray-300 rounded ">
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-9/12 flex items-center justify-center">
      <div
        onClick={clickPrev}
        className={`flex items-center ${
          current === 0 ? "bg-slate-400" : "active:bg-blue-200"
        } z-30 justify-center dark:bg-blue-400  dark:border-zinc-900 cursor-pointer h-[60px] w-[60px] bg-blue-100 rounded-full absolute border-4 border-white -left-[30px]`}
      >
        <FaAngleLeft size={10} className=" dark:text-white" />
      </div>
      <div
        onClick={clickNext}
        className="h-[60px] w-[60px] flex dark:bg-blue-400  dark:border-zinc-900 z-30 active:bg-blue-200 cursor-pointer items-center justify-center bg-blue-100 rounded-full absolute border-4 border-white -right-[30px]"
      >
        <FaAngleRight size={10} className=" dark:text-white" />
      </div>
      <div className="relative h-[250px]  rounded-2xl w-full flex flex-row mt-3 overflow-hidden">
        <div
          style={{ "--tw-translate-x": `-${current * 100}%` }}
          className={`relative h-full w-full flex flex-row duration-1000 transform `}
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
