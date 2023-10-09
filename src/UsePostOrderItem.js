import { useMutation } from "react-query";
import axios from "axios";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UsePostOrderItemhook(orderUniqueId) {
  const baseUrl = useContext(Baseurl);

  const PostOrder = async (data) => {
    console.log(data, "data");
    console.log(orderUniqueId, "orderUniqueId");
    return axios.post(`${baseUrl}/order/${orderUniqueId}/orderitems/`, data);
  };
  return useMutation(PostOrder);
}
