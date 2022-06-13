import React, { Fragment } from "react";
import Context from "@context";

import { Stack, Button, Chip, Skeleton, Typography, Card } from "@mui/material";
import useForm, { Input, fetcher, fetcherMultipart } from "@/component/useForm";

import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";

import Post from "./_template";

export default function App({ refdata }) {
  const [selectedtemplate, setselectedtemplate] = React.useState();
  const [fornmresult, fornmsetresult] = React.useState({});

  const template = [
    {
      name: "news",
      element: <Post.Article result={fornmsetresult} />,
    },
    { name: "galery", element: "" },
    { name: "receipt", element: <Post.Receipt result={fornmsetresult} /> },
    { name: "ig-post", element: <Post.IGPost /> },
    { name: "fb-Post", element: <Post.FBEmbed /> },
  ];

  function isValid(pl) {
    if (!pl || !pl.type || !pl.title) return false;
    return true;
  }

  React.useEffect(() => {
    const payload = {
      type: selectedtemplate && selectedtemplate.name,
      ...fornmresult,
    };

    if (isValid(payload)) {
      fetcherMultipart({
        method: "post",
        url: `posts`,
        data: payload,
      });
    }
  }, [fornmresult]);

  function handleSelectTemplate(temp) {
    setselectedtemplate(temp);
  }

  return (
    <Stack width="100%" className="center">
      <Stack maxWidth={800} width="100%" spacing={2}>
        <BackIcon
          title={refdata ? `${meta.model} Edit` : `${meta.model} Create`}
        />
        <Stack>
          <Typography
            variant="h5"
            color="initial"
            my={1}
            className="f-uppercase f-bold"
          >
            Select Template
          </Typography>
          <Stack direction={"row"} spacing={2}>
            {template.map((d, ix) => (
              <Stack
                key={d.name}
                overflow="hidden"
                className="center"
                onClick={() => handleSelectTemplate(d)}
                flexGrow={1}
                alignItems={"flex-end"}
                justifyContent="flex-end"
              >
                <Stack
                  sx={{
                    bgcolor:
                      selectedtemplate == d ? "primary.main" : "grey.500",
                    borderRadius: 2,
                  }}
                  variant="rectangular"
                  width={"100%"}
                  height={48}
                />
                <Typography
                  variant="caption"
                  align="right"
                  width={"100%"}
                  px={2}
                  color="initial"
                >
                  {d.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        {selectedtemplate && (
          <Stack>
            <Typography
              variant="h5"
              color="initial"
              align="left"
              className="f-uppercase f-bold"
            >
              {`${selectedtemplate.name} Tags`}
            </Typography>
            <Input.SelectTag
              asString
              setval={(v) => fornmsetresult({ ...fornmresult, tags: v })}
            />
          </Stack>
        )}
        {selectedtemplate && selectedtemplate.element}
      </Stack>
    </Stack>
  );
}
