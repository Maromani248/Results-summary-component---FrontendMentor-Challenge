import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(0, 100%, 67%)",
    },
  },
  typography: {
    fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
    h1: {
      fontSize: "30px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "23px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "85px",
      fontWeight: "800",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "500",
      span: {
        fontWeight: "800",
      },
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: "500",
    },
    button: {
      fontSize: "18px",
      fontWeight: "700",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "hsl(241, 81%, 54%)",
      },
    },
  },
});

export default theme;

/* entre 789.6 y 375*/