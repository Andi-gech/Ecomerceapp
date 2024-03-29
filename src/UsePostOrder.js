import { useMutation } from "react-query";
import axios from "axios";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UsePostOrderhook() {
  const baseUrl = useContext(Baseurl);

  const PostOrder = async (data) => {
    return axios.post(`${baseUrl}/order/`, data);
  };
  return useMutation(PostOrder);
}
