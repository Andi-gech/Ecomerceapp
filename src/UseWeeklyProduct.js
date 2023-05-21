
import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Baseurl from "./BaseUrl";
import { useContext } from "react";

export default function useWeeklyhook() {
    const baseUrl = useContext(Baseurl);
    

  const fetchWeekly= async () => {
    const res = await axios.get(
      `${baseUrl}/topsell/`,
     
    );

    return res.data;
  };
  return useQuery("weekly",fetchWeekly );
}