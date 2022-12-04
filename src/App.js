import { useState } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import Home from '../src/components/route/home/Home'
import About from '../src/components/route/about/About'
import Contact from "./components/Layout/contact/Contact";
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
    // <CartProvider>
    //   {cartIsShow && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />
    //   <Products />
    //   {/* <Footer /> */}
    // </CartProvider>
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
        <Route path="/store">
          <Products />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
    </CartProvider>
  );
};

export default App;
