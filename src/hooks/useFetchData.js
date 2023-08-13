import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/apiUrls";
const useFetchData = (endpoint) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL + endpoint);
      const json = await response.json();

      setInfo(json);
    } catch (error) {
      console.error("Error fetching wedding data:", error);
    }
  };

  return info;
};

export default useFetchData;
