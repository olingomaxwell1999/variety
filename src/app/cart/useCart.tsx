// // useCart.tsx
// import { useState } from "react";

// export interface CartItem {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
// }

// export const useCart = () => {
//     const [items, setItems] = useState<CartItem[]>([]);

//     const addItem = (item: CartItem) => {
//         setItems(prevItems => {
//             const foundItem = prevItems.find((i) => i.id === item.id);
//             if (foundItem) {
//                 // Update the quantity of an existing item
//                 return prevItems.map((i) =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//                 );
//             } else {
//                 // Add a new item
//                 return [...prevItems, item];
//             }
//         });
//     };

//     const removeItem = (id: string) => {
//         setItems(prevItems => prevItems.filter((item) => item.id !== id));
//     };

//     const totalPrice = items.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

//     return { items, addItem, removeItem, totalPrice };
// };
