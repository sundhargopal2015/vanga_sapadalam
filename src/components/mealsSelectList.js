import React from "react";
import Meal from "./meal";
import { Button, Grid } from "@mui/material";

const MealsSelectList = ({ meals, onMealAdd, onMealRemove, cartMeals }) => {
  return meals.map((meal) => (
    <Grid
      container
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <Meal meal={meal} />{" "}
      <Grid>
        {cartMeals.find((cartMeal) => cartMeal.mealId === meal.mealId) ? (
          <Grid
            container
            style={{
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1976d2",
              borderRadius: "8px",
              gap: "8px",
            }}
          >
            <Button variant="contained" onClick={() => onMealRemove(meal.mealId)}>-</Button>
            <span>
              {
                cartMeals.find((cartMeal) => cartMeal.mealId === meal.mealId)
                  .quantity
              }
            </span>
            <Button variant="contained" onClick={() => onMealAdd(meal.mealId)}>
              +
            </Button>
          </Grid>
        ) : (
          <Button variant="contained" onClick={() => onMealAdd(meal.mealId)}>
            Add
          </Button>
        )}
      </Grid>
    </Grid>
  ));
};

export default MealsSelectList;
