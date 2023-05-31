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
import { useDispatch } from "react-redux";
import { fetchUserStart } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const defaultTheme = createTheme({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.email.value;
    const password = event.target.password.value;

    dispatch(
      fetchUserStart({
        userName: userName,
        password: password,
        navigate: navigate,
      })
    );
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
              <Link to="/forgot/password">Forgot password</Link>
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
