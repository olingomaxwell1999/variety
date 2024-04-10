// "use client";
// import React, { useEffect, useState } from "react";
// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   images: { src: string }[];
// }

// interface ApiResponse {
//   products: Product[];
// }

// const page: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const consumerKey = "ck_bacd2a3d505aad4203727d279eeacb384e199aba";
//   const consumerSecret = "cs_e520d5173291fdf6ef29b423cbb762d6ef081c48";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "https://variety.co.ke/wp-json/wc/v3/products",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               // Add your WordPress authentication credentials here
//               Authorization: `Basic ${Buffer.from(
//                 `${consumerKey}:${consumerSecret}`
//               ).toString("base64")}`,
//             },
//           }
//         );
//         const data: ApiResponse = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {products ? (
//         products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <img
//               src={product.images[0]?.src || "/placeholder.jpg"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-bold text-lg mb-2">{product.name}</h3>
//               <p className="text-gray-700 font-semibold">{product.price}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default page;
