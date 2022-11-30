import React from "react";
import Modal from "../../components/Modal/Modal";
import classes from "./Cart.module.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartElements.map((item) => (
        <li className={classes.coloumn}>
          {
            <img
              className={classes.img}
              src={item.imageUrl}
              alt="Some pic"
            ></img>
          }{" "}
          {item.title}
          {item.price} {item.quantity}
          <button className={classes.removeButton}> Remove </button>
        </li>
      ))}
    </ul>
  );
  let total = 0;
  total = total + cartElements[0].price;
  return (
    <Modal>
      <section className={classes.section}>
        <span> CART </span>
        <button onClick={props.onClose} className={classes.cancel}> x </button>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      {CartItems}
      <h2 className={classes.h2}> Total ${total} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;
