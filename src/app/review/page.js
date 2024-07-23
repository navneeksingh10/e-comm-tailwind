// 'use client'

// import { useRouter } from 'next/navigation'
// import { useCart } from '../components/CartContext';
// import { useEffect, useState } from 'react';

// export default function Review({ params }) {
//   const router = useRouter();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${params.id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data))
//       .catch(error => console.error('Error fetching product:', error));
//   }, [params.id]);

//   const handleAddToBag = () => {
//     if (product) {
//       addToCart(product);
//       router.push('/cart');
//     }
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="bg-white">
//       <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             <li>
//               <div className="flex items-center">
//                 <a href="/" className="mr-2 text-sm font-medium text-gray-900">Products</a>
//                 <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
//                   <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                 </svg>
//               </div>
//             </li>
//             <li className="text-sm">
//               <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.title}</a>
//             </li>
//           </ol>
//         </nav>

//         <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
//           <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
//             <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center" />
//           </div>
//         </div>

//         <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
//           <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
//           </div>

//           <div className="mt-4 lg:row-span-3 lg:mt-0">
//             <h2 className="sr-only">Product information</h2>
//             <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

//             <form className="mt-10">
//               <button
//                 type="button"
//                 className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 onClick={handleAddToBag}
//               >
//                 Add to bag
//               </button>
//             </form>
//           </div>

//           <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//             <div>
//               <h3 className="sr-only">Description</h3>
//               <div className="space-y-6">
//                 <p className="text-base text-gray-900">{product.description}</p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-sm font-medium text-gray-900">Category</h3>
//               <div className="mt-4">
//                 <p className="text-sm text-gray-600">{product.category}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }