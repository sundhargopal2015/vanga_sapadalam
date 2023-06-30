import {
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createMealStart } from "../store/reducers/RestaurantSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Meal from "../components/meal";
import OrderCard from "../components/orderCard";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        overflowY: "scroll"
      }}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Restaurant = (props) => {
  console.log("rest", props)
    const {tabIndex} = props;
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(() => {
    setValue(tabIndex)
}, [tabIndex]);
  const handleCreateMeal = (event) => {
    event.preventDefault();
    const payload = {
      meal: {
        mealName: event.target.mealName.value,
        mealDescription: event.target.mealDescription.value,
        mealCost: event.target.mealCost.value,
        restaurantId: props.restaurant.restaurantId,
      },
      navigate: navigate,
    };

    dispatch(createMealStart(payload));
  };

  return (
    <Grid
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      
    >
      <Typography variant="h5">{`Welcome ${props.restaurant.restaurantName}`}</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Your orders" {...a11yProps(0)} />
        <Tab label="Your meals" {...a11yProps(1)} />
        <Tab label="Create new Meal" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OrderCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
       {props.meals.map(meal => <Meal meal={meal} />)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleCreateMeal}>
          <Grid container spacing={1}>
            <Grid>
              <TextField
                label="Meal name"
                required
                id="mealName"
                name="mealName"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 2, mb: 2 }}>
            <Grid>
              <TextField
                label="Meal description"
                required
                id="mealDescription"
                name="mealDescription"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid>
              <TextField
                label="Meal Cost"
                required
                id="mealCost"
                name="mealCost"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{
              justifyContent: "end",
              mt: 1.5,
              mb: 1.5,
            }}
          >
            <Grid>
              <Button type="submit" variant="contained">
                Create Meal
              </Button>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Grid>
  );
};

export default Restaurant;
