// import classes from "./AvailableItems.module.css";
import Product from "./Product";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "/images/ProductImage/Album-1.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "/images/ProductImage/Album-2.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "/images/ProductImage/Album-3.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "/images/ProductImage/Album-4.png",
  },
];

const AvailableProducts = (props) => {
  return (
    <div>
      <ul>
        {productsArr.map((item) => {
          return (
            <Product
              title={item.title}
              price={item.price}
              image={item.imageUrl}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default AvailableProducts;
