import React from "react";
import { Product } from "../../types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-area">
        {product.image.length > 0 && (
          <img src={product.image[0].src} alt={product.image[0].alt} />
        )}
      </div>

      <div className="textareacontainer p-2 flex">
        <div className="text-area">
          <h3>{product.name}</h3>
          {/* <p>{product.permalink}</p>*/}
          <h4>
            {product.valueafter} <span>{product.valuebefore}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
