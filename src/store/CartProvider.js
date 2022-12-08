import { useContext, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const CartCtx = useContext(CartContext);
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
  };
  const emptyCartHandler = () => {
    setItems([]);
  }
  const initializeCartHandler = (items) => {
    setItems(items)

  }
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    // removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
    initilizeCart: initializeCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

