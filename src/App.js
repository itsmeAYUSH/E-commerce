import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import Home from "../src/components/route/home/Home";
import About from "../src/components/route/about/About";
import Contact from "./components/Layout/contact/Contact";
import ProductDetail from "./components/Products/ProductDetail";
// import Footer from "./components/Layout/footer/Footer";

const App = (props) => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Switch>  
        <Route path="/store" exact>
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

        <Route path="/store/:product_id">
          <ProductDetail/>
        </Route>
      </Switch>
    </CartProvider>
  );
};

export default App;
