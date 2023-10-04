import ButtonsTransparent from "./Buttons";
import Productcard from "./ProductCard";
import ServiceCard from "./ServieceCards";
import faq from "./assets/faq.svg";
import bannerimage from "./assets/bannerimage3.png";

import bannerimage2 from "./assets/bannerimage.png";
import onlinepay from "./assets/payment.svg";
import delivery from "./assets/delivery.svg";
import { products } from "./ProductList";
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import InlineList from "./InlineList";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useproducthook from "./UseProduct";
import BannerAds from "./BannerAds";
import SlideShow from "./SlideShow";
import CatagoryCardContainer from "./CatagoryCardContainer";
import PageButton from "./PageButton";
import CatagorycardSlideshow from "./CatagorycardSlideshow";
import LoadingCard from "./LoadingCard";

function HomePage({}) {
  const { SearchParameter } = useParams();
  const [order, setOrder] = useState("asc");
  const [rate, setrate] = useState("inc");
  const [product, setproduct] = useState();
  const location = useLocation();
  const { id } = useParams();
  const sample = [1, 2, 3, 4, 5, 67, 8, 9, 77, 53, 32];
  const { data, isError, error, isLoading, refech } = useproducthook(id);

  const sortByPrice = () => {
    const sortedItems = data.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setOrder(order === "asc" ? "desc" : "asc");
    setproduct(sortedItems);
  };
  const sortByReview = () => {
    const sortedItem = data.sort((a, b) => {
      if (rate === "inc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });

    setrate(rate === "inc" ? "dec" : "inc");
    setproduct(sortedItem);
  };
  useEffect(() => {
    setproduct(data);
  }, [data]);

  return (
    <div className=" mt-[60px] bg-white min-h-screen flex items-center flex-col">
      <SlideShow />
      <div className=" w-4/5 mt-[100px] h-[50px]  ">
        <p className=" text-black text-2xl font-bold ">
          Products For <span className=" text-blue-500">You</span>
        </p>
      </div>
      <div className=" w-4/5 flex items-center min-h-[200px] justify-center ">
        {false && (
          <p className="text-black font-bold w-1/2 text-center">
            Sorry there is no product found in this catagory may be you can it
            check back later!!
          </p>
        )}
        <div className=" w-full flex flex-row overflow-hidden flex-wrap">
          {isLoading && (
            <>
              <div className=" w-[200px] h-[250px] mt-3 p-1  shrink-0 mx-3 ">
                <LoadingCard />
              </div>
              <div className=" w-[200px] h-[250px] mt-3 p-1  shrink-0 mx-3 ">
                <LoadingCard />
              </div>
              <div className=" w-[200px] h-[250px] mt-3 p-1  shrink-0 mx-3 ">
                <LoadingCard />
              </div>
            </>
          )}
          {data?.map((item) => {
            return (
              <div className=" w-[200px] h-[250px] mt-3 p-1  shrink-0 mx-3 ">
                <CatagoryCardContainer
                  name={item.name}
                  price={item.price}
                  images={item.images}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-4/5 mt-[50px] flex flex-row h-14 items-center ">
        <PageButton number={1} />
        <PageButton number={2} />
        <PageButton number={3} />
        <PageButton number={4} />
        <PageButton number={5} />
      </div>
      <div className=" w-4/5 mt-[100px] h-[50px]  ">
        <p className=" text-black text-2xl font-bold ">
          Similar <span className=" text-blue-500">Products</span>
        </p>
      </div>
      <div className=" w-4/5">
        <CatagorycardSlideshow isloading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default HomePage;
