// import classes from "./AvailableItems.module.css";
import Product from "./Product";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = (props) => {
  return (
    <div>
      <ul>
        {productsArr.map((item)=>{
          return (
            <Product title={item.title} price={item.price} image={item.imageUrl}/>
          )
        })}
      </ul>
    </div>
  );
};

export default AvailableProducts;
