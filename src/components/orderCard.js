import { Button, Grid } from "@mui/material";
import React from "react";
import "../styles/orderCard.css"

const OrderCard = () => {
  return (
    <Grid
      className="order-card-container"
    >
      <Grid className="order-card-batch">12</Grid>
      <Grid className="order-card-meals-container">
        <Grid className="order-card-meals-item-container">
          <span className="order-card-meal-name">Plain dosa</span>
          <span className="order-card-meal-multiplier">X</span>
          <span className="order-card-meal-quantity">2</span>
        </Grid>
      </Grid>
      <Button variant="contained" color="success">
        Accept
      </Button>
    </Grid>
  );
};

export default OrderCard;
