import React from "react";
import { useState } from "react";
import Context from "@context";
import axios from "axios";

export default function App(props) {
  const { setisLoading } = React.useContext(Context);
  const token = localStorage.getItem("AuthToken");
  let header = {
    authorization: `Bearer ${token}`,
    Accept: "application/json",
  };

  async function fetcher(param) {
    setisLoading(true);
    try {
      const res = await axios({
        ...param,
        url: `${import.meta.env.VITE_BEURL}/api/${param.url}`,
        headers: header,
      });
      setisLoading(false);
      return res.data;
    } catch (error) {
      setisLoading(false);
      // return error;
      return { ...error.response.data };
    }
  }

  return {
    fetcher,
  };
}
