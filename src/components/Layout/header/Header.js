
// import NavBar from './NavBar/NavBar';
// import Cart from './Cart/Cart';
// import classes from './Header.module.css';

// const Header =() =>{
//     return (
//         <div className={classes.header}>
//             <NavBar>
//             <Cart/>
//             </NavBar>
//         </div>
//     )
// }

// export default Header;


import React, { Fragment } from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <span>HOME</span>
        <span>STORE</span>
        <span>ABOUT</span>

        <button className={classes.button} onClick={props.onShowCart}> Cart </button>
        <span> 0 </span>
      </header>
      <h1 className={classes.h1}> The Generics </h1>

      <div>
        <h2 className={classes.music}> MUSIC </h2>
      </div>
    </Fragment>
  );
};
export default Header;