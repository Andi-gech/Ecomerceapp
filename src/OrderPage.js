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

function OrderPAge() {
  const isAuthenticated = useIsAuthenticated();
  const [signup, setsignup] = useState(false);
  const [userdata, setuserdata] = useState(false);
  const [orderconfrim, setorderconfirm] = useState(false);
  const [orderconfrimno, setorderconfirmno] = useState();
  const [copy, setcopied] = useState(false);
  const [location, setlocation] = useState("");

  useEffect(() => {
    getme();
    setproduct();
  }, []);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalprice, setTotalprice] = useState(0);
  const [visiblecart, setvisiblecart] = useState(false);
  const [items, setitems] = useState([]);

  const handelRemove = (name) => {
    let myCart = JSON.parse(localStorage.getItem("myCart"));
    myCart = myCart.filter((item) => item.itemname !== name);
    localStorage.setItem("myCart", JSON.stringify(myCart));
    window.dispatchEvent(new Event("storage"));
  };
  window.addEventListener("storage", function (event) {
    setproduct();
  });
  const baseUrl = useContext(Baseurl);

  const setproduct = () => {
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

  const getme = () => {
    const existingData = JSON.parse(localStorage.getItem("myIdentity")) || [];

    if (isAuthenticated()) {
      setsignup(false);

      setuserdata(existingData);
    } else {
      setsignup(true);
    }
  };
  window.addEventListener("identityadded", function (event) {
    getme();
  });
  window.addEventListener("storage", function (event) {
    setproduct();
  });
  const { data, isError, error, isLoading, refech } = useCustomerhook();
  const authHeader = useAuthHeader();

  const ordernow = () => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    axios
      .post(
        `${baseUrl}/order/`,
        {
          location: location,
        },
        {
          headers: { Authorization: authHeader() },
        }
      )
      .then(function (response) {
        setorderconfirm(true);
        setorderconfirmno(response.data.orderuniqueId);

        items.forEach((item) => {
          const data = {
            product: item.id,
            quantity: item.quantity,
          };

          const orderUniqueId = response.data.orderuniqueId;

          axios
            .post(`${baseUrl}/order/${orderUniqueId}/orderitems/`, data)
            .then((response) => {})
            .catch((error) => {
              console.error(error);
            });
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    localStorage.removeItem("myCart");
    window.dispatchEvent(new Event("storage"));
  };

  if (isAuthenticated) {
    return (
      <>
        {signup && <Signupcomponent />}{" "}
        <div
          className="OrderPage"
          style={{ filter: signup ? "blur(2px)" : "none" }}
        >
          {orderconfrim && (
            <div className="orderboxes">
              <div className="Orderconfirmbox">
                <p>Your Cofirmation No </p>
                <p
                  id="orderconfno"
                  style={{ backgroundColor: "rgb(240, 239, 239)" }}
                  onClick={() => {
                    if (
                      "clipboard" in navigator &&
                      "writeText" in navigator.clipboard
                    ) {
                      navigator.clipboard.writeText(orderconfrimno);
                      setcopied(true);
                    }
                  }}
                >
                  {orderconfrimno}
                </p>
                {copy && (
                  <p style={{ marginTop: -10, color: "gray" }}>Copied</p>
                )}
                {!copy && (
                  <p style={{ marginTop: -10, color: "gray" }}>click to copy</p>
                )}

                <button
                  onClick={() => {
                    setorderconfirm(!orderconfrim);
                    setcopied(false);
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          )}{" "}
          <div className="leftsideOrderinfo">
            <div className="inputboxs">
              <p id="userInfo">Userinfo</p>
              <div className="eachinfo">
                {" "}
                <p>Name</p>{" "}
                <input
                  style={{
                    backgroundColor: "rgb(218, 212, 212)",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  disabled
                  placeholder={data?.name}
                />
              </div>
              <div className="eachinfo">
                {" "}
                <p>P.no</p>{" "}
                <input
                  style={{
                    backgroundColor: "rgb(218, 212, 212)",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  disabled
                  placeholder={data?.Phone_no}
                />
              </div>
            </div>
            <div className="inputboxs">
              <p id="userInfo">
                Delivery
                <FaMotorcycle color="gray" />
              </p>
              <div className="eachinfo">
                {" "}
                <p>Location</p>{" "}
                <input
                  style={{
                    backgroundColor: "rgb(218, 212, 212)",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  placeholder={userdata.name}
                  onChange={(e) => setlocation(e.target.value)}
                />
              </div>
            </div>
            <div className="inputboxs" style={{ alignItems: "flex-start" }}>
              <p id="userInfo">Payment method</p>
              <div
                className="eachbankinfo"
                style={{ border: "1px solid black" }}
              >
                <img src={productpic} width={20} height={20} />{" "}
                <p>Abysiniabank</p>{" "}
              </div>
              <p style={{ backgroundColor: "gray", color: "white" }}>
                AndualemGetachew-100028384758
              </p>
              <div
                className="eachbankinfo"
                style={{ border: "1px solid black" }}
              >
                <img src={cbe} width={20} height={20} />{" "}
                <p>Commercialbank of Ethiopia</p>{" "}
              </div>
              <p style={{ backgroundColor: "gray", color: "white" }}>
                AndualemGetachew-100028384758
              </p>
            </div>
            <div className="inputboxs">
              <p id="userInfo">Send screen shot</p>
              <div className="eachinfo">
                {" "}
                <input type={"file"} />
              </div>
              <ButtonsTransparent
                onclick={ordernow}
                width={100}
                name={"Submit"}
              />
            </div>
          </div>
          <div className="RightSideOrderinfo">
            {" "}
            <div
              className="cartItemproduct"
              style={{ maxHeight: 750, boxShadow: "none" }}
            >
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
              {items?.map((item, index) => (
                <div key={index} className="eachcartitems">
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
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>dd</div>;
  }
}

export default OrderPAge;
