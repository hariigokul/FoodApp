import React from "react";
import Restaurant from "../Components/Restaurant";
import Axios from "axios";
import AccordianRestaurant from "./AccordianRestaurant";

export default class RestaurantList extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurantList: [],
    };
  }
  componentDidMount() {
    Axios.post(
      "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      { latitude: 13.012345, longitude: 80.123456 }
    )
      .then((res) =>
        this.setState({
          ...this.state,
          restaurantList: res.data.listRestaurants,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  generateRestaurantLists = () => {
    let list = [];
    this.state.restaurantList.map((restaurant, index) =>
      list.push(
        restaurant.outlet.length > 1 ?
        <AccordianRestaurant
          key={index}
          title={restaurant.restaurantName}
          displayCostForTwo={restaurant.displayCostForTwo}
          costForTwo = {restaurant.costForTwo}
          longDesc={restaurant.longDescription}
          averageReview={restaurant.averageReview}
          displayTime={restaurant.displayTime}
          image={restaurant.restaurantImage}
          outlets = {restaurant.outlet}
        />
        :
        <Restaurant
          key={index}
          title={restaurant.restaurantName}
          displayCostForTwo={restaurant.displayCostForTwo}
          costForTwo = {restaurant.costForTwo}
          longDesc={restaurant.longDescription}
          averageReview={restaurant.averageReview}
          displayTime={restaurant.displayTime}
          image={restaurant.restaurantImage}
        />
      )
    );
    return list;
  };

  render() {
    let restaurants = this.state.restaurantList.length > 0 && this.generateRestaurantLists();
    return <>{restaurants}</>;
  }
}