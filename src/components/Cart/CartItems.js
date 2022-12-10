import CartContext from "../../store/cart-context";
import { useContext } from "react";
import axios from "axios";

const CartItems = (props) => {
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const cartCntx = useContext(CartContext);

  const onRemoveHandler = (event) => {
    cartCntx.removeItem(props);
    const id = props._id;
    console.log(id);
    axios.delete(
      `https://crudcrud.com/api/789df598ba8e4f94aa8f6e2066a94299/cart${email}/${id}`
      // `https://crudcrud.com/api/05cae29508b64e8ba146f819aaa95639/cart/${id}`
    );
  };

  return (
    <li id={`cart-item-${props.id}`}>
      <div>
        <h2>{props.title}</h2>
        <img src={props.img} alt="icon"></img>
        <span> ${props.price}</span>
        <span> x {props.quantity}</span>
      </div>
      <div>
        <button onClick={onRemoveHandler}>-</button>
      </div>
    </li>
  );
};
export default CartItems;
