import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UseSubcatagoryhook(id) {
  const baseUrl = useContext(Baseurl);
  


  const fetchsubcatagory = async (id) => {
    const res = await axios.get(
      `${baseUrl}/catagory/${id}/subcatagory/`,
     
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["subcatagory", id], () => fetchsubcatagory(id), {
    enabled: !!id,
  });
}