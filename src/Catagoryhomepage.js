import Catagorycard from "./CatagoryCards";
import Productcard from "./ProductCard";

import Select from "react-select";
import ong from "./assets/pngegg(1).png";
import ongw from "./assets/aaff.jpg";

import { useMediaQuery } from "react-responsive";
import useCatagoryhook from "./UseCatagory";
import useNewProducthook from "./UseNewProduct";

import { useContext, useEffect, useState } from "react";
import UseSubcatagoryhook from "./UseSubcatagory";
import axios from "axios";
import Baseurl from "./BaseUrl";

import { Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import Banner from "./Banner";
import BannerAds from "./BannerAds";
import CatagoryBox from "./CatagoryBox";
import CatagoryCardContainer from "./CatagoryCardContainer";
import CAtagoryCirclecard from "./CAtagoryCirclecard";
import BrandCard from "./BrandCard";
import { FaCommentDots, FaDotCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import SlideShow from "./SlideShow";
import CatagorycardSlideshow from "./CatagorycardSlideshow";
import Signupcomponent from "./Signupbox";
import BrandSlideShow from "./BrandSlideShow";
import CatagoryCircleLoading from "./CatagoryCircleLoading";

function Catagoryhomepage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isAuthenticated = useIsAuthenticated();

  const [selectedOption, setSelectedOption] = useState(null);
  const [product, setproduct] = useState([]);
  const [max, setmax] = useState("");
  const [min, setmin] = useState("");
  const [Subcatagory, setSubcatagory] = useState(null);

  const baseUrl = useContext(Baseurl);
  const { data: NewProduct, isLoading: NewsLoading } = useNewProducthook();

  useEffect(() => {
    setproduct(NewProduct);
  }, [NewProduct]);

  const { data, isLoading: catagoryLoading } = useCatagoryhook();
  const { data: subcatagory } = UseSubcatagoryhook(selectedOption?.id);

  const changedata = () => {
    axios
      .get(
        `${baseUrl}/Allproduct/?price__lt=${max}&price__gt=${min}&cattagory_id=${
          selectedOption ? selectedOption.id : ""
        }&subcatagory=${Subcatagory ? Subcatagory.id : ""}`
      )
      .then((response) => {
        console.log(response);
        setproduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const dataoption = data?.map(({ id, name }) => ({
    id,
    label: name,
    value: id,
  }));

  const Secdataoption = subcatagory?.map(({ id, name }) => ({
    id,
    label: name,
    value: id,
  }));

  return (
    <div className=" mt-[60px] bg-white  dark:bg-zinc-900 min-h-screen flex items-center flex-col">
      <div className=" h-[60px]  w-full justify-center flex-row flex items-center  border-t-2 border-b-2  dark:border-zinc-800 border-zinc-100">
        {data?.map((item) => {
          return (
            <div
              className="
          h-[32px] w-fit m-2 "
            >
              <CatagoryBox name={item.name} active={true} />
            </div>
          );
        })}
      </div>

      <SlideShow isloading={NewsLoading} />

      <div className=" mt-[120px]  w-9/12">
        <div className=" w-full  h-[30px]  flex items-center  justify-between px-2">
          <p className=" text-black dark:text-white font-bold  w-fit  h-[30px]   flex  items-center justify-center border-b-4 border-blue-500">
            Grab the best deal on
            <span className=" text-blue-400  mx-2  text-lg">SmartPhones</span>
          </p>
          <p className=" text-black dark:text-white font-semibold">view All</p>
        </div>
        <CatagorycardSlideshow isloading={NewsLoading} data={NewProduct} />
      </div>
      <div className=" mt-[120px]  w-9/12">
        <div className=" w-full  h-[30px]  flex items-center  justify-between px-2">
          <p className=" text-black dark:text-white font-bold  w-fit  h-[30px]   flex  items-center justify-center border-b-4 border-blue-500">
            Shop From
            <span className=" text-blue-400  mx-2  text-lg">
              Top Catagories
            </span>
          </p>
          <p className=" text-black dark:text-white  font-semibold">view All</p>
        </div>
        <div className=" w-full mt-9  h-[150px]  flex flex-row  overflow-hidden">
          {catagoryLoading ? (
            <>
              <CatagoryCircleLoading />
              <CatagoryCircleLoading />
              <CatagoryCircleLoading />
              <CatagoryCircleLoading />
            </>
          ) : (
            <>
              {data?.map((item) => {
                return (
                  <div className=" w-[150px] h-[150px] mx-8">
                    <CAtagoryCirclecard
                      name={item.name}
                      id={item.id}
                      picture={item.images}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className=" mt-[120px]  w-9/12">
        <div className=" w-full  h-[30px]  flex items-center  justify-between px-2">
          <p className=" text-black  dark:text-white font-bold  w-fit  h-[30px]   flex  items-center justify-center border-b-4 border-blue-500">
            Top
            <span className=" text-blue-400  mx-2  text-lg">
              Local Products
            </span>
          </p>
          <p className=" text-black  dark:text-white font-semibold">view All</p>
        </div>
        <BrandSlideShow isloading={catagoryLoading} />
        <div className=" flex  flex-row  w-full mt-2 items-center justify-center">
          <BsDot size={30} />
          <BsDot size={30} />
          <BsDot size={30} />
          <BsDot size={30} />
        </div>
      </div>

      <div className=" mt-[120px]  w-9/12">
        <div className=" w-full  h-[30px]  flex items-center  justify-between px-2">
          <p className=" text-black dark:text-white  font-bold  w-fit  h-[30px]   flex  items-center justify-center border-b-4 border-blue-500">
            Todays
            <span className=" text-blue-400  mx-2  text-lg">Best discount</span>
          </p>
          <p className=" text-black dark:text-white  font-semibold">view All</p>
        </div>
        <CatagorycardSlideshow isloading={NewsLoading} data={NewProduct} />
      </div>
    </div>
  );
}

export default Catagoryhomepage;
