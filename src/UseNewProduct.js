
import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function useNewProducthook() {
  const baseUrl = useContext(Baseurl);
  

  const fetchcatagory= async () => {
    const res = await axios.get(
      `${baseUrl}/newproducts/`,
     
    );

    return res.data;
  };
  return useQuery("newproduct",fetchcatagory );
}