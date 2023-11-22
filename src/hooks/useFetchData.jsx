import axios from "axios";
import { useQuery } from "react-query";
import * as api from "../api/index";

const fetchData = async (apiFunction) => {
  const response = await apiFunction();
  return response.data;
};

const useFetchData = (queryKey, apiFunction) => {
  return useQuery(queryKey, () => fetchData(apiFunction));
};

export default useFetchData;
