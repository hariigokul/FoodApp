import React from "react";
//CSS
import "./Restaurant.css";
//MUI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AlarmIcon from "@material-ui/icons/Alarm";
//React-star-rating
import StarRatings from "react-star-ratings";

const formatTitle = (title) => {
  //Restrict Title to 35 Chars
  return title.slice(0,35)
}

const getCouponCode = (desc) => {
  let coupon = desc && desc.split("|")[1] && desc.split("|")[1].split(" ");
  return coupon[coupon.length - 1].toUpperCase();
};

const formatLongDesc = (txt) => {
  txt = txt.replace("off", "");
  return txt.split("|")[0];
};

const Restaurant = ({
  title,
  image,
  displayCostForTwo,
  costForTwo,
  longDesc,
  averageReview,
  displayTime,
  isOutlet,
  isOutletImage
}) => {
  return (
    <Container>
      <div
        style={{
          paddingTop: 25,
          width: isOutlet ? "100%" : "100%",
          paddingLeft:isOutletImage?25:75,
          paddingBottom:isOutletImage?25:75
        }}
        className={!isOutletImage ? "" : "card"}
      >
        <Grid container justify="center">
          {!isOutletImage && image && (
            <Grid item xs>
              <img src={image} alt="" className="restaurant-card-image" />
            </Grid>
          )}
          <Grid item xs>
            <Grid container direction="column">
              <Grid item xs>
                <Typography variant="h5">{formatTitle(title)}</Typography>
              </Grid>
              {costForTwo > 0 && displayCostForTwo && (
                <Grid item xs>
                  <Typography variant="subtitle1">
                    {displayCostForTwo}
                  </Typography>
                </Grid>
              )}
              {longDesc && (
                <Grid item xs>
                  <Typography color="secondary" variant="subtitle2">
                    {formatLongDesc(longDesc)}
                    <span style={{ color: "grey" }}>
                      ( {getCouponCode(longDesc)} )
                    </span>
                  </Typography>
                </Grid>
              )}
              {averageReview && (
                <Grid item xs>
                  <StarRatings
                    rating={parseFloat(averageReview)}
                    starDimension="15px"
                    starSpacing="3px"
                    numberOfStars={5}
                    starRatedColor="#FFDF00"
                  />
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs>
            <Grid container direction="column">
              {displayTime && !isOutletImage && (
                <>
                  <Grid item xs>
                    <span style={{ paddingLeft: "1vw" }}>
                      <AlarmIcon />
                    </span>
                  </Grid>
                  <Grid item xs>
                    <Typography align="inherit" display="block">
                      {displayTime}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Restaurant;
