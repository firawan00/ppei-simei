import { useState } from "react";

export default function useCart() {
  const [data, setsnack] = useState({
    isOpen: false,
    isError: false,
    severity: "",
    msg: "",
  });

  function setError(msg) {
    setsnack({
      isOpen: true,
      severity: "error",
      msg: msg,
    });
  }

  function setInfo(msg) {
    setsnack({
      isOpen: true,
      severity: "info",
      msg: msg,
    });
  }

  function setWarning(msg) {
    setsnack({
      isOpen: true,
      severity: "warning",
      msg: msg,
    });
  }

  function setSuccess(msg) {
    setsnack({
      isOpen: true,
      severity: "success",
      msg: msg,
    });
  }

  function setClose() {
    setsnack({
      ...data,
      isOpen: false,
    });
  }

  return { data, setError, setInfo, setWarning, setSuccess, setClose };
}
