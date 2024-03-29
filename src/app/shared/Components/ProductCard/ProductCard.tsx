import Image from "next/image";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  valuebefore: string;
  valueafter: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  description,
  valuebefore,
  valueafter,
}) => (
  <div className="product-card">
    <div className="image-area">
      <img src={image} alt={title} />
    </div>
    <div className="textareacontainer p-2 flex">
      <div className="text-area ">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>
          {valueafter} <span>{valuebefore}</span>
        </h4>
      </div>
      <div className="icon-area">
        <FaShoppingBag className="ml-7 text-lg" />
      </div>
    </div>
  </div>
);

export default ProductCard;
