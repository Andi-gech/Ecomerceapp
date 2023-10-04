import axios from "axios";
import { useContext, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { FaInfoCircle } from "react-icons/fa";
import Baseurl from "./BaseUrl";
import Input from "./Input";
import Button from "./Button";

function Signupcomponent() {
  const [name, setname] = useState("");
  const [tele, settele] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState();

  const [password, setpassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [isloginpage, setisloginpage] = useState(true);
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
      .catch((error) => seterror(error.response.data.detail));
  };
  const signup = async (jasons) => {
    await axios
      .post(`${baseUrl}/auth/users/`, jasons)
      .then((res) => {
        setisloginpage(true);
      })
      .catch((error) => {
        seterror(error.response.data.password);
        console.log(error.response.data.password);
      });
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
  const submitLogin = () => {
    fetchData({ username: name, password: password });
    console.log("submitted");
  };
  const submitSignup = () => {
    signup({
      username: name,
      password: password,
      email: email,
      first_name: Firstname,
      last_name: Lastname,
    });
  };
  if (isloginpage) {
    return (
      <div className=" fixed z-30 flex items-center justify-center backdrop-blur-sm top-0 left-0 w-full h-full bg-blue-400 bg-opacity-30">
        <div className=" h-[300px] rounded-md w-[400px] flex items-center justify-center bg-white">
          <div className=" w-11/12 h-full  items-center flex-col flex">
            <p className=" font-bold  text-xl  items-center flex justify-center">
              Login To Account
            </p>

            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Username</p>
              <div className=" w-[250px] h-full">
                <Input
                  ontextchange={(e) => setname(e.target.value)}
                  background={"bg-zinc-100"}
                />
              </div>
            </div>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Password</p>
              <div className=" w-[250px] h-full">
                <Input
                  background={"bg-zinc-100"}
                  ontextchange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            {error && (
              <p className=" text-sm font-bold  text-red-500"> {error} </p>
            )}
            <p className=" w-full  flex flex-row">
              <FaInfoCircle color="gray" size={25} />
              <p className=" text-sm text-gray-700 font-bold">
                Please Enter Your Real No B/c that is the only way we can Confim
                your payment
              </p>
            </p>
            <div className=" w-[200px] h-[50px] mt-2">
              <Button
                onpress={submitLogin}
                name={"Create Account"}
                backgroundColor={"bg-black"}
              />
            </div>

            <p
              className=" text-sm text-blue-500 mt-3 font-bold cursor-pointer"
              onClick={() => setisloginpage(false)}
            >
              already have am account ?
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" absolute z-30 flex items-center justify-center backdrop-blur-sm top-0 left-0 w-full h-full bg-blue-400 bg-opacity-30">
        <div className=" h-[450px] rounded-md w-[400px] flex items-center justify-center bg-white">
          <div className=" w-11/12 h-full  items-center flex-col flex">
            <p className=" font-bold  text-xl  items-center flex justify-center">
              Create Account{" "}
            </p>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Firstname</p>
              <div className=" w-[250px] h-full">
                <Input
                  ontextchange={(e) => setFirstname(e.target.value)}
                  background={"bg-zinc-100"}
                />
              </div>
            </div>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Lastname</p>
              <div className=" w-[250px] h-full">
                <Input
                  ontextchange={(e) => setLastname(e.target.value)}
                  background={"bg-zinc-100"}
                />
              </div>
            </div>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Email</p>
              <div className=" w-[250px] h-full">
                <Input
                  ontextchange={(e) => setemail(e.target.value)}
                  background={"bg-zinc-100"}
                />
              </div>
            </div>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Username</p>
              <div className=" w-[250px] h-full">
                <Input
                  ontextchange={(e) => setname(e.target.value)}
                  background={"bg-zinc-100"}
                />
              </div>
            </div>
            <div className=" flex my-2 flex-row items-center justify-center h-[40px] ">
              <p className=" font-bold mx-2 w-[100px]">Password</p>
              <div className=" w-[250px] h-full">
                <Input
                  background={"bg-zinc-100"}
                  ontextchange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            {error && (
              <p className=" text-sm font-bold  text-red-500"> {error} </p>
            )}

            <p className=" w-full  flex flex-row">
              <FaInfoCircle color="gray" size={25} />
              <p className=" text-sm text-gray-700 font-bold">
                Please Enter Your Real No B/c that is the only way we can Confim
                your payment
              </p>
            </p>
            <div className=" w-[200px] h-[50px] mt-2">
              <Button
                onpress={submitSignup}
                name={"Create Account"}
                backgroundColor={"bg-black"}
              />
            </div>

            <p
              className=" text-sm text-blue-500 mt-3 font-bold cursor-pointer"
              onClick={() => setisloginpage(true)}
            >
              already have am account ?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signupcomponent;
