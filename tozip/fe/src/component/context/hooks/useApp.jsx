import { useState } from "react";

export default function useApp() {
  const [data, setData] = useState({
    isLoading: false,
    theme: localStorage.getItem("preferred-theme") || "light",
    savedroute: localStorage.getItem("savedroute") || "",
    isLarge: "",
  });

  function set(val) {
    setData({ ...data, ...val });
  }

  function setisLoading(value) {
    setData({ ...data, isLoading: value });
  }

  return {
    data,
    set,
    setisLoading,
  };
}
