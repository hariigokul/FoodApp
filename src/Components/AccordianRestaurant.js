import React from "react";
import Restaurant from "./Restaurant";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({}));

const AccordianRestaurant = ({
  title,
  image,
  displayCostForTwo,
  costForTwo,
  longDesc,
  averageReview,
  displayTime,
  isOutlet,
  outlets,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const generateOutlets = () => {
    let outletList = [];
    if (outlets && outlets.length > 1) {
      outlets.map((outlet, index) =>
        outletList.push(
          <Restaurant
          key={index}
            title={outlet.outletName}
            displayCostForTwo={outlet.displayCostForTwo}
            costForTwo={outlet.costForTwo}
            longDesc={outlet.longDesc}
            averageReview={outlet.averageReview}
            displayTime={outlet.displayTime}
            isOutlet={true}
            isOutletImage={true}
          />
        )
      );
    }
    return outletList.slice(1);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Restaurant
            title={title}
            image={image}
            displayCostForTwo={displayCostForTwo}
            costForTwo={costForTwo}
            longDesc={longDesc}
            averageReview={averageReview}
            displayTime={displayTime}
            isOutlet={isOutlet}
            isOutletImage={false}
          />
        </AccordionSummary>
        <AccordionDetails>{generateOutlets()}</AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordianRestaurant;
