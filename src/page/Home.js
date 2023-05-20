import React from "react";
import { Search } from "tabler-icons-react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {
let navigate = useNavigate();

const handleLoginButton = () => {
  navigate("/login");  
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
    </>
  );
};

export default Home;
