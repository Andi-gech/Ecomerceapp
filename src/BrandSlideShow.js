import React from "react";
import BrandCard from "./BrandCard";
import BrandLoadingCard from "./BrandLoadingCard";

export default function BrandSlideShow({ isloading }) {
  if (isloading) {
    return (
      <div className=" w-full mt-9  h-[150px]  flex flex-row">
        <div className=" w-[250px]  h-full mx-8 ">
          <BrandLoadingCard />
        </div>
        <div className=" w-[250px]  h-full mx-8 ">
          <BrandLoadingCard />
        </div>
        <div className=" w-[250px]  h-full mx-8 ">
          <BrandLoadingCard />
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full mt-9  h-[150px]  flex flex-row">
      <div className=" w-[250px]  h-full mx-8 ">
        <BrandCard />
      </div>
      <div className=" w-[250px]  h-full mx-8 ">
        <BrandCard />
      </div>
      <div className=" w-[250px]  h-full mx-8 ">
        <BrandCard />
      </div>
    </div>
  );
}
