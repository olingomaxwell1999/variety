// CartPage.tsx
'use client'
import { FC } from "react";
import { useCart } from "./useCart";
import CartItem, { CartItem as CartItemType } from "./CartItem";

const generateWhatsAppMessage = (items: CartItemType[]) => {
    let message = 'My Order:\n';
    items.forEach(item => {
        message += `${item.name} x ${item.quantity} = $${item.price}\n`;
    });
    return encodeURIComponent(message);
}

const page: FC = () => {
    const { items, removeItem, totalPrice } = useCart();

    return (
        <div className="container mx-auto py-4 px-4">
            <h1 className="text-2xl mb-4">My Cart</h1>
            <div>
                {items.map((product, index) => (
                    <CartItem
                        key={product.id}
                        product={product}
                        index={index}
                        removeItem={removeItem}
                    />
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <h2>Total: ${totalPrice}</h2>
                <a href={`https://wa.me/?text=${generateWhatsAppMessage(items)}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded">
                    Send to WhatsApp
                </a>
            </div>
        </div>
    );
};

export default page;