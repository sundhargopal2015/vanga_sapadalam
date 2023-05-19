import React, { useState } from "react";
import { Search } from "tabler-icons-react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Login from "./Login";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

const handleLoginButton = () => {
  setShowLogin((pre) => !pre);
}
  return (
    <>
    <Container style={{
      paddingTop: "24px"
    }}>
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
            startAdornment: <Search />
          }}
        />
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="12px"
        >
          <Button variant="contained" onClick={handleLoginButton}> Log in</Button>
          <Button variant="outlined">Sign up</Button>
        </Grid>
      </Grid>
    </Container>
    <Login open={showLogin} handleClose={handleLoginButton} />
    </>
  );
};

export default Home;
