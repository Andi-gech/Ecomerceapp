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

function Catagoryhomepage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isAuthenticated = useIsAuthenticated();

  const [selectedOption, setSelectedOption] = useState(null);
  const [product, setproduct] = useState([]);
  const [max, setmax] = useState("");
  const [min, setmin] = useState("");
  const [Subcatagory, setSubcatagory] = useState(null);

  const baseUrl = useContext(Baseurl);
  const { data: NewProduct } = useNewProducthook();

  useEffect(() => {
    setproduct(NewProduct);
  }, [NewProduct]);

  const { data } = useCatagoryhook();
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

  if (data && NewProduct) {
    return (
      <div className="CatagoryHomePage">
        <div
          className="Catagorybanner"
          style={{ flexWrap: !isTabletOrMobile ? "nowrap" : "wrap" }}
        >
          {!isTabletOrMobile && (
            <>
              <div className="catagorytext">
                <p id="catagorytexts">Shop to our store </p>
                <p id="catagorysmalltext">
                  To Get <span style={{ color: "rgb(247, 63, 7)" }}>90% </span>
                  Off
                </p>

                {!isAuthenticated() && (
                  <Link to={"/signup"}>
                    {" "}
                    <button id="Signupbutton">Signup</button>
                  </Link>
                )}
              </div>
              <div className="catagoryimage">
                <img src={ong} alt="catagory img" />
              </div>
            </>
          )}
          {isTabletOrMobile && (
            <>
              <div
                style={{ backgroundImage: `url(${ongw})` }}
                className="Catagorymobiletext"
              >
                <p style={{ margin: 0 }}>Shop to our store </p>
                <p style={{ margin: 0 }}>
                  To Get <span style={{ color: "rgb(247, 63, 7)" }}>90% </span>
                  Off
                </p>
              </div>
              <div className="catagoryButton">
                {" "}
                <Link to={"/signup"}>
                  <button>Sign-up</button>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="Listtitle">
          <div>
            <p>Catagory</p>{" "}
          </div>
        </div>

        <div className="Catagolies">
          <div className="Catagorylist">
            {data.map((catagory, index) => (
              <Catagorycard
                key={index}
                id={catagory.id}
                image={catagory.images}
                name={catagory.name}
              />
            ))}
          </div>
        </div>
        <div className="Listtitle">
          <p>New Product</p>{" "}
          <Select
            onChange={setSelectedOption}
            required
            id="Select"
            isClearable={false}
            options={dataoption}
            placeholder="Catagory"
          />{" "}
          {selectedOption && (
            <Select
              onChange={setSubcatagory}
              required
              id="Select"
              isClearable={false}
              options={Secdataoption}
              classNamePrefix="custom-select-prefix"
              placeholder="Subcatagory"
            />
          )}{" "}
          <div className="Selection">
            minPrice
            <input
              type={"number"}
              onChange={(event) => setmin(event.target.value)}
            />{" "}
            maxPrice
            <input
              type={"number"}
              onChange={(event) => setmax(event.target.value)}
            />
            <button onClick={changedata}>Filter</button>
          </div>
        </div>
        <div className="Product-cards">
          <div className="inline-cards">
            {product?.map((product, index) => (
              <Productcard
                key={index}
                discount={product.discount}
                name={product.name}
                Description={product.description}
                rate={product.rating}
                price={product.price}
                id={product.id}
                image={product.images}
              />
            ))}
            {product?.length === 0 && <p>No Product With is Citeria</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Catagoryhomepage;
