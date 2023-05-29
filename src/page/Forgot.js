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
  import React, { useEffect,useState } from "react";
  import Backdrop from '@mui/material/Backdrop';
  import CircularProgress from '@mui/material/CircularProgress';
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

  
  const Forgot = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const defaultTheme = createTheme({});
  
    const handleFormSubmit = (event) => {};


   


    useEffect(() => {
      setTimeout(() =>{
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        
        setIsLoading(false);
      }, 2000)
    },[]);
  
    return (
      <div>
      <>
       
       <div highlightColor="#e8ffd1"> 
         {
           isLoading 
           ?
           <>
            <Backdrop
        sx={{ bgcolor:'#fff', color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
           </>
         :
         <>
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
          Reset password
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
             <TextField
              required
              fullWidth
              autoFocus
              id="Confrimpassword"
              type="Confrimpassword"
              label="Confrim password"
              name="Confrimpassword"
              sx={{
                mb: 1,
                mt: 1,
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained">
            Reset password
            </Button>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                mt: 1,
              }}
            >
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
     </>
}
          
      </div>
         
    </>

      
     
    </div>    
    );
  };
  
  export default Forgot;
  