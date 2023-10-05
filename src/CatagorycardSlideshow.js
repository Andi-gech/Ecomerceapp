import React, { useState } from "react";
import CatagoryCardContainer from "./CatagoryCardContainer";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import LoadingCard from "./LoadingCard";

function CatagorycardSlideshow({ data, isloading }) {
  const [current, setcurrent] = useState(0);
  const clicknext = () => {
    const viewpage = (current + 1) % Math.ceil(data?.length / 5);

    setcurrent(viewpage);
  };
  const clickprev = () => {
    if (current !== 0) {
      const viewpage = current - 1;
      setcurrent(viewpage);
    }
  };
  if (isloading) {
    return (
      <div className=" w-[990px]  h-[220px]  flex flex-row mt-2 animate-pulse   overflow-hidden  ">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }
  if (data?.length === 0) {
    return (
      <div className=" h-[120px] w-full  items-center flex justify-center">
        <p className=" font-bold   text-lg dark:text-white">no Product data</p>
      </div>
    );
  }
  return (
    <div className="mt-9 relative group flex items-center justify-center w-full  h-[220px]">
      <div
        onClick={clickprev}
        className={` flex  items-center ${
          current === 0 ? "bg-slate-400" : "active:bg-blue-200"
        }    z-30 justify-center cursor-pointer dark:bg-blue-200 dark:bg-opacity-20 dark:border-blue-400   transition-opacity opacity-0 group-hover:opacity-100 h-[60px] w-[60px]   bg-blue-100 rounded-full absolute border-4 border-white -left-[30px]`}
      >
        <FaAngleLeft size={10} className=" dark:text-white" />
      </div>
      <div
        onClick={clicknext}
        className=" h-[60px] w-[60px] flex z-30 dark:bg-blue-200 dark:bg-opacity-20 dark:border-blue-400  transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer items-center justify-center  bg-blue-100  rounded-full absolute border-4 border-white -right-[30px]"
      >
        <FaAngleRight size={10} className=" dark:text-white" />
      </div>

      <div className=" w-[990px]  h-[220px]   overflow-hidden  ">
        <div
          className={` w-full  h-[220px]  flex flex-row p-1  duration-1000 -translate-x-[${
            current * 100
          }%]  `}
        >
          {data?.map((item) => {
            return (
              <div className=" w-[180px] h-full mx-2 shrink-0">
                <CatagoryCardContainer
                  images={item.images}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CatagorycardSlideshow;
