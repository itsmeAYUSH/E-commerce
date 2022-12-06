import CartContext from "../../store/cart-context";
import { useContext } from "react";

const CartItems = (props) => {
  const cartCntx = useContext(CartContext);
  const onAddHandler = () => {
    console.log(props)
    cartCntx.addItem(props)
  };

  return (
    <li id={`cart-item-${props.id}`}>
      <div>
        <h2>{props.title}</h2>
        <img src={props.img} alt='icon'></img>
        <span>$ {props.price}</span>
        <span> x {props.quantity}</span>
      </div>
      <div>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};
export default CartItems;
