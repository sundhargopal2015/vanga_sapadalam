import React from "react";
import Meal from "./meal";
import { Button, Grid } from "@mui/material";

const MealsSelectList = ({ meals }) => {
  console.log(meals, "meals lost");
  return meals.map((meal) => (
    <Grid container>
      <Meal meal={meal} />{" "}
      <Grid>
        <Button>Add</Button>
      </Grid>
    </Grid>
  ));
};

export default MealsSelectList;
