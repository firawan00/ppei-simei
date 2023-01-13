import { useState } from "react";

export default function useCart() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cart")) || null
  );

  function set(val) {
    val
      ? localStorage.setItem("cart", JSON.stringify(val))
      : localStorage.removeItem("cart");
    setData(val);
  }

  return {
    data,
    set,
  };
}
