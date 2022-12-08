import React, { useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: props.quantity });
    // console.log(cartCtx);
  };

  // const productDetailHandler = () => {
  //   console.log("hello");
  //   console.log(props.title);
  // };

  return (
    <li className={classes.list}>
      <div className={classes.div}>
        <h3>{props.title}</h3>
        <Link to={`/products/${props.id}`}>
          <img
            // onClick={productDetailHandler}
            src={props.image}
            alt="products"
          ></img>
        </Link>
        <span>
          <h1>${props.price}</h1>
          <button onClick={addItemToCart}>Add To Cart</button>
        </span>
      </div>
    </li>
  );
};

export default Product;
