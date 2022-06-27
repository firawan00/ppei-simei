import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./form";
import { fetcher } from "@/component/gip-useForm/fetcher";
import { meta } from "./_meta";
import { Stack, Button } from "@mui/material";
import ReactToPrint from "react-to-print";

export default function App(props) {
  const { id } = useParams();
  const [data, setdata] = useState();
  const componentRef = React.useRef();

  React.useEffect(() => {
    id && fetching();
  }, [id]);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: `${meta.model}/${id}`,
      })
    );
  }
  if (!data) return "";
  return (
    <Stack>
      <Render refdata={data} ref={componentRef} />
      <ReactToPrint
        trigger={() => (
          <Button fullWidth variant="text">
            Print this document
          </Button>
        )}
        content={() => componentRef.current}
      />
    </Stack>
  );
}

class Render extends React.PureComponent {
  render() {
    return (
      <>
        <Form refdata={this.props.refdata} />
      </>
    );
  }
}
