import React, { useState } from "react";
import { fetcher } from "@/component/useForm";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

export default function useApp() {
  let navigate = useNavigate();
  const [user, setData] = useState(
    JSON.parse(localStorage.getItem("AuthUser")) || {}
  );

  async function login(paylaod) {
    let res = await fetcher({
      url: `auth/signin`,
      method: "post",
      data: paylaod,
    });

    if (res.id) {
      await setData(res);
      await localStorage.setItem("AuthUser", JSON.stringify(res));
      await localStorage.setItem("AuthToken", res.token);
      return { err: false };
    } else return { err: true, msg: "Invalid Login" };
  }

  function logout() {
    localStorage.clear();
    setData({});
    navigate("/");
    navigate(0);
  }

  return {
    user,
    login,
    logout,
  };
}
