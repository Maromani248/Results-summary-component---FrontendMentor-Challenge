import React from "react";
import "./App.css";

import { ThemeProvider } from "@mui/material";
import theme from "./Context/themeContext";
import CardFull from "./Components/CardFull";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardFull />      
    </ThemeProvider>
  );
}

export default App;
