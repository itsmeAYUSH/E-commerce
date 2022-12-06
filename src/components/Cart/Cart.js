import React from "react";
import Modal from "../../components/Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  cartCtx?.item?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx?.item?.map((item) => (
        <li className={classes.coloumn}>
          <CartItems
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <span> CART </span>
        <button onClick={props.onClose} className={classes.cancel}>
          x
        </button>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      {CartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;
