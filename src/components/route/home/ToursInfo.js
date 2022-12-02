import React from "react";
import classes from "./ToursInfo.module.css";

const TourInfo = (props) => {
  return (
    <div className={classes.tourItem}>
      <span className={classes.tourDate}>{props.tour.date}</span>
      <span className={classes.tourPlace}>{props.tour.place}</span>
      <span className={classes.tourDes}>{props.tour.venue}</span>
      <button className={classes.buyBtn}>BUY TICKETS</button>
    </div>
  );
};

export default TourInfo;
