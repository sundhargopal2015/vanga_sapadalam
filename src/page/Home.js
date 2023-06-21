import React, { useEffect, useState } from "react";
import { Search } from "tabler-icons-react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../components/userDialog";
import { userLogout } from "../store/reducers/userSlice";
import { fetchAllUsersStart } from "../store/reducers/HomeSlice";
import RestaurantCard from "../components/ResturantCard";
import Restaurant from "./Restarunt";
import { fetchMealsStart } from "../store/reducers/Meals";
import { fetchSellerMealStart } from "../store/reducers/RestaurantSlice";

const Home = () => {
  const [showUserDialog, setShowUserDialog] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isUserAuthenticated, userInfo } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.home);
  const { sellerMeals } = useSelector((state) => state.restaurant);
  
  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(fetchAllUsersStart("seller"));
      if (userInfo.userType === "seller") {
        dispatch(fetchSellerMealStart());
      }
      if (userInfo.userType === "consumer") {
        dispatch(fetchMealsStart());
      }
    }
  }, [isUserAuthenticated]);

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleSignUpButton = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    setShowUserDialog(false);
    dispatch(userLogout());
  };

  const handleRestaurantClick = (restaurant) => {
    navigate("/order", {
      state: { restaurant: restaurant },
    });
  };

  return (
    <>
      <Container
        style={{
          paddingTop: "24px",
        }}
      >
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h3">
            Vanga Sapadalam
          </Typography>
          <TextField
            variant="outlined"
            style={{
              minWidth: "500px",
            }}
            InputProps={{
              startAdornment: <Search />,
            }}
          />
          {isUserAuthenticated ? (
            <Avatar
              alt="Profile"
              src={userInfo.avatar}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setShowUserDialog((pre) => !pre)}
            />
          ) : (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="12px"
            >
              <Button variant="contained" onClick={handleLoginButton}>
                Log in
              </Button>
              <Button variant="outlined" onClick={handleSignUpButton}>
                Sign up
              </Button>
            </Grid>
          )}
        </Grid>
        {isUserAuthenticated && userInfo.userType === "consumer" && (
          <>
            <Typography
              component="h4"
              variant="h5"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Best Food in Bengaluru
            </Typography>
            <Grid
              container
              sx={{
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {users.map((user) => (
                <RestaurantCard
                  user={user}
                  onRestaurantClick={handleRestaurantClick}
                />
              ))}
            </Grid>
          </>
        )}
        {isUserAuthenticated && userInfo.userType === "seller" && (
          <Restaurant
            restaurant={userInfo}
            tabIndex={location.state.isNewMealCreated ? 1 : 0}
            meals={sellerMeals.filter(meal => userInfo.restaurantId === meal.restaurantId)}
          />
        )}
      </Container>
      {showUserDialog && (
        <UserMenu userInfo={userInfo} onClickLogout={handleLogout} />
      )}
    </>
  );
};

export default Home;
