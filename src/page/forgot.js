import React from "react";
import { Container, Button, Typography, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const Forgot = () => {
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
          height: "300px",
          borderRadius: "6px",
          boxShadow: "5px 5px #ccc",
        }}
      >
        <Typography style={{ marginBottom: "20px" }}>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </Typography>
        <TextField
          fullWidth
          id="Email"
          label="Username or Email"
          variant="standard"
          style={{ marginBottom: "10px" }}
        />

        <Button style={{ marginBottom: "200px" }} variant="outlined">
          Reset Password
        </Button>
        {/* <hr style={{ borderBottom: "1px dashed #ccc;" }} /> */}
        <Link to="/" style={{ textAlign: "left" }}>
          Remember your password?
        </Link>
      </Box>
    </Container>
  );
};
export default Forgot;
