import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const { order } = useSelector((state) => state);
  const { meals } = useSelector((state) => state.meals);
  const { userInfo } = useSelector((state) => state.user);

  const products = order.meals.map((orderMeal) => {
    const mealDetails = meals.find((meal) => meal.mealId === orderMeal.mealId);

    return {
      name: mealDetails.mealName,
      quantity: orderMeal.quantity,
      price: orderMeal.quantity * parseInt(mealDetails.mealCost),
    };
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Typography
          style={{ textDecoration: "underline", width: "250px" }}
          variant="h6"
        >
          Name
        </Typography>
        <Typography style={{ textDecoration: "underline" }} variant="h6">
          Quantity
        </Typography>
        <Typography style={{ textDecoration: "underline" }} variant="h6">
          Price
        </Typography>
      </Grid>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText style={{ width: "250px" }} primary={product.name} />
            <ListItemText primary={product.quantity} />
            <Typography variant="body2">{`₹${product.price}`}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="GST" />
          <Typography variant="body2">
            {`₹${order.priceDetails.gst}`}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Delivery charge" />
          <Typography variant="body2">
            {`₹${order.priceDetails.deliveryCharge}`}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Handling fee" />
          <Typography variant="body2">
            {`₹${order.priceDetails.handlingFee}`}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`₹${order.priceDetails.total}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Delivery
          </Typography>
          <Typography
            gutterBottom
          >{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
          <Typography gutterBottom>{userInfo.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
