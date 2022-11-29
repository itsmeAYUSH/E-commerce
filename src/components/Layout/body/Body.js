import classes from "./Body.module.css";
import AvailableItems from './AvailableItems'

const Body = () => {
  return (
    <div>
      <div className={classes.body}>
        <h1>The Generics</h1>
      </div>
      <div><h4>
        MUSIC
      </h4>
      <AvailableItems/>
      </div>
    </div>
  );
};

export default Body;
