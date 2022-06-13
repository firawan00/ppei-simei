import React from "react";
import Context from "@context";

import Form, { Input } from "@/component/gip-useForm";
import * as yup from "yup";
export default function App(props) {
  const { auth } = React.useContext(Context);
  const config = {
    validationSchema: yup.object({
      name: yup.string("Enter your email").required("Name is required"),
    }),
    initialValues: {
      id: auth.user.id,
      name: "",
    },
    fetch: {
      method: "post",
      url: "auth/register",
    },
    field: [
      {
        mode: "input",
        name: "id",
        type: Input.Hidden,
        default: auth.user.id,
      },
      {
        mode: "text",
        content: "Welcome Abord",
        var: "h2",
      },
      {
        mode: "text",
        content: "Enter your name",
        var: "overline",
      },

      {
        mode: "input",
        name: "name",
        type: Input.Text,
        default: "",
        required: true,
        min: 5,
      },
      {
        mode: "text",
        content: "Select your preferences topic",
        var: "overline",
      },
      {
        mode: "input",
        name: "preference",
        type: Input.SelectTag,
        default: "",
        attr: { asString: true },
        isCustom: true,
      },
    ],
  };

  return <Form config={config} />;
}
