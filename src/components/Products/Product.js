import React, { useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props.item });
    console.log(cartCtx);
  };

  return (
    <li className={classes.list}>
      <div className={classes.div}>
        <h3>{props.title}</h3>
        <img src={props.image} alt="products"></img>
        <span>
          <h1>${props.price}</h1>
          <button onClick={addItemToCart}>Add To Cart</button>
        </span>
      </div>
    </li>
  );
};

export default Product;
