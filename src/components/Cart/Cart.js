import React from "react";
import Modal from "../../components/Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;
  cartCtx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx?.items?.map((item) => (
        <li className={classes.coloumn}>
          <CartItems
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            _id={item._id}
          />
        </li>
      ))}
    </ul>
  );

  const purchaseHandler = () => {
    cartCtx.emptyCart();
  };

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      {cartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button} onClick={purchaseHandler}>
        PURCHASE{" "}
      </button>
    </Modal>
  );
};

export default Cart;
