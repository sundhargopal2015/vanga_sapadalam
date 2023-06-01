import React, { useState } from "react";
import { Search } from "tabler-icons-react";
import { Avatar, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfileDialog from "../components/userDialog";

const Home = () => {
  const [showUserDialog, setShowUserDialog] = useState(false);
  let navigate = useNavigate();
  const { isUserAuthenticated, userInfo } = useSelector((state) => state.user);

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleSignUpButton = () => {
    navigate("/signup");
  }
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
              onClick={() => setShowUserDialog(pre => !pre)}
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
      </Container>
      <UserProfileDialog
        handleClose={() => {
          setShowUserDialog((pre) => !pre);
        }}
        open={showUserDialog}
        title={`${userInfo.firstName} ${userInfo.lastName}`}
      />
    </>
  );
};

export default Home;
