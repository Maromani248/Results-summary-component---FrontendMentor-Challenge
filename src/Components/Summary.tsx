import { Box, Button, Typography } from "@mui/material";
import React from "react";

import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";
import Skill from "./SkillComponent";
import theme from "../Context/themeContext";

function Summary () {
    return (
      <Box sx={{ margin: "45px" }}>
        <Typography
          variant="h2"
          sx={{ color: "hsl(224, 30%, 27%)", paddingBottom: "20px" }}
        >
          Summary
        </Typography>

        <Skill image={iconReaction} name="Reaction" porcent="80"></Skill>
        <Skill image={iconMemory} name="Memory" porcent="92"></Skill>
        <Skill image={iconVerbal} name="Verbal" porcent="61"></Skill>
        <Skill image={iconVisual} name="Visual" porcent="72"></Skill>

        <Button
          sx={{
            background: "hsl(224, 30%, 27%)",
            color: "hsl(0, 0%, 100%)",
            borderRadius: "50px",
            padding: "12px 100px",
            ":hover": { bgcolor: "hsl(241, 81%, 54%)" },

            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography variant="button">Continue</Typography>
        </Button>
      </Box>
    );
}

export default Summary;