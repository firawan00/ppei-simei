import React, { useState } from "react";
import Datatable from "@/component/datatables";
import { fetcher } from "@/component/useForm";
import { meta } from "./_meta";

export default function AdminPage(params) {
  const [data, setfirst] = useState();

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setfirst(
      await fetcher({
        method: "get",
        url: `${meta.model}`,
      })
    );
  }
  return (
    <Datatable
      data={data}
      col={meta.col}
      model={meta.model}
      isRefetch={fetching}
    />
  );
}
