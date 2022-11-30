import { useState } from "react";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import Products from "./components/Products/Products";
// import Footer from "./components/Layout/footer/Footer";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <div>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Products />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
