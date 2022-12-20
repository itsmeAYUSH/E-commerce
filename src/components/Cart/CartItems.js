import CartContext from "../../store/cart-context";
import { useContext } from "react";
import axios from "axios";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  let emailId = localStorage.getItem("email").replace(".", "").replace("@", "");
  const cartCntx = useContext(CartContext);

  const onRemoveHandler = (event) => {
    cartCntx.removeItem(props.id);
    const id = props._id;
    console.log(id);
    axios.delete(
      `https://crudcrud.com/api/4cc378de37cc403ba387f8af4bc5cf01/cart${emailId}/${id}`
    );
  };

  return (
    <li id={`cart-item-${props.id}`}>
      <h2 className={classes.title}>{props.title}</h2>
      <img src={props.img} alt="icon" className={classes.img}></img>
      <span className={classes.price}> ${props.price}</span>
      <span className={classes.quantity}> x {props.quantity}</span>
      <button className={classes.button} onClick={onRemoveHandler}>
        -
      </button>
    </li>
  );
};
export default CartItems;
