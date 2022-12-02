import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <NavLink to ="/home"><span>HOME</span></NavLink>
        <NavLink to ="/store"><span>STORE</span></NavLink>
        <NavLink to ="/about"><span>ABOUT</span></NavLink>

        <button className={classes.button} onClick={props.onShowCart}>
          Cart <span className={classes.cartNumber}> 0 </span>
        </button>
      </header>
      <h1 className={classes.h1}> The Generics </h1>

    </Fragment>
  );
};
export default Header;
