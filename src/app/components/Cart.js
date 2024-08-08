'use client'
import { useCart } from '../components/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
  const { cart, removeFromCart, addToCart, getTotalPrice, isItemQuantityOne, clearCart } = useCart();

  // Function to get the quantity of a specific item in the cart
  const getItemQuantity = (itemId) => {
    return cart.filter(item => item.id === itemId).length;
  };

  // Function to get unique items in the cart
  const getUniqueItems = () => {
    const uniqueItems = [];
    cart.forEach(item => {
      if (!uniqueItems.some(uniqueItem => uniqueItem.id === item.id)) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {getUniqueItems().map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image src={item.image} alt={item.title} width={100} height={100} className="w-20 h-20 object-cover mr-4" />
              {/* <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" /> */}

              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Quantity: {getItemQuantity(item.id)}</span>
                  
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`bg-red-500 text-white px-2 py-1 rounded ${
                      isItemQuantityOne(item.id) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={isItemQuantityOne(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <p className="font-semibold">
                ${(item.price * getItemQuantity(item.id)).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
            
            <div className='flex justify-between '> 
            <Link href="/checkout">
            <p className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                Proceed to Checkout
              </p>
            </Link>
             <button onClick={clearCart} className='mt-6'>
             <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
              Clear Cart
             </p>
              </button>
             </div>
             </div>
        </>
      )}
    </div>
  );
}
