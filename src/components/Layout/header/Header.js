import React, { Fragment, useContext} from "react";
import classes from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const Header = (props) => {
  let number = 3
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth')
  }
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/home">
          <span>HOME</span>
        </NavLink>
        <NavLink to="/store">
          <span>STORE</span>
        </NavLink>
        <NavLink to="/about">
          <span>ABOUT</span>
        </NavLink>
        <NavLink to="/contact">
          <span>CONTACT US</span>
        </NavLink>

        <button className={classes.button} onClick={props.onShowCart}>
          Cart <span className={classes.cartNumber}> {number}</span>
        </button>
        <button onClick={logoutHandler}>Login/Logout</button>
      </header>
      <h1 className={classes.h1}> The Generics </h1>
    </Fragment>
  );
};
export default Header;
