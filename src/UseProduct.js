import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function Useproducthook(id) {
  const baseUrl = useContext(Baseurl);
  


  const fetchproduct = async (id) => {
    const res = await axios.get(
      `${baseUrl}/catagory/${id}/product/`,
     
    );
  
    return res.data;
  };
  return useQuery(["products", id], () => fetchproduct(id), {
    enabled: !!id,
  });
}