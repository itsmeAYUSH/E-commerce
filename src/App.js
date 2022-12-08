import { useState, useContext } from "react";
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

const App = () => {
  const authCtx = useContext(AuthContext);
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
