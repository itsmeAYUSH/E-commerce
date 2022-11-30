import React from "react";
import classes from './Product.module.css'


const Product = (props) => {
    console.log(props.title)
    return <li className={classes.list}>
        <div  className={classes.div}> 
            <h3>{props.title}</h3>
            <img src={props.image} alt="some images"></img>
            <h1>{props.price}</h1>
            <button>Add To Cart</button>
        </div>
    </li>
}

export default Product;