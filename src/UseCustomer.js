import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function useCustomerhook() {
  const authHeader = useAuthHeader();
  axios.defaults.headers.common["Authorization"] = authHeader();

  const baseUrl = useContext(Baseurl);

  const fetchcustomer = async () => {
    const res = await axios.get(`${baseUrl}/customer/me`);

    return res.data;
  };
  return useQuery("customer", fetchcustomer);
}
