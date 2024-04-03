// CartItem.tsx
import { FC } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  id: string;
  //   product: object;
}

interface Props {
  product: CartItem;
  index: number;
  removeItem: (index: number) => void;
}

const CartItem: FC<Props> = ({ product, index, removeItem }) => (
  <div className="flex justify-between my-2">
    <div>
      <h2 className="text-lg">{product.name}</h2>
      <p>${product.price}</p>
    </div>
    <button
      onClick={() => removeItem(index)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Remove
    </button>
  </div>
);

export default CartItem;
