import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
    const params = useParams();

  return (
    <Fragment>
      {params.product_id === "1" && (
        <div>
          <h1>COLOURS</h1>
          <img src="/images/ProductImage/Album-1.png" alt="productImage" />
          <div>
            <h3> Reviews </h3>
            <p> @yushi216 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Great product. Must buy</p>
            <p> rhea43 </p>
            <p>⭐⭐</p>
            <p> Do not buy this</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
          </div>
        </div>
      )}
       {params.product_id === "2" && (
        <div>
          <h1>COLOURS</h1>
          <img src="/images/ProductImage/Album-2.png" alt="productImage" />
          <div>
            <h3> Reviews </h3>
            <p> @yushi216 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Great product. Must buy</p>
            <p> rhea43 </p>
            <p>⭐⭐</p>
            <p> Do not buy this</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
          </div>
        </div>
      )}
       {params.product_id === "3" && (
        <div>
          <h1>COLOURS</h1>
          <img src="/images/ProductImage/Album-3.png" alt="productImage" />
          <div>
            <h3> Reviews </h3>
            <p> @yushi216 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Great product. Must buy</p>
            <p> rhea43 </p>
            <p>⭐⭐</p>
            <p> Do not buy this</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
          </div>
        </div>
      )}
       {params.product_id === "4" && (
        <div>
          <h1>COLOURS</h1>
          <img src="/images/ProductImage/Album-4.png" alt="productImage" />
          <div>
            <h3> Reviews </h3>
            <p> @yushi216 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Great product. Must buy</p>
            <p> rhea43 </p>
            <p>⭐⭐</p>
            <p> Do not buy this</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
            <p> aryanshi178 </p>
            <p>⭐⭐⭐⭐</p>
            <p> Excellent will buy again</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
