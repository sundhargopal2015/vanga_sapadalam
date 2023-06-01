import React from "react";
import { Container, Button, Typography, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { checkUserName } from "../store/reducers/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
const Forgot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const handleForgotPasswordEmailVerification = (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;

    dispatch(checkUserName({userName, navigate}));
  };
  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography style={{ marginBottom: "10px" }} variant="h5">
        Forgot password
      </Typography>
      <Box
        component="form"
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "6px",
        }}
        onSubmit={handleForgotPasswordEmailVerification}
      >
        <TextField
          fullWidth
          id="Email"
          label="Username or Email"
          variant="standard"
          style={{ marginBottom: "10px" }}
          required
          name="userName"
        />

        <Button
          style={{ marginBottom: "200px" }}
          variant="outlined"
          type="submit"
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};
export default Forgot;
