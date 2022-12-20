import React, { useState, useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import AvailableProducts from "./components/Products/AvailableProducts";
import Home from "../src/components/route/home/Home";
import About from "../src/components/route/about/About";
import Contact from "./components/Layout/contact/Contact";
import AuthContext from "./store/auth-context";
import AuthForm from "./components/Authentication/AuthForm";
import ProductDetails from "./components/prodDetails/ProductDetails";
import CartContext from "./store/cart-context";
import Footer from "./components/Layout/footer/Footer";

const App = () => {
  const cartCtx = useContext(CartContext);
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
  const authCtx = useContext(AuthContext);

  let emailId = localStorage.getItem("email").replace(".", "").replace("@", "");
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  useEffect(() => {
    if (!emailId) return;
    axios
      .get(
        `https://crudcrud.com/api/4cc378de37cc403ba387f8af4bc5cf01/cart${emailId}`
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
  }, [emailId, cartCtx]);

  return (
    <div>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      {authCtx.isLoggedIn && <Header onShowCart={showCartHandler} />}
      <Switch>
        {!authCtx.isLoggedIn && (
          <Route path="/" exact>
            <AuthForm />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/" exact>
            <AvailableProducts />
          </Route>
        )}

        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthForm />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store" exact>
            <AvailableProducts />
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
      <Footer />
    </div>
  );
};

export default App;
