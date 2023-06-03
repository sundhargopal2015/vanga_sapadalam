import { Grid, Tabs, Typography, Tab, Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

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

const RestaurantView = () => {
  const location = useLocation();
  const { restaurant } = location.state;
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid sx={{ margin: "24px" }}>
      <Grid>
        <Typography variant="h4">{restaurant.restaurantName}</Typography>
        <Typography variant="body1">{restaurant.address}</Typography>

        <Typography variant="body2">
          <span>Open - </span> 10 am to 10pm
        </Typography>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Order online" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2
      </TabPanel>
    </Grid>
  );
};

export default RestaurantView;
