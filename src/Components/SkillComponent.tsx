import { Grid, Typography } from "@mui/material";
import "../Styles/skillsComponent.css";

function Skill(props: any) {
  return (
    <Grid
      container
      direction="row"
      spacing={0}
      sx={{
        borderRadius: "8px",
        padding: "15px 10px",
        margin: "22px 0",
      }}
      className={
        props.name === "Reaction"
          ? "color-reaction"
          : props.name === "Memory"
          ? "color-memory"
          : props.name === "Verbal"
          ? "color-verbal"
          : "color-visual"
      }
    >
      <Grid item sx={{ margin: "0 7px" }}>
        <img src={props.image} alt="imagen" />
      </Grid>
      <Grid item xs>
        <Typography variant="h4">{props.name}</Typography>
      </Grid>
      <Grid item sx={{ margin: "0 7px", color: "hsl(224, 30%, 27%)" }}>
        <Typography variant="h4">
          <span>{props.porcent}</span> / 100
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Skill;