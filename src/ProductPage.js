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
  const { data } = UseallProductshook(productId);

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
    <div className=" mt-[60px] bg-white min-h-screen flex items-center flex-col">
      <div className=" h-[470px] mt-[50px] w-full flex flex-row">
        <div className=" w-1/2  flex-col h-full  flex items-center justify-center ">
          <div className=" w-2/3 h-2/3 rounded-md overflow-hidden">
            <img
              src={productpic}
              alt="productpic"
              className="  h-full w-full  object-fill"
            />
          </div>
          <div className=" h-[64px]  mt-[30px]  w-full flex flex-row items-center justify-center ">
            <ImageSelector productpic={productpic} />
            <ImageSelector productpic={productpic} />
            <ImageSelector productpic={productpic} />
            <ImageSelector productpic={productpic} />
          </div>
        </div>
        <div className=" w-1/2 h-full flex flex-col items-center">
          <div className=" w-full h-[100px]  items-center justify-center flex flex-col">
            <h1 className=" font-bold text-3xl">
              {" "}
              This New Product (<span className=" text-blue-500">200Birr</span>)
            </h1>
          </div>
          <div className=" w-4/5 h-[100px]  items-center justify-center flex flex-col">
            <h1 className=" font-bold">
              lorem ipsumm lorem lorem ipsumm lorem lorem ipsumm lorem lorem
              ipsumm lorem lorem ipsumm lorem lorem ipsumm lorem lorem ipsumm
            </h1>
          </div>
          <div className=" w-3/4 flex  ml-3 justify-self-start   items-center flex-row h-[50px]">
            <p className="font-bold">Choose Color</p>
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
          <div className=" w-3/4 flex  ml-3  mt-3 items-center justify-self-start   flex-row h-[50px] ">
            <p className=" font-bold">Choose Size</p>
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
              <p className="font-bold">Set Quantity</p>
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
