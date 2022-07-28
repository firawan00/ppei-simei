import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import Context from ".";

const ButtonPallet = {
  primary: {
    main: "#2f4858",
    dark: "#0a2030",
  },
  secondary: {
    main: "#2f4858",

    // main: "#FE9150",
  },
  white: {
    main: "#FFFFFF",
  },
  dark: {
    main: "#2F4858",
    secondary: "#4A587D",
  },
  grey: {
    a: "#4b4b4b",
    b: "#838692",
    c: "#c8c8c8",
  },
  red: {
    main: "#ff0000",
  },
  test: {
    r: "#e76f51",
    b: "#264653",
    y: "e9c46a",
  },
  error: {
    light: "#BB1C2A",
    main: "#BB1C2A",
    dark: "#BB1C2A",
  },
};

const darkPallet = {
  initial: {
    main: "#FFFFFF",
  },
  mode: "dark",
  background: {
    default: "#164364",
    bgdrawer: "#272727",
    // bgdrawer: "#272727",

    paper: "#272727",
    header: "#0e2a3e",
  },
  ...ButtonPallet,
  primary: {
    main: "#FFFFFF",
  },
  dark: {
    main: "#babec2",
  },
};

const lightPallet = {
  mode: "light",
  background: {
    default: "#ecf0f5",
  },
  ...ButtonPallet,
  // primary: {
  //   main: "#2f4858",
  //   dark: "#131e24",
  // },
};

export default function App(props) {
  const { app } = React.useContext(Context);

  let themeLoader = createTheme({
    palette: app.data.theme === "dark" ? darkPallet : lightPallet,
    typography: {
      // fontFamily: "Lato",
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: "normal",
      },
      h6: {},
      body2: {
        fontWeight: "normal",
      },
      caption: {
        fontWeight: "normal",
      },
      overline: {
        lineHeight: "unset",
      },
    },

    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            // display: "none",
            margin: "0 18px",
            width: "calc(100% - 36px)",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "0 8px",
          },
          head: {
            button: {
              color: ButtonPallet.primary.main,
              fontWeight: "500",
              textTransform: "uppercase",
            },
          },
        },
      },

      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
      },

      MuiTextField: {
        defaultProps: {
          size: "small",
          autoComplete: "new-password",
          inputProps: {
            autoComplete: "new-password",
            form: {
              autoComplete: "new-password",
            },
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "primary",
        },
        styleOverrides: {
          containedSecondary: {
            fontWeight: "bold",
          },
        },
      },

      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "p",
            subtitle2: "p",
            caption: "p",
            body1: "p",
            body2: "p",
            overline: "p",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={responsiveFontSizes(themeLoader)}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>
    </ThemeProvider>
  );
}
