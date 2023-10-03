import React, { useContext } from "react";
import product from "./assets/iphones.png";
import { Link } from "react-router-dom";
import Baseurl from "./BaseUrl";

function CatagoryCardContainer({ images, name, price, id }) {
  const baseUrl = useContext(Baseurl);
  return (
    <Link to={`${id}`}>
      <div className=" h-full w-full  rounded-lg shadow-sm shadow-zinc-900 hover:border-[1px] cursor-pointer overflow-hidden   border-blue-400  bg-white">
        <div className=" h-2/3 w-full bg-zinc-100 flex items-center justify-center ">
          <img
            src={images?.startsWith("http") ? images : `${baseUrl}${images}`}
            className=" max-h-full max-w-full"
          />
        </div>
        <div className=" h-1/3 w-full flex items-center flex-col justify-between  ">
          <div>
            <h2 className=" font-bold w-full px-2   text-base h-[20px]  overflow-hidden">
              {name}
            </h2>
            <div className=" w-full flex  flex-row px-2    ">
              <p className=" font-bold  text-zinc-500 mr-2  text-sm">200$</p>
              <p className=" font-bold  text-zinc-500 mr-2 text-sm">
                {price}Birr
              </p>
            </div>
          </div>

          <div className=" w-11/12 h-[25px] flex    items-center  justify-self-end border-t-2 border-zinc-200 ">
            <p className=" font-bold text-sm text-green-700">Save-19882</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CatagoryCardContainer;
