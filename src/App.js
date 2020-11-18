import React from "react";
import RestaurantList from "./Components/RestaurantList";

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
      <RestaurantList />
    </>
  );
};

export default App;
