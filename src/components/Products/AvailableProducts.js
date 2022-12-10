// import classes from "./AvailableItems.module.css";
import Product from "./Product";
import CartContext from "../../store/cart-context";
import { useContext, useEffect } from "react";
import axios from "axios";

const AvailableProducts = () => {
  const cartCtx = useContext(CartContext);

  const productsArr = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl: "/images/ProductImage/Album-1.png",
    },
    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl: "/images/ProductImage/Album-2.png",
    },
    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "/images/ProductImage/Album-3.png",
    },
    {
      id: "4",
      title: "Blue Color",
      price: 100,
      imageUrl: "/images/ProductImage/Album-4.png",
    },
  ];

  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/789df598ba8e4f94aa8f6e2066a94299/cart${email}`
      )
      .then((res) => {
        cartCtx.initilizeCart(res.data);
      });
  }, []);

  return (
    <div>
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
