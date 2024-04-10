import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Productcarde: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default Productcarde;
