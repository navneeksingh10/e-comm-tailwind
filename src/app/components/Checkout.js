'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../components/CartContext';

export default function Checkout() {
  const router = useRouter();
  const {clearCart} = useCart();

  useEffect(() => {
    
  },[router, clearCart])

  useEffect(() => {
    const timer = setTimeout(() => {
      clearCart();
      router.push('/');  
    }, 3000);

    return () => clearTimeout(timer);
  }, [router, clearCart]);

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-5">Thank you for your order!</h1>
      <p className="text-xl">You will be redirected to the home page shortly.</p>
    </div>
  );
}