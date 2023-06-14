import { Grid } from "@mui/material";
import React from "react";
import "../styles/Meals.css";

const Meal = ({ meal }) => {
  return (
    <Grid container className="meal-container" style={{ flexWrap: "noWrap" }}>
      <img src={meal.image} alt={meal.mealName} />
      <Grid container className="meal-details-container">
        <h4 className="name">{meal.mealName}</h4>
        <h5 className="description"> {meal.mealDescription}</h5>
        <p className="cost">{meal.mealCost}</p>
      </Grid>
    </Grid>
  );
};

export default Meal;
