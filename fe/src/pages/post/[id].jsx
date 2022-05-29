import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./form";
import { fetcher } from "@/component/useForm";
import { meta } from "./_meta";

export default function App(props) {
  const { id } = useParams();
  const [data, setdata] = useState();

  React.useEffect(() => {
    id && fetching();
  }, [id]);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: `${meta.model}/id`,
      })
    );
  }
  if (!data) return "";
  return <Form refdata={data} />;
}
