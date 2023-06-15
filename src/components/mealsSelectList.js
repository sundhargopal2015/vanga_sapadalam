import React from "react";
import Meal from "./meal";
import { Button, Grid } from "@mui/material";

const MealsSelectList = ({ meals }) => {
  console.log(meals, "meals lost");
  return meals.map((meal) => (
    <Grid container style={{justifyContent: "center", alignItems: "center", flexWrap: "nowrap"}}>
      <Meal meal={meal} />{" "}
      <Grid>
        <Button variant="contained">Add</Button>
      </Grid>
    </Grid>
  ));
};

export default MealsSelectList;
