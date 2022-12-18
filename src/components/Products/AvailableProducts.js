// import classes from "./AvailableItems.module.css";
import Product from "./Product";
import CartContext from "../../store/cart-context";
import { useContext, useEffect } from "react";
import axios from "axios";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const cartCtx = useContext(CartContext);

  const productsArr = [
    {
      id: "1",
      title: "Album 1",
      price: 500,
      imageUrl: "/images/ProductImage/Album-1.png",
    },
    {
      id: "2",
      title: "Album 2",
      price: 300,
      imageUrl: "/images/ProductImage/Album-2.png",
    },
    {
      id: "3",
      title: "Album 3",
      price: 700,
      imageUrl: "/images/ProductImage/Album-3.png",
    },
    {
      id: "4",
      title: "Album 4",
      price: 100,
      imageUrl: "/images/ProductImage/Album-4.png",
    },
  ];

  let emailId = localStorage.getItem("email").replace(".", "").replace("@", "");
  // let email = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/eab7e1298555456487b04f8cd21c026b/cart${emailId}`
      )
      .then((res) => {
        cartCtx.initilizeCart(res.data);
      });
  }, []);

  return (
    <div className={classes.content}>
      <h2 className={classes.title}>Music Albums</h2>
      <ul>
        {productsArr.map((item) => {
          return (
            <Product
              key={Math.random()}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.imageUrl}
              quantity={1}
              _id={item._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableProducts;
