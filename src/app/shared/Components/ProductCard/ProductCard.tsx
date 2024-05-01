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
            Ksh {product.valueafter} <span>{product.valuebefore}</span>
          </h4>
        </div>
        <a
          href={`https://wa.me/?text=Order%20details:%0A%0ATitle:%20${product.name}%0A%0A${product.permalink}%0A%0A${product.valuebefore}%0A${product.valueafter}`}
          className="icon-area ml-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="whatsapp"
          />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
