import Logo from "./assets/List.png";
import user from "./assets/user.png";
import {
  FaAngleDown,
  FaCartArrowDown,
  FaList,
  FaRemoveFormat,
  FaSearch,
  FaTrash,
  FaTrashAlt,
  FaUser,
  FaUserAlt,
  FaXing,
} from "react-icons/fa";
import {
  AiOutlineCaretUp,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartReducer";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Searchbox from "./SearchBox";
import { Link, useNavigate } from "react-router-dom";
import ButtonsTransparent from "./Buttons";
import logosvg from "./assets/logo.svg";
import {
  useAuthUser,
  useIsAuthenticated,
  useSignIn,
  useSignOut,
} from "react-auth-kit";
import Signupcomponent from "./Signupbox";

import Input from "./Input";
import CartCard from "./CartCard";
import Button from "./Button";
function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalprice, setTotalprice] = useState(0);
  const [visiblecart, setvisiblecart] = useState(false);
  const [items, setitems] = useState([]);
  const [listvisible, setlist] = useState(false);
  const [search, setsearch] = useState();
  const [activesearch, setactivesearch] = useState(false);
  const [acountvisible, setacountvisible] = useState(false);
  const [Signupcomponents, setSignupcompnent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    calculateTotalQuantity();
  }, []);

  window.addEventListener("storage", function (event) {
    calculateTotalQuantity();
  });
  const signOut = useSignOut();
  let navigate = useNavigate();
  const calculateTotalQuantity = () => {
    let myCartString = localStorage.getItem("myCart");
    let cartArray = JSON.parse(myCartString);
    let totalQuantity = 0;
    let totalprice = 0;
    for (let i = 0; i < cartArray?.length; i++) {
      totalQuantity += cartArray[i].quantity;
      totalprice += parseFloat(cartArray[i].price);
    }
    setTotalQuantity(totalQuantity);
    setTotalprice(totalprice);
    setitems(cartArray);
  };
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [visiblep, setvisiblep] = useState(true);
  const handleFocus = () => {
    setvisiblep(false);
  };
  const handelRemove = (name) => {
    let myCart = JSON.parse(localStorage.getItem("myCart"));
    myCart = myCart.filter((item) => item.itemname !== name);
    localStorage.setItem("myCart", JSON.stringify(myCart));
    window.dispatchEvent(new Event("storage"));
  };
  const handlBlur = () => {
    setTimeout(() => {
      setvisiblep(true);
    }, 300);
  };
  const auth = useAuthUser();
  const cartItems = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);
  const handlebuyclick = () => {
    navigate("/order", {
      replace: true,
    });
  };

  return (
    // <>
    //   {!isAuthenticated() && Signupcomponents && <Signupcomponent />}
    //   <div className="Navbar">
    //     {!activesearch && (
    //       <div className="Logo" style={{ flex: !visiblep ? 1 / 3 : 1 }}>
    //         <Link to={""}>
    //           {" "}
    //           <img src={Logo} alt="Logo" width={100} height={50} />
    //         </Link>
    //         {isDesktopOrLaptop && (
    //           <>
    //             <Link to={""}>
    //               <p id="CatagoryText">Catagory </p>
    //             </Link>

    //             {visiblep && (
    //               <>
    //                 {" "}
    //                 <Link to={"/orders"}>
    //                   <p>Orders</p>
    //                 </Link>
    //                 <Link to={"/news"}>
    //                   <p>Whats New</p>
    //                 </Link>
    //                 <Link to={"/delivery"}>
    //                   <p>Delivery</p>
    //                 </Link>
    //               </>
    //             )}
    //           </>
    //         )}
    //       </div>
    //     )}
    //     {isTabletOrMobile && !visiblep && (
    //       <Searchbox search={search} width={310} ismobile={true} />
    //     )}
    //     {isTabletOrMobile && (
    //       <div className="SearchIcon">
    //         <p onClick={() => setactivesearch(!activesearch)}>
    //           <FaSearch />
    //         </p>
    //         {activesearch && (
    //           <input
    //             id="mobilesearch"
    //             placeholder="Search here"
    //             onFocus={handleFocus}
    //             onBlur={handlBlur}
    //             onChange={(e) => setsearch(e.target.value)}
    //           />
    //         )}
    //       </div>
    //     )}
    //     <div className="Userinfo">
    //       {isDesktopOrLaptop && (
    //         <div className="SearchBar">
    //           <input
    //             placeholder="Search Product"
    //             onFocus={handleFocus}
    //             onBlur={handlBlur}
    //             onChange={(e) => setsearch(e.target.value)}
    //           />
    //           {!visiblep && (
    //             <Searchbox ismobile={false} search={search} width={610} />
    //           )}
    //         </div>
    //       )}
    //       {isDesktopOrLaptop && (
    //         <div
    //           className="user-acount"
    //           onClick={() => setacountvisible(!acountvisible)}
    //         >
    //           <p>Account</p>
    //           <FaUser id="icons-navbar" size={20} />
    //         </div>
    //       )}

    //       <div
    //         className="cart"
    //         onClick={() => {
    //           setvisiblecart(!visiblecart);
    //         }}
    //       >
    //         <p>Cart</p>
    //         <FaCartArrowDown id="icons-navbar" size={20} />
    //         <p id="cartitemno">{totalQuantity}</p>
    //       </div>

    //       {isTabletOrMobile && (
    //         <div className="user-acount">
    //           <FaList
    //             onClick={() => setlist(!listvisible)}
    //             id="icons-navbar"
    //             size={20}
    //           />
    //         </div>
    //       )}
    //       {isTabletOrMobile && listvisible && (
    //         <div className="sidenavbar">
    //           <Link to={""}>
    //             <div className="Eachbutton">Catagory</div>
    //           </Link>
    //           <Link to={"/orders"}>
    //             <div className="Eachbutton">Order</div>
    //           </Link>
    //           <Link to={"/news"}>
    //             <div className="Eachbutton">News</div>
    //           </Link>
    //           <Link to={"/delivery"}>
    //             <div className="Eachbutton">Delivery</div>
    //           </Link>
    //         </div>
    //       )}
    //       {acountvisible && (
    //         <div className="carttab">
    //           <div className="Topstyle">
    //             <div className="leftstylle"></div>
    //             <div className="Rightstyle"></div>
    //           </div>

    //           {!isAuthenticated() && (
    //             <div className="tabcontent">
    //               <p>Signup Now</p>
    //               <button
    //                 onClick={() => {
    //                   setSignupcompnent(!Signupcomponents);
    //                 }}
    //               >
    //                 {" "}
    //                 Signup
    //               </button>
    //             </div>
    //           )}
    //           {isAuthenticated() && (
    //             <div className="tabcontent">
    //               <img src={user} />
    //               <p>{auth().username}</p>
    //               <button onClick={() => signOut()}>Logout</button>
    //             </div>
    //           )}
    //         </div>
    //       )}
    //       {visiblecart && (
    //         <div className="carttab">
    //           <div className="Topstyle">
    //             <div className="leftstylle"></div>
    //             <div className="Rightstyle"></div>
    //           </div>

    //           <div className="cartItemproduct">
    //             <div
    //               className="eachcartitems"
    //               style={{
    //                 backgroundColor: "rgb(234, 235, 235)",
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               <div className="itemscolomeun">
    //                 <p>Item Name</p>
    //               </div>
    //               <div className="item">quantity</div>
    //               <div className="item">Price</div>
    //               <div className="item"></div>
    //             </div>
    //             {items?.map((item, index) => (
    //               <div className="eachcartitems" key={index}>
    //                 <div className="itemscolomeun">
    //                   <p>{item.itemname}</p>
    //                 </div>
    //                 <div className="item">{item.quantity}</div>
    //                 <div className="item">{item.price}</div>
    //                 <div
    //                   className="item"
    //                   style={{ color: "red", fontWeight: "bold" }}
    //                   onClick={() => handelRemove(item.itemname)}
    //                 >
    //                   X
    //                 </div>
    //               </div>
    //             ))}
    //             <div
    //               className="eachcartitems"
    //               id="totalprice"
    //               style={{ alignSelf: "flex-end", marginRight: 17 }}
    //             >
    //               <div className="item">
    //                 <p>{totalprice} birr</p>
    //               </div>
    //             </div>
    //             <div
    //               className="eachcartitems"
    //               style={{ alignSelf: "flex-end", marginRight: 17 }}
    //             ></div>

    //             <Link to={"Order"}>
    //               <div className="OrderNow">OrderNow</div>
    //             </Link>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </>4

    <div className="  z-50 h-[60px] fixed   w-full flex p-2 bg-white">
      <div className=" flex-1   justify-between flex flex-row items-center">
        <div className="  w-1/4 flex flex-row items-center ">
          <div className=" h-[33px] w-[33px] flex items-center rounded-md justify-center shadow-sm shadow-zinc-400">
            <img src={Logo} className=" h-[26px] w-[26px] " />
          </div>

          <img
            onClick={() => navigate("")}
            src={logosvg}
            className="hover:brightness-50 transition-opacity duration-300 ease-in-out cursor-pointer h-[33px]"
          />
        </div>
        <div className="  w-3/4 h-full  flex flex-row justify-end items-center">
          <div className=" relative w-[350px] h-[40px]  items-center  flex flex-row justify-end mx-2">
            <Input
              type={"search"}
              placeholder={"Search Products here"}
              background={"bg-zinc-100"}
              ontextchange={(e) => setsearch(e.target.value)}
            />
            {search && <Searchbox search={search} width={400} />}
          </div>

          <div
            onClick={handlebuyclick}
            className=" w-[150px] cursor-pointer h-[50px]   flex flex-row items-center justify-center mx-2"
          >
            <AiOutlineUser className=" text-blue-400  h-[25px] w-[25px] bg-white" />
            <p className=" font-bold  text-sm  ml-2  ">
              {auth()?.username ? auth()?.username : "Sign In/Sign Up"}
            </p>
          </div>

          <div
            onClick={toggle}
            className="  w-[80px]  cursor-pointer items-center h-[50px]  flex flex-row justify-center mx-2"
          >
            <div className=" relative h-[25px] w-[25px]">
              <AiOutlineShoppingCart className=" text-blue-400  h-full w-full" />
              <div className=" absolute top-[-10px] right-[-10px]  items-center justify-center rounded-full h-[18px] w-[18px] flex bg-red-500">
                <p className=" text-white font-bold">{cartItems?.length}</p>
              </div>
            </div>
            <p className=" font-bold   ml-2  ">cart</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute ${
          isVisible ? " flex" : "hidden"
        } w-[300px]  h-[200px] rounded-md  flex-col items-center bg-white shadow-sm shadow-slate-500 -bottom-[200px] right-0   ease-in-out duration-900`}
      >
        <div className=" w-full h-[160px]  overscroll-y-contain overflow-y-auto">
          {cartItems?.map((item) => {
            return (
              <div className=" h-[30px] my-2  ml-3 w-3/4">
                <CartCard data={item} />
              </div>
            );
          })}
          {cartItems?.length === 0 && (
            <div className="  items-center flex justify-center my-2 mt-16  ml-3 ">
              <p className=" font-bold text-center text-red-200">
                No Items in cart
              </p>
            </div>
          )}
        </div>

        <div className=" h-[40px] my-2 w-[200px]">
          <Button
            onpress={handlebuyclick}
            backgroundColor={" bg-blue-500"}
            name={"Go To checkout"}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
