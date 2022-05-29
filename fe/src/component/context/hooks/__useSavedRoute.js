import { useState } from "react";

export default function UseCart() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("sloc")) || null
  );

  function save(val) {
    setData(val);
  }

  return {
    data,
    save,
  };
}
