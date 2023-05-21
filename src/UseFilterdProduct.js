import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UseOrders() {
  const baseUrl = useContext(Baseurl);
  const authHeader = useAuthHeader();
  axios.defaults.headers.common["Authorization"] = authHeader();
  


  const FetchfilterdProduct = async () => {
    const res = await axios.get(
      `${baseUrl}/order/`
    );

    return res.data;
  };
  return useQuery("Orders",FetchfilterdProduct );
}