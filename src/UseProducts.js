import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UseallProductshook(id) {
  const baseUrl = useContext(Baseurl);



  const fetchproducts = async (id) => {
    const res = await axios.get(
      `${baseUrl}/Allproduct/${id}`,
     
    );
  
    return res.data;
  };
  return useQuery(["allproducts", id], () => fetchproducts(id), {
    enabled: !!id,
  });
}
