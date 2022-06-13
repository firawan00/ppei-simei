import GoogleIcon from "@mui/icons-material/Google";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { IconButton, Menu, Typography, Stack } from "@mui/material";

export default function App(props) {
  const key =
    "688291264467-73oo5d81epsjmtl4otd8vjrlqplljjct.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <Stack>
      <GoogleLogin
        clientId="887527327042-6hc6mi3qrs8u76b6dvfk1cipghi91rio.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <IconButton onClick={renderProps.onClick}>
            <GoogleIcon />
          </IconButton>
        )}
        // render={(renderProps) => (
        //   <IconButton>
        //     <GoogleIcon />
        //   </IconButton>
        // )}
      />
    </Stack>
  );
}
