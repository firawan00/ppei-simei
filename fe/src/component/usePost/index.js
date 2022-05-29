import React, { useState } from "react";
import { fetcher } from "@/component/useForm";

export default function Apps() {
  const [data, setdata] = useState();

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: `posts`,
      })
    );
  }

  return { data };
}
