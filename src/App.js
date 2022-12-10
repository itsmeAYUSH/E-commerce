import { useState, useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import Products from "./components/Products/Products";
// import CartProvider from "./store/CartProvider";
import Home from "../src/components/route/home/Home";
import About from "../src/components/route/about/About";
import Contact from "./components/Layout/contact/Contact";
import AuthContext from "./store/auth-context";
import AuthForm from "./components/Authentication/AuthForm";
// import Footer from "./components/Layout/footer/Footer";
import ProductDetails from "./components/prodDetails/ProductDetails";
import axios from "axios";
import CartContext from "./store/cart-context";

const App = () => {

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  if(!localStorage.getItem('email')) {
    localStorage.setItem("email","")
  }
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  useEffect(() => {
    if (!email) return;
    axios
      .get(
        `https://crudcrud.com/api/789df598ba8e4f94aa8f6e2066a94299/cart${email}`
      )
      .then((res) => {
        const data = res.data;
        for (const key in data) {
          const item = data[key];
          item._id = key;
          cartCtx.mapID(item);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [email, cartCtx]);

  return (
    <div>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      {authCtx.isLoggedIn && <Header onShowCart={showCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>

        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthForm />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store" exact>
            <Products />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/about">
            <About />
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/home">
            <Home />
          </Route>
        )}

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/products/:product_id">
          <ProductDetails />
        </Route>

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
