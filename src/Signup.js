import axios from "axios";
import { useContext, useState } from "react";
import { useAuthHeader, useSignIn } from "react-auth-kit";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Baseurl from "./BaseUrl";
function Signup() {
  const [name, setname] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [tel, settele] = useState("");
  const [nameError, setnameError] = useState();
  const [PasswordError, setPasswordError] = useState();
  const [emailError, setemailError] = useState("");
  const [telError, setteleError] = useState();
  const [created, setcreated] = useState(false);
  const [signup, setsignup] = useState(false);
  const signin = useSignIn();
  const baseUrl = useContext(Baseurl);
  let navigate = useNavigate();
  const authHeader = useAuthHeader();

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
        navigate(-1);
      })
      .catch((error) => console.log(error.response.data.detail));
  };
  const createaccount = () => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    axios
      .post(
        `${baseUrl}/auth/users/`,
        {
          email: email,
          username: name,
          password: Password,
        },
        {
          headers: { Authorization: authHeader() },
        }
      )
      .then(function (response) {
        axios
          .post(`${baseUrl}/customer/`, {
            Phone_no: tel,
            user: response.data.id,
          })
          .then((response) => {
            console.log("account created");
            setcreated(true);
          })
          .catch((error) => {
            console.error(error);
          });
      })

      .catch(function (error) {
        console.log(error.response.data.email[0]);
        setemailError(error.response.data.email[0]);
      });

    localStorage.removeItem("myCart");
    window.dispatchEvent(new Event("storage"));
  };
  const HandleAddIdentity = (event) => {
    const existingData = { name: name, phoneNo: Password };
    window.localStorage.setItem("myIdentity", JSON.stringify(existingData));
    fetchData({
      username: name,
      password: Password,
    });
    window.dispatchEvent(new Event("identityadded"));

    event.preventDefault();
  };

  if (signup) {
    return (
      <div className="Signupcontent">
        <div className="NotSignupoption">
          {" "}
          <p id="CreateAccounttitle">Signup </p>
          {created && <p style={{ color: "green" }}>Account Created</p>}
          <div className="Inlinetexts">
            <label>fullname</label>
            <input
              id="inputfullname"
              onChange={(e) => setname(e.target.value)}
              type={"text"}
              placeholder={"user Name"}
            />
          </div>
          <div className="Inlinetexts">
            {" "}
            <label>email</label>
            <input
              id="inputfullname"
              onChange={(e) => setemail(e.target.value)}
              type={"email"}
              placeholder={"password"}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div className="Inlinetexts">
            <label>password</label>
            <input
              id="inputfullname"
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder={"password"}
            />
          </div>
          <div className="Inlinetexts">
            {" "}
            <label>Phone_no</label>
            <input
              id="inputfullname"
              onChange={(e) => settele(e.target.value)}
              type={"tel"}
              placeholder={"password"}
            />
          </div>
          <p id="CreateAccouninfo">
            <FaInfoCircle color="gray" />
            Please Enter Your Real No B/c that is the only way we can Confim
            your payment
          </p>
          <button onClick={createaccount}>signup</button>
          <p onClick={() => setsignup(false)}>already have account?</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Signupcontent">
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
            onChange={(e) => setPassword(e.target.value)}
            type={"tel"}
            placeholder={"password"}
          />
          <p id="CreateAccouninfo">
            <FaInfoCircle color="gray" />
            Please Enter Your Real No B/c that is the only way we can Confim
            your payment
          </p>
          <button onClick={HandleAddIdentity}>Login</button>
          <p onClick={() => setsignup(true)}>Dont have account?</p>
        </div>
      </div>
    );
  }
}

export default Signup;
