import React, { useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: props.quantity });
  };

  return (
    <li className={classes.list}>
      <div className={classes.div}>
        <h3>{props.title}</h3>
        <Link to={`/products/${props.id}`}>
            <img src={props.image} alt="products"></img>
        </Link>
        <span className={classes.details}>
          <h5 className={classes.amount}>${props.price}</h5>
          <button className={classes.btn} onClick={addItemToCart}>
            Add To Cart
          </button>
        </span>
      </div>
    </li>
  );
};

export default Product;
