import { useContext, useEffect, useState } from "react";
import { useAuthHeader, useIsAuthenticated } from "react-auth-kit";

import { FaMoneyBillWave, FaMotorcycle, FaPiggyBank } from "react-icons/fa";
import productpic from "./assets/index.png";
import cbe from "./assets/cbe.png";
import Signupcomponent from "./Signupbox";
import ButtonsTransparent from "./Buttons";
import usePostOrderhook from "./UsePostOrder";
import axios from "axios";
import Baseurl from "./BaseUrl";
import useCustomerhook from "./UseCustomer";
import Input from "./Input";
import mPessa from "./assets/mPessa.png";
import chapa from "./assets/chapa.png";
import telebirr from "./assets/TeleBirr.png";
import Button from "./Button";
import product from "./assets/s.jpg";
import { BsArrowBarLeft, BsArrowLeft, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./CartReducer";
import UsePostOrderhook from "./UsePostOrder";
import UsePostOrderItemhook from "./UsePostOrderItem";
import { TailSpin } from "react-loader-spinner";

function OrderPAge() {
  const isAuthenticated = useIsAuthenticated();
  const [signup, setsignup] = useState(false);
  const [userdata, setuserdata] = useState(false);
  const [orderconfrim, setorderconfirm] = useState(false);
  const [orderconfrimno, setorderconfirmno] = useState();
  const [copy, setcopied] = useState(false);
  const [location, setlocation] = useState("");
  const [Errors, seterror] = useState();

  const [paymentmethod, setpaymentmethod] = useState("chapa");

  useEffect(() => {
    getme();
    setproduct();
  }, []);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalprice, setTotalprice] = useState(0);
  const [visiblecart, setvisiblecart] = useState(false);

  const items = useSelector((state) => state.cart);

  const baseUrl = useContext(Baseurl);

  const setproduct = () => {
    let totalQuantity = 0;
    let totalprice = 0;
    for (let i = 0; i < items?.length; i++) {
      totalQuantity += items[i].quantity;
      totalprice += parseFloat(items[i].price);
    }
    setTotalQuantity(totalQuantity);
    setTotalprice(totalprice);
  };

  const getme = () => {
    const existingData = JSON.parse(localStorage.getItem("myIdentity")) || [];

    if (isAuthenticated()) {
      setsignup(false);

      setuserdata(existingData);
    } else {
      setsignup(true);
    }
  };
  const authHeader = useAuthHeader();
  const dispatch = useDispatch();
  const handelRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const { data, isError, error, isLoading, refech } = useCustomerhook();
  const { mutate: Postmutate, isLoading: orderloading } =
    UsePostOrderItemhook(orderconfrimno);

  const {
    isSuccess,
    data: postdata,
    isLoading: ispostloadind,

    mutate,
  } = UsePostOrderhook();
  const ordernow = () => {
    if (items.length === 0) {
      return seterror("Please add item to cart");
    }
    const totalItems = items.length;
    const postItemPromises = [];

    mutate(
      {
        location: location,
      },
      {
        onSuccess: (data) => {
          console.log("Mutation successful!", data);
          setorderconfirmno(data?.data.orderuniqueId);

          items.forEach((item, index) => {
            const postData = {
              product: item.id,
              quantity: item.quantity,
            };

            console.log(index);

            const postPromise = Postmutate(postData);
            postItemPromises.push(postPromise);
          });

          Promise.all(postItemPromises)
            .then(() => {
              setorderconfirm(true);
              dispatch(clearCart());
            })
            .catch((error) => {
              console.error("Error submitting items:", seterror(error));
            });
        },
      }
    );
  };

  let navigate = useNavigate();
  console.log(isAuthenticated(), "isAuthenticated");
  var islogin = isAuthenticated();
  if (ispostloadind || orderloading) {
    return (
      <div className="relative w-full justify-center overflow-hidden dark:bg-zinc-900  mt-[60px] bg-white min-h-screen flex items-center flex-col">
        <TailSpin size={30} />
      </div>
    );
  }

  return (
    <div className=" relative w-full overflow-hidden dark:bg-zinc-900  mt-[60px] bg-white min-h-screen flex items-center flex-col">
      {!isAuthenticated() && <Signupcomponent />}
      {orderconfrim && (
        <div className=" absolute z-40 w-[300px] flex-col h-[300px] dark:bg-zinc-800  bg-white flex items-center justify-center  ">
          <p className=" font-bold  dark:text-white">Your Order is confirmed</p>
          <p className=" font-bold dark:text-white">
            Order No : {orderconfrimno}
          </p>
          <p className=" font-bold dark:text-white">Please wait for our call</p>
          <div className=" absolute h-[40px] w-[40px] top-0 right-0">
            <BsX
              onClick={() => setorderconfirm(false)}
              size={30}
              className=" cursor-pointer dark:text-white font-bold  "
            />
          </div>
        </div>
      )}

      <div className=" relative w-full h-[60px] flex items-center justify-center border-b-2  dark:border-zinc-800 border-zinc-100 ">
        <div
          onClick={() => navigate(-1)}
          className=" absolute hover:bg-slate-100  h-[60px] w-[60px] top-0  left-0 flex items-center justify-center"
        >
          <BsArrowLeft size={20} className=" font-bold dark:text-white" />
        </div>
        <h1 className="dark:text-white text-3xl font-bold">Check Out Here</h1>
      </div>
      <div className="  items-center justify-center w-full flex sm:flex-row flex-col ">
        <div className=" sm:w-[500px] w-full h-full  flex-col  flex ">
          <div className=" w-full h-[50px]flex flex-col items-center justify-center">
            <p className=" font-bold text-white   text-lg">Cart Items </p>
          </div>
          <div className=" w-full h-[400px]  flex flex-col items-center overflow-y-auto ">
            {Errors && (
              <p className="  fixed  bg-red-200  text-black font-bold">
                {Errors}
              </p>
            )}
            {items.map((item) => {
              return (
                <div className=" w-[400px] mt-2 h-[100px] items-center justify-center shadow-md dark:bg-zinc-800 bg-white flex flex-row shrink-0">
                  <img src={product} className="h-[100px] w-[100px]" />

                  <div className=" flex-1 flex-col  items-center justify-center flex">
                    <h1 className=" dark:text-white font-bold text-xl">
                      {item.itemname}{" "}
                    </h1>
                    <p className=" dark:text-white text-sm font-bold">
                      {item.id}Birr
                    </p>
                  </div>
                  <div
                    onClick={() => handelRemove(item.id)}
                    className="h-[50px] flex items-center  justify-center dark:text-white  cursor-pointer  w-[50px] "
                  >
                    <BsX />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-1/2 h-full flex  flex-col items-center ">
          <div className=" w-[500px]  items-center  h-full  bg-zinc-50 dark:bg-zinc-800 flex flex-col">
            <h3 className=" font-bold text-lg dark:text-white">
              Fill payment detail
            </h3>
            <div className=" h-1/2 w-full  ">
              <div className="h-[50px] mt-4 w-3/4 flex flex-row items-center justify-center">
                <p className=" font-bold mx-2 dark:text-white">FullName</p>
                <div className=" h-[50px] w-3/4 mt-2">
                  <Input
                    value={data?.Firstname}
                    background={"bg-zinc-100 dark:bg-zinc-700"}
                    placeholder={"John Doe"}
                  />
                </div>
              </div>
              <div className="h-[50px] mt-4 w-3/4 flex flex-row items-center justify-center">
                <p className=" font-bold dark:text-white mx-2">Distnation</p>
                <div className=" h-[50px] w-3/4 mt-2">
                  <Input
                    background={"bg-zinc-100 dark:bg-zinc-700"}
                    placeholder={"Bole, Addis Ababa Ethiopia"}
                    ontextchange={(e) => setlocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="h-[50px] mt-4 w-3/4 flex flex-row items-center justify-center">
                <p className=" font-bold dark:text-white mx-2">Phone No</p>
                <div className=" h-[50px] w-3/4 mt-2">
                  <Input
                    background={"bg-zinc-100 dark:bg-zinc-700"}
                    placeholder={"0912345678"}
                  />
                </div>
              </div>
              <div className="h-[50px] mt-2 w-3/4 flex flex-row items-center justify-center">
                <p className=" font-bold dark:text-white mx-2">Totalprice</p>
                <div className=" items-center justify-center flex  h-[50px] w-3/4 mt-2">
                  <p className="dark:text-white font-bold">{totalprice}</p>
                </div>
              </div>
            </div>

            <div className=" w-full h-[40px] mb-2 flex items-center justify-center ">
              <p className=" font-bold dark:text-white text-lg">
                Choose Payment Option
              </p>
            </div>
            <div className="h-[50px] w-11/12 flex flex-row">
              <div
                onClick={() => setpaymentmethod("chapa")}
                className="   w-1/3 h-full mx-2 cursor-pointer flex flex-col items-center justify-center"
              >
                <img
                  src={chapa}
                  className={` bg-white rounded-md  dark:shadow-zinc-700 shadow-md shadow-zinc-200 ${
                    paymentmethod === "chapa" ? "border-2" : " border-0"
                  } border-blue-400  w-full h-full `}
                />
              </div>
              <div
                onClick={() => setpaymentmethod("TeleBirr")}
                className=" w-1/3 h-full mx-2 bg-red-200 flex flex-col items-center justify-center"
              >
                <img
                  src={telebirr}
                  className={` cursor-pointer bg-white rounded-md  shadow-md dark:shadow-zinc-700 shadow-zinc-200 ${
                    paymentmethod === "TeleBirr" ? "border-2" : " border-0"
                  } border-blue-400   w-full h-full `}
                />
              </div>
              <div
                onClick={() => setpaymentmethod("Bank")}
                className={`  cursor-pointer w-1/3 h-full mx-2 dark:bg-zinc-700 dark:text-white bg-white rounded-md ${
                  paymentmethod === "Bank" ? "border-2" : " border-0"
                } border-blue-400  font-bold flex flex-col items-center justify-center`}
              >
                Pay With Bank
              </div>
            </div>
            {paymentmethod === "Bank" && (
              <div class="mb-3 mt-3">
                <input
                  class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFile"
                />
              </div>
            )}
            <div className=" h-[40px]  justify-self-end mt-4 w-[150px]   bg-zinc-900  rounded-md ">
              <Button onpress={ordernow} name={"PAY"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPAge;
