import Logo from "./assets/logor.png";
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
  FaXing,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Searchbox from "./SearchBox";
import { Link } from "react-router-dom";
import ButtonsTransparent from "./Buttons";
import { useAuthUser, useIsAuthenticated, useSignIn, useSignOut } from "react-auth-kit";
import Signupcomponent from "./Signupbox";
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

  useEffect(() => {
    calculateTotalQuantity();
  }, []);

  window.addEventListener("storage", function (event) {
    calculateTotalQuantity();
  });
  const signOut = useSignOut();
  

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
  const auth = useAuthUser()
  

  return (
    <>{!isAuthenticated()&&Signupcomponents && <Signupcomponent />}
    <div className="Navbar">
      
      
      {!activesearch && (
        <div className="Logo" style={{ flex: !visiblep ? 1 / 3 : 1 }}>
          <Link to={""}>
            {" "}
            <img src={Logo} alt="Logo" width={100} height={50} />
          </Link>
          {isDesktopOrLaptop && (
            <>
              <Link to={""}>
                <p id="CatagoryText">Catagory </p>
              </Link>

              {visiblep && (
                <>
                  {" "}
                  <Link to={"/orders"}>
                    <p>Orders</p>
                  </Link>
                  <Link to={"/news"}>
                    <p>Whats New</p>
                  </Link>
                  <Link to={"/delivery"}>
                    <p>Delivery</p>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      )}
      {isTabletOrMobile && !visiblep && (
        <Searchbox search={search} width={310} ismobile={true} />
      )}
      {isTabletOrMobile && (
        <div className="SearchIcon">
          <p onClick={() => setactivesearch(!activesearch)}>
            <FaSearch />
          </p>
          {activesearch && (
            <input
              id="mobilesearch"
              placeholder="Search here"
              onFocus={handleFocus}
              onBlur={handlBlur}
              onChange={(e) => setsearch(e.target.value)}
            />
          )}
        </div>
      )}
      <div className="Userinfo">
        {isDesktopOrLaptop && (
          <div className="SearchBar">
            <input
              placeholder="Search Product"
              onFocus={handleFocus}
              onBlur={handlBlur}
              onChange={(e) => setsearch(e.target.value)}
            />
            {!visiblep && (
              <Searchbox ismobile={false} search={search} width={610} />
            )}
          </div>
        )}
        {isDesktopOrLaptop && (
          <div className="user-acount" onClick={()=>setacountvisible(!acountvisible)}>
            <p>Account</p>
            <FaUser id="icons-navbar" size={20} />
          </div>
        )}

        <div
          className="cart"
          onClick={() => {
            setvisiblecart(!visiblecart);
          }}
        >
          <p>Cart</p>
          <FaCartArrowDown id="icons-navbar" size={20} />
          <p id="cartitemno">{totalQuantity}</p>
        </div>

        {isTabletOrMobile && (
          <div className="user-acount">
            <FaList
              onClick={() => setlist(!listvisible)}
              id="icons-navbar"
              size={20}
            />
          </div>
        )}
        {isTabletOrMobile && listvisible && (
          <div className="sidenavbar">
            <Link to={""}>
              <div className="Eachbutton">Catagory</div>
            </Link>
            <Link to={"/orders"}>
              <div className="Eachbutton">Order</div>
            </Link>
            <Link to={"/news"}>
              <div className="Eachbutton">News</div>
            </Link>
            <Link to={"/delivery"}>
              <div className="Eachbutton">Delivery</div>
            </Link>
          </div>
        )}
        {acountvisible&&<div className="carttab">
            <div className="Topstyle">
              <div className="leftstylle"></div>
              <div className="Rightstyle"></div>
            </div>
            
            
{!isAuthenticated() &&<div className="tabcontent"><p>Signup Now</p><button onClick={()=>{setSignupcompnent(!Signupcomponents)}}> Signup</button></div>}
{isAuthenticated() &&<div className="tabcontent"><img src={user}/><p>{auth().username}</p><button onClick={() => signOut()}>Logout</button></div>}
            </div>}
        {visiblecart && (
          <div className="carttab">
            <div className="Topstyle">
              <div className="leftstylle"></div>
              <div className="Rightstyle"></div>
            </div>

            <div className="cartItemproduct">
              <div
                className="eachcartitems"
                style={{
                  backgroundColor: "rgb(234, 235, 235)",
                  fontWeight: "bold",
                }}
              >
                <div className="itemscolomeun">
                  <p>Item Name</p>
                </div>
                <div className="item">quantity</div>
                <div className="item">Price</div>
                <div className="item"></div>
              </div>
              {items?.map((item,index) => (
                <div className="eachcartitems" key={index}>
                  <div className="itemscolomeun">
                    <p>{item.itemname}</p>
                  </div>
                  <div className="item">{item.quantity}</div>
                  <div className="item">{item.price}</div>
                  <div
                    className="item"
                    style={{ color: "red", fontWeight: "bold" }}
                    onClick={() => handelRemove(item.itemname)}
                  >
                    X
                  </div>
                </div>
              ))}
              <div
                className="eachcartitems"
                id="totalprice"
                style={{ alignSelf: "flex-end", marginRight: 17 }}
              >
                <div className="item">
                  <p>{totalprice} birr</p>
                </div>
              </div>
              <div
                className="eachcartitems"
                style={{ alignSelf: "flex-end", marginRight: 17 }}
              ></div>

              <Link to={"Order"}>
                <div className="OrderNow">OrderNow</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div></>
  );
}

export default Navbar;
