import axios from "axios";
import { useNavigate } from "react-router-dom";

export { useNavigate };

export const fetcher = async (param) => {
  const token = localStorage.getItem("AuthToken");

  try {
    const res = await axios({
      ...param,
      url: `${import.meta.env.VITE_BEURL}/api/${param.url}`,
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data`,
        authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/signin";
    } else return error;
  }
};

export const fetcherMultipart = async (param) => {
  const token = localStorage.getItem("AuthToken");

  const config = {
    ...param,
    url: `${import.meta.env.VITE_BEURL}/api/${param.url}`,
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data`,
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/signin";
    } else return error;
  }
};
