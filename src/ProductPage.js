import { useState } from "react";
import { FaMoneyBill, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import productpic from "./assets/s.jpg";

import Colorcomponent from "./ColorComponent";
import InlineList from "./InlineList";
import Quantity from "./Quantity";
import SizeComponent from "./SizeComponent";

import Table from "./Table";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartReducer";

import UseallProductshook from "./UseProducts";
import Button from "./Button";
import ImageSelector from "./ImageSelector";

function Productpage() {
  const [active, setactive] = useState("red");

  const [activeSize, setSizeactive] = useState("S");
  const [current, setcurrent] = useState(1);

  const { productId } = useParams();

  let navigate = useNavigate();
  const { data, isLoading } = UseallProductshook(productId);

  const dispatch = useDispatch();
  const HandleAddtocart = (event) => {
    dispatch(
      addItem({ itemname: data?.name, quantity: 1, price: data?.price })
    );
  };

  const handlebuyclick = () => {
    navigate("/order", {
      replace: true,
    });
  };

  const currentfunction = (current) => {
    setcurrent(current);
  };

  return (
    <div className=" mt-[60px] bg-white dark:bg-zinc-900 min-h-screen flex items-center flex-col">
      <div className=" h-fit overflow-hidden items-center justify-center mt-[50px] w-full flex  sm:flex-row flex-col">
        <div className="sm:w-1/2  w-full flex-col h-full  flex items-center  ">
          <div className=" w-[300px] h-[300px] rounded-md overflow-hidden">
            {isLoading ? (
              <div className=" dark:bg-zinc-800 animate-pulse w-full items-center justify-center flex h-full bg-gray-300 rounded-md overflow-hidden">
                <svg
                  class="w-20 h-20 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            ) : (
              <img
                src={productpic}
                alt="productpic"
                className="  h-full w-full  object-fill"
              />
            )}
          </div>
          <div className=" h-[64px]  mt-[30px]  w-full flex flex-row items-center justify-center ">
            {isLoading ? (
              <>
                <div className=" mx-2 dark:bg-zinc-800 items-center justify-center flex animate-pulse w-[64px] mx=3 h-[64px]  bg-gray-300 rounded-md overflow-hidden">
                  <svg
                    class="w-8 h-8 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className=" mx-2 dark:bg-zinc-800 items-center justify-center flex animate-pulse w-[64px] mx=3 h-[64px]  bg-gray-300 rounded-md overflow-hidden">
                  <svg
                    class="w-8 h-8 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className=" mx-2 items-center justify-center flex animate-pulse w-[64px] mx=3 h-[64px] dark:bg-zinc-800 bg-gray-300 rounded-md overflow-hidden">
                  <svg
                    class="w-8 h-8 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <ImageSelector productpic={productpic} />
                <ImageSelector productpic={productpic} />
                <ImageSelector productpic={productpic} />
                <ImageSelector productpic={productpic} />
              </>
            )}
          </div>
        </div>
        {isLoading ? (
          <div className=" w-1/2 h-full flex flex-col justify-center items-center animate-pulse">
            <div className=" h-fit ">
              <div className=" w-full h-[30px]  items-center justify-center flex flex-col">
                <h1 className=" font-bold h-[30px]   rounded-full dark:bg-zinc-800 w-[300px] bg-gray-200 text-3xl"></h1>
              </div>
              <div className=" w-4/5 h-[50px]  items-center justify-center flex flex-col">
                <h1 className=" font-bold h-[12px]  rounded-full dark:bg-zinc-800 w-[400px] bg-gray-200 "></h1>
              </div>
              <div className=" w-4/5 h-[12px]  items-center justify-center flex flex-col">
                <h1 className=" font-bold h-[12px] dark:bg-zinc-800  rounded-full  w-[300px] bg-gray-200 "></h1>
              </div>
              <div className=" w-4/5 h-[32px]  items-center justify-center flex flex-col">
                <h1 className=" font-bold h-[12px]  rounded-full dark:bg-zinc-800 w-[100px] bg-gray-200 "></h1>
              </div>
            </div>
            <div className=" h-[100px]  w-9/12 flex mt-5 flex-row justify-between  ">
              <div className=" h-[50px] dark:bg-zinc-800 w-[200px] bg-gray-200 rounded-md"></div>
              <div className=" h-[50px] dark:bg-zinc-800 w-[200px] bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ) : (
          <div className=" sm:w-1/2  sm:h-full w-full  flex flex-col items-center">
            <div className=" w-full h-[100px]  items-center justify-center flex flex-col">
              <h1 className=" dark:text-white font-bold text-3xl">
                {" "}
                This New Product (
                <span className=" text-blue-500">200Birr</span>)
              </h1>
            </div>
            <div className=" sm:w-4/5 w-full h-[100px]  items-center justify-center flex flex-col">
              <h1 className=" dark:text-white font-bold">
                lorem ipsumm lorem lorem ipsumm lorem lorem ipsumm lorem lorem
                ipsumm lorem lorem ipsumm lorem lorem ipsumm lorem lorem ipsumm
              </h1>
            </div>
            <div className=" sm:w-3/4 flex  sm:ml-3 justify-self-start   items-center flex-row h-[50px]">
              <p className="font-bold dark:text-white">Choose Color</p>
              <Colorcomponent
                top={"red"}
                bottom={"pink"}
                onclick={() => {
                  setactive("red");
                }}
                activestatus={active === "red" ? true : false}
              />
              <Colorcomponent
                top={"black"}
                bottom={"gray"}
                onclick={() => {
                  setactive("black");
                }}
                activestatus={active === "black" ? true : false}
              />
              <Colorcomponent
                top={"orange"}
                bottom={"blue"}
                onclick={() => {
                  setactive("orange");
                }}
                activestatus={active === "orange" ? true : false}
              />
              <Colorcomponent
                top={"brown"}
                bottom={"pink"}
                onclick={() => {
                  setactive("brown");
                }}
                activestatus={active === "brown" ? true : false}
              />
            </div>
            <div className=" sm:w-3/4 flex  sm:ml-3  mt-3 items-center justify-self-start   flex-row h-[50px] ">
              <p className="dark:text-white font-bold">Choose Size</p>
              <SizeComponent
                size={"S"}
                onclick={() => {
                  setSizeactive("S");
                }}
                active={activeSize === "S" ? true : false}
              />
              <SizeComponent
                size={"M"}
                onclick={() => {
                  setSizeactive("M");
                }}
                active={activeSize === "M" ? true : false}
              />
              <SizeComponent
                size={"L"}
                onclick={() => {
                  setSizeactive("L");
                }}
                active={activeSize === "L" ? true : false}
              />
            </div>
            <div className="  ml-3 w-1/2 mt-3 h-[50px]  ">
              <div className="  flex items-center justify-center flex-row">
                <p className="dark:text-white font-bold">Set Quantity</p>
                <Quantity oncurrent={currentfunction} />
                <p className=" text-red-700 font-bold">#3 Item Left</p>
              </div>
            </div>
            <div className=" flex items-center justify-center h-[100px] flex-row  w-2/3">
              <div className="h-[40px] w-[120px] mx-2">
                <Button
                  onpress={handlebuyclick}
                  name={" Check Out"}
                  backgroundColor={" bg-green-800 "}
                />
              </div>
              <div className="h-[40px] w-[120px] mx-2">
                <Button
                  onpress={HandleAddtocart}
                  name={"Add To Cart"}
                  backgroundColor={"bg-blue-700 "}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="Path">
        <p onClick={() => navigate(-1)}>Catagory</p>
        <Link>
          <p>/Product</p>
        </Link>
      </div>
      <div className="Product-PageBody">
        <div className="Largeimage">
          <div className="ProductImg">
            <img alt="Productpic" src={data?.images} />
          </div>
          <div className="ProductImagelist">
            <div className="imagebutton">
              {" "}
              <img alt="Productpic" src={productpic} />
            </div>
            <div className="imagebutton">
              {" "}
              <img alt="Productpic" src={productpic} />
            </div>
            <div className="imagebutton">
              {" "}
              <img alt="Productpic" src={data?.images} />
            </div>
            <div className="imagebutton">
              {" "}
              <img alt="Productpic" src={productpic} />
            </div>
          </div>
        </div>

        <div className="ProductDetails">
          <div className="ProductNames">
            <p>{data?.name}</p>
          </div>
          <div className="ProductDescription"> {data?.description}</div>
          <div className="rating">
            <Rating
              initialRating={data?.rating}
              style={{ zIndex: 9 }}
              emptySymbol={<FaRegStar id="rates" size={12} />}
              fullSymbol={<FaStar size={12} id="rates" color="darkgreen" />}
              fractions={2}
            />
          </div>
          <div className="ProductPrice">
            <FaMoneyBill style={{ marginRight: 5 }} /> {data?.price}Birr
          </div>

          <div className="ChooseColor">
            <p>Choose Color</p>
            <Colorcomponent
              top={"red"}
              bottom={"pink"}
              onclick={() => {
                setactive("red");
              }}
              activestatus={active === "red" ? true : false}
            />
            <Colorcomponent
              top={"black"}
              bottom={"gray"}
              onclick={() => {
                setactive("black");
              }}
              activestatus={active === "black" ? true : false}
            />
            <Colorcomponent
              top={"orange"}
              bottom={"blue"}
              onclick={() => {
                setactive("orange");
              }}
              activestatus={active === "orange" ? true : false}
            />
            <Colorcomponent
              top={"brown"}
              bottom={"pink"}
              onclick={() => {
                setactive("brown");
              }}
              activestatus={active === "brown" ? true : false}
            />
          </div>
          <div className="Choosesize">
            <p>Choose Size</p>
            <SizeComponent
              size={"S"}
              onclick={() => {
                setSizeactive("S");
              }}
              active={activeSize === "S" ? true : false}
            />
            <SizeComponent
              size={"M"}
              onclick={() => {
                setSizeactive("M");
              }}
              active={activeSize === "M" ? true : false}
            />
            <SizeComponent
              size={"L"}
              onclick={() => {
                setSizeactive("L");
              }}
              active={activeSize === "L" ? true : false}
            />
          </div>
          <div className="Setquantity">
            <p>Set Quantity</p>
            <Quantity oncurrent={currentfunction} />
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              #3 Item Left
            </p>
          </div>
          <div className="InlineButtons">
            <div className="BuyAndAddtocart" onClick={handlebuyclick}>
              <p>Buy Now</p>
            </div>
            <div className="Addtocart" onClick={HandleAddtocart}>
              Addtocart
            </div>
          </div>
        </div>
      </div>

      <div className="ProductTable"> Detail Specificatiion</div>
      <div className="SpecificationTable">
        <Table />
        <Table />
      </div>

      <div>
        <InlineList name={"Similar Products"} />
      </div> */}
    </div>
  );
}

export default Productpage;
