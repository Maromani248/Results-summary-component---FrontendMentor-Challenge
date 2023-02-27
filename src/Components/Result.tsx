import { Box, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../Context/themeContext";

const Circle = styled("div")({
  margin: "auto",
  display: "block",
  width: "210px",
  height: "210px",
  borderRadius: "100px",
  background: "linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",

  [theme.breakpoints.down("sm")]: {
    width: "195px",
    height: "195px",
  },
});

function Result () {
    return (
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "30px",
          background:
            "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",

          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "hsl(241, 100%, 89%)",
            textAlign: "center",
            padding: "45px 0",

            [theme.breakpoints.down("sm")]: {
              padding: "30px 0",
            },
          }}
        >
          Your Result
        </Typography>

        <Circle>
          <Typography
            variant="h3"
            sx={{
              color: "hsl(0, 0%, 100%)",
              textAlign: "center",
              paddingTop: "45px",

              [theme.breakpoints.down("sm")]: {
                paddingTop: "40px",
                fontSize: "80px",
              },
            }}
          >
            76
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "hsla(241, 100%, 89%, 50%)",
              textAlign: "center",
            }}
          >
            of 100
          </Typography>
        </Circle>

        <Typography
          variant="h1"
          sx={{
            color: "hsl(0, 0%, 100%)",
            textAlign: "center",
            padding: "30px 0 15px",
          }}
        >
          Great
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "hsl(241, 100%, 89%)",
            textAlign: "center",
            margin: "0 55px",
            lineHeight: "22px",

            [theme.breakpoints.down("sm")]: {
              padding: "0 0 45px 0",
            },
          }}
        >
          You scored higher than 65% of the people who have taken these tests.
        </Typography>
      </Box>
    );
}

export default Result; 