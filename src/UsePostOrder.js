
import { useQuery } from "react-query";
import axios from "axios";
import Baseurl from "./BaseUrl";
import { useContext } from "react";


export default function UsePostOrderhook(data) {
  const baseUrl = useContext(Baseurl);
  
  const PostOrder= async (data) => {
    const res = await axios.post(
      `${baseUrl}/order/`,data
     
    );

    return res.data;
  };
  return useQuery("OrderPost",PostOrder(data), {
    enabled: !!data,
  });
}