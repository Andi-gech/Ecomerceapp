import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function UseFindProducthook(searchparam) {
  const baseUrl = useContext(Baseurl);
  


  const fetchproducts = async (searchparam) => {
    const res = await axios.get(
      `${baseUrl}/Allproduct/?search=${searchparam}`,
     
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["psearchp", searchparam], () => fetchproducts(searchparam), {
    enabled: !!searchparam,
  });
}