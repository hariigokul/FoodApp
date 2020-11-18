import React from "react";
// import Restaurant from "./Components/Restaurant";
import RestaurantList from "./Components/RestaurantList";
// import AccordianRestaurant from "./Components/AccordianRestaurant";

//MUI
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Typography style={{ padding: 10 }} variant="h6">
          Food App
        </Typography>
      </AppBar>
      {/* <Restaurant
      title = "Frozen"
      displayCostForTwo='$173 for two'
      shortDesc = '10%off |Use coupon coupon'
      longDesc ="10%off up to $80 |Use coupon coupon"
      averageReview = '2.0'
      displayTime = "10 mins"
      isOutlet = {false}
      /> */}
      <RestaurantList />
      {/* <AccordianRestaurant
        title="Frozen"
        displayCostForTwo="$173 for two"
        shortDesc="10%off |Use coupon coupon"
        longDesc="10%off up to $80 |Use coupon coupon"
        averageReview="2.0"
        displayTime="10 mins"
        isOutlet={false}
      /> */}
    </>
  );
};

export default App;
