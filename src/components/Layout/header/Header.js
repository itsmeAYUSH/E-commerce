
import NavBar from './NavBar/NavBar';
import Cart from './Cart/Cart';
import classes from './Header.module.css';

const Header =() =>{
    return (
        <div className={classes.header}>
            <NavBar>
            <Cart/>
            </NavBar>
        </div>
    )
}

export default Header;