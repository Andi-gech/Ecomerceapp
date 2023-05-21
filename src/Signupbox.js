import axios from "axios";
import { useContext, useState } from "react";
import { useSignIn } from "react-auth-kit";
import {  FaInfoCircle } from "react-icons/fa";
import Baseurl from "./BaseUrl";
function Signupcomponent() {
  const [name, setname] = useState("");
  const [tele, settele] = useState("");
  const signin = useSignIn();
  const baseUrl = useContext(Baseurl);

  const fetchData = async (jasons) => {
    await axios
      .post(`${baseUrl}/auth/jwt/create/`, jasons)
      .then((res) => {
        signin({
          token: res.data.access,
          expiresIn: 3600,
          tokenType: "JWT",
          authState: { username: name },
        });
      })
      .catch((error) => console.log(error.response.data.detail));
  };

  const HandleAddIdentity = (event) => {
    const existingData = { name: name, phoneNo: tele };
    window.localStorage.setItem("myIdentity", JSON.stringify(existingData));
    fetchData({
      username: name,
      password: tele,
    });
    window.dispatchEvent(new Event("identityadded"));

    event.preventDefault();
  };

  return (
    <div className="Signup-to-continue">
      <div className="NotSignupoption">
        {" "}
        <p id="CreateAccounttitle">Login </p>
        <input
          id="inputfullname"
          onChange={(e) => setname(e.target.value)}
          type={"text"}
          placeholder={"user Name"}
        />
        <input
          id="inputfullname"
          onChange={(e) => settele(e.target.value)}
          type={"password"}
          placeholder={"password"}
        />
        <p id="CreateAccouninfo">
          <FaInfoCircle color="gray" />
          Please Enter Your Real No B/c that is the only way we can Confim your
          payment
        </p>
        <button onClick={HandleAddIdentity}>Login</button>
      </div>
    </div>
  );
}

export default Signupcomponent;
