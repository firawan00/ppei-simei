import React, { useState, useContext } from "react";
import Datatable from "@/component/datatables";
import { fetcher } from "@/component/gip-useForm/fetcher";
import { meta } from "./_meta";
import Context from "@context";

export default function AdminPage(params) {
  const [data, setfirst] = useState();
  const { auth } = useContext(Context);

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
      meta={meta}
      isRefetch={fetching}
      disableNew={auth.user.role.includes("fasilitator")}
    />
  );
}
