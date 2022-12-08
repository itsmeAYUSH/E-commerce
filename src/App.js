import { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Layout/header/Header";
import Cart from "../src/components/Cart/Cart";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import Home from "../src/components/route/home/Home";
import About from "../src/components/route/about/About";
import Contact from "./components/Layout/contact/Contact";
import ProductDetail from "./components/Products/ProductDetail";
import AuthContext from "./store/auth-context";
import AuthForm from "./components/Authentication/AuthForm";
// import Footer from "./components/Layout/footer/Footer";

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
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>

        {authCtx.isLoggedIn && (
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

        <Route path="/store/:product_id">
          <ProductDetail />
        </Route>

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      {/* <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        <Route path="/auth">
          <AuthForm />
        </Route>
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
          <ProductDetail />
        </Route>
      </Switch> */}
    </CartProvider>
  );
};

export default App;
