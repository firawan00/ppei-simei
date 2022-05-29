import React, { useContext } from "react";
import InputEmail from "@/component/useForm/inputEmail";
import InputPass from "@/component/useForm/inputPassword";
import InputText from "@/component/useForm/inputText";
import InputNumber from "@/component/useForm/inputNumber";
// import InputCurrency from "@/component/useForm/inputCurrency";
import InputHidden from "@/component/useForm/inputHidden";
import InputSelect from "@/component/useForm/inputSelect";
import InputRole from "@/component/useForm/inputRole";
import InputProduct from "@/component/useForm/inputProduct";
import InputCustomer from "@/component/useForm/inputCustomer";
import TextArea from "./textArea";
import ArrayObject from "./arrayObject";
import URL from "./url";

import { Loader } from "@/component/ui/loaderFs";

import axios from "axios";
import BtnSubmit from "@/component/useForm/btnSubmit";

import Context from "@/component/context";
import { useNavigate } from "react-router-dom";

export default function useForm(
  model = "",
  defaultValue = {},
  routecallback = null
) {
  const router = useNavigate();
  const { setisLoading, snackbar } = React.useContext(Context);
  const [payload, setpayload] = React.useState(defaultValue);

  function handleInput(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  function setval(v) {
    setpayload({ ...payload, ...v });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    await fetcher({
      url: `${model}`,
      method: "post",
      data: payload,
    });
    setisLoading(false);
    snackbar.setSuccess(`new ${model} added`);
    router(routecallback ? `/${routecallback}` : -1);
  }

  return {
    payload,
    setpayload,
    handleInput,
    setval,
    handleSubmit,
  };
}

export const Input = {
  Email: InputEmail,
  Pass: InputPass,
  Submit: BtnSubmit,
  Text: InputText,
  Number: InputNumber,
  Hidden: InputHidden,
  Select: InputSelect,
  Role: InputRole,
  Product: InputProduct,
  Customer: InputCustomer,
  Loader,
  TextArea,
  ArrayObject,
  URL,
};

export const fetcher = async (param) => {
  try {
    const res = await axios({
      ...param,
      url: `${import.meta.env.VITE_BEURL}/api/${param.url}`,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetcherMultipart = async (param) => {
  const config = {
    ...param,
    url: `${import.meta.env.VITE_BEURL}/api/${param.url}`,
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data`,
    },
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    return error;
  }
};
