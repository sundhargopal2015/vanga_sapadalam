import { Grid, Tabs, Typography, Tab, Box, Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MealsSelectList from "../components/mealsSelectList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addOneMealToOrder,
  removeOneMealFromOrder,
} from "../store/reducers/orderSlice";

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

const RestaurantView = () => {
  const location = useLocation();
  const { restaurant } = location.state;
  const [value, setValue] = React.useState(1);

  const { meals } = useSelector((state) => state.meals);
  const { userInfo } = useSelector((state) => state.user);
  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurantMeals = meals.filter(
    (meal) => meal.restaurantId === restaurant.restaurantId
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddMeal = (mealId) => {
    const payload = {
      userId: userInfo.userId,
      restaurantId: restaurant.restaurantId,
      meal: meals.find((meal) => meal.mealId === mealId),
    };
    dispatch(addOneMealToOrder(payload));
  };

  const handleRemoveMeal = (mealId) => {
    const payload = {
      userId: userInfo.userId,
      mealId: mealId,
    };
    dispatch(removeOneMealFromOrder(payload));
  };

  const handlePlaceOrderClick = () => {
    navigate("/order/complete");
  }

  return (
    <Grid sx={{ margin: "24px" }}>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography variant="h4">{restaurant.restaurantName}</Typography>
          <Typography variant="body1">{restaurant.address}</Typography>

          <Typography variant="body2">
            <span>Open - </span> 10 am to 10pm
          </Typography>
        </Grid>
        <Grid>
          {!!order.meals.length && (
            <Button variant="contained" onClick={handlePlaceOrderClick}>Place order</Button>
          )}
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Order online" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MealsSelectList
          meals={restaurantMeals}
          onMealAdd={handleAddMeal}
          onMealRemove={handleRemoveMeal}
          cartMeals={order.meals}
        />
      </TabPanel>
    </Grid>
  );
};

export default RestaurantView;
