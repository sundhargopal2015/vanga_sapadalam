import {
  Avatar,
  Container,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { makeRequest } from "../http/makeRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserInfo } from "../store/reducers/userSlice";

const Login = () => {
  const defaultTheme = createTheme({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.email.value;
    const password = event.target.password.value;
    const userCallback = (response) => {
      const { data, statusText } = response;
      if (statusText === "OK") {
        const user = data.find(
          (user) => user.userName === userName && user.password === password
        );
        if (user) {
          const payload = {
            isUserAuthenticated: true,
            userInfo: {
              userName: user.userName,
              firstName: user.firstName,
              lastName: user.lastName,
              address: user.address,
              mobileNo: user.moNo,
              userType: user.userType,
              restaurantName: user.restaurantName,
              restaurantAddress: user.restaurantAddress,
              deliveryAgentKnownLanguages: user.deliveryAgentKnownLanguages,
              avatar: user.avatar
            },
          };
          dispatch(saveUserInfo(payload));
          navigate("/");
        } else {
          console.log("Login failed");
        }
      }
    };

    makeRequest("get", "users", userCallback);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleFormSubmit}>
          <TextField
            required
            fullWidth
            autoFocus
            id="email"
            label="Email Address"
            autoComplete="email"
            sx={{
              mb: 1,
            }}
          />
          <TextField
            required
            fullWidth
            autoFocus
            id="password"
            type="password"
            label="Password"
            name="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained">
            Log in
          </Button>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Grid item xs>
              <Link to="/">Forgot password</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Create new account</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
