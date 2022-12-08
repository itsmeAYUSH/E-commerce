import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useState } from "react";
import { useEffect } from "react";
import CartContext from "../../../store/cart-context";

const Header = (props) => {
  
  const [quantity, setQuantity] = useState(0);

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const history = useHistory();

  useEffect(() => {
    setQuantity(cartCtx.items.length || 0);
  }, [cartCtx.items]);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/home">
          <span>HOME</span>
        </NavLink>
        {authCtx.isLoggedIn && (
          <NavLink to="/store">
            <span>STORE</span>
          </NavLink>
        )}
        <NavLink to="/about">
          <span>ABOUT</span>
        </NavLink>
        <NavLink to="/contact">
          <span>CONTACT US</span>
        </NavLink>

        <button className={classes.button} onClick={props.onShowCart}>
          Cart <span className={classes.cartNumber}> {quantity}</span>
        </button>
        <button onClick={logoutHandler}>Login/Logout</button>
      </header>
      <h1 className={classes.h1}> The Generics </h1>
    </Fragment>
  );
};
export default Header;
