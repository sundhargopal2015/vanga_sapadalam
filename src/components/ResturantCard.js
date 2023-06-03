import {  Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import sampleFood from "../assets/foodSample.avif";

export default function RestaurantCard(props) {

  return (
    <Card sx={{width: 300}}>
      <CardActionArea onClick={() => props.onRestaurantClick(props.user)}>
        <CardMedia
          sx={{
            height: 140
          }}
          image={sampleFood}
          title={props.user.restaurantName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.restaurantName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}