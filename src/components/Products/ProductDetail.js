// import productContext from "../../store/product-context";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const ProductDetail = (props) => {
  // const productCtx = useContext(productContext);
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {/* {cartCtx.title}
      {cartCtx.totalAmount}
      {cartCtx.imageUrl} */}
      <img src={props.image} alt="products"></img>
      <img
        src="/images/ProductImage/Album-1.png"
        alt="Website"
      ></img> 
      <h1>COLOURS</h1>
    </div>
  );
};

export default ProductDetail;
