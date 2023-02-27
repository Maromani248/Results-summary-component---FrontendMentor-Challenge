import { Container, Paper } from "@mui/material";
import React from "react";
import theme from "../Context/themeContext";
import Result from "./Result";
import Summary from "./Summary";

function CardFull () {
    return (
      <Container>
        <Paper
          sx={{
            margin: "120px auto",
            width: "737px",
            height: "515px",
            borderRadius: "30px",
            flexGrow: 1,
            display: "flex",

            [theme.breakpoints.down("sm")]: {
              margin: "0",
              flexDirection: "column",
              width: "100%",
              height: "100%"
            },
          }}
        >
          <Result />
          <Summary />
        </Paper>
      </Container>
    );
}

export default CardFull;