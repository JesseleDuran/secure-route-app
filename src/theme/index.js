import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d73e7",
      light: "#ff8e00",
    },
    secondary: { main: "#1d73e7", light: "#1d73e7" },
    disabled: { main: "#e5e5e4", dark: "#9aa9b9", outlined: "#c1d5ec" },
    background: { main: "#ffffff", dark: "#f9f9f8" },
    error: {
      main: "#332927",
    },
    warning: {
      main: "#332927",
    },
    success: {
      main: "#332927",
      contrastText: "#fff",
    },
    info: {
      main: "#332927",
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: {
      bold: ["Poppins Bold", "Georgia", "sans-serif"].join(","),
      regular: ["Poppins", "Georgia", "sans-serif"].join(","),
      light: ["Poppins", "Georgia", "sans-serif"].join(","),
      thin: ["Poppins", "Georgia", "sans-serif"].join(","),
    },
    palette: {
      main: "#332927",
      placeholder: "#706967",
      subtitle: "#b8b4b4",
      content: "#706967",
    },
    useNextVariants: true,
  },
  overrides: {
    MuiStepIcon: {
      root: {
        fontFamily: "Poppins Bold",
        color: "#e6ebf1",
        width: "1.3em",
        height: "1.3em",
        padding: "0 5px",
        "& > text": {
          fill: "#9aa9b9",
          fontSize: "0.65rem",
        },
        "&$active, &$completed": {
          color: "#2ec4b6",
          border: "2px solid",
          borderRadius: "50%",
          borderColor: "#2ec4b6",
          width: "1.2em",
          height: "1.2em",
          padding: "5px ",
          "& > text": {
            fill: "#fff",
          },
        },
      },
    },
    MuiStepConnector: {
      line: {
        borderColor: "#e6ebf1",
        borderLeftWidth: 2,
      },
      vertical: {
        marginLeft: 20,
        padding: 0,
      },
      horizontal: {
        padding: 0,
      },
      lineVertical: {
        minHeight: 50,
        borderLeftWidth: 2,
      },
    },
    MuiInputBase: {
      input: {
        "&::placeholder": {
          color: "#706967 !important",
          opacity: "1 !important",
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "none !important",
      },
    },
    MuiDrawer: {
      paper: {
        overflowY: "unset",
      },
    },
  },
});

export default theme;
