import { Grid, Typography, Tab, Tabs, Box, TextField } from "@mui/material";
import React from "react";

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

const Restaurant = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      position="fixed"
    >
      <Typography variant="h5">{`Welcome ${props.restaurant.restaurantName}`}</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Your orders" {...a11yProps(0)} />
        <Tab label="Create new Meal" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box component="form" sx={{ mt: 1 }}>
          <Grid container spacing={1}>
            <Grid>
              <TextField
                label="Meal name"
                required
                id="mname"
                name="mname"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{mt:2,mb:2}}>
            <Grid>
              <TextField
                label="mealDescription"
                required
                id="mealDescription"
                name="mealDescription"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid>
              <TextField
                label="mealCost"
                required
                id="mealCost"
                name="mealCost"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Grid>
  );
};

export default Restaurant;
