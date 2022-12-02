import { Fragment } from "react";
import classes from "./Home.module.css";
import TourInfo from "./ToursInfo";

const Home = () => {
  const tourInfo = [
    { date: "JUL 16", place: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", place: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", place: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", place: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", place: "LAS VEGAS, NV", venue: "T-MOBILE ARENAE" },
    { date: "AUG 7", place: "CONCORD, CA", venue: "CONCORD PAVILIONE" },
  ];

  const tourInfoList = tourInfo.map((tour) => (
    <TourInfo tour={tour} key={Math.random().toString()} />
  ));

  return (
    <Fragment>
      <header className={classes.header}>
        <button className={classes.albumButton}>Get Out Lastest Album</button>
        <button className={classes.playButton}> ▷ </button>
      </header>

      <section className={classes.containers}>
        <h2 className={classes.tourTitle}>Tours</h2>
        <div>
          <div className={classes}>{tourInfoList}</div>
        </div>
      </section>
      <section className={classes.section}></section>
    </Fragment>
  );
};
export default Home;
