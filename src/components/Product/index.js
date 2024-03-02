import React, { useState } from "react";
import "~/components/Product/Product.scss";

const Product = ({ id, imageUrl }) => {
  return (
    <div className="product_item">
      <img src={imageUrl} alt={`Product ${id}`} className="img-real" />
      <div className="product_blur">
        <img src="./logo-removebg-preview.png" className="img-blur" />
      </div>
    </div>
  );
};

export default Product;
