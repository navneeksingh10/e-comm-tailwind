'use client'
import React from "react";
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../components/CartContext';
import Image from "next/image";

function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  return (
    <navbar>
      <div className="bg-white">
        {/* ... (keep the existing mobile menu code) ... */}


{/* <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

<div class="fixed inset-0 z-40 flex">
 
  <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
    <div class="flex px-4 pb-2 pt-5">
      <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Close menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="mt-2">
      <div class="border-b border-gray-200">
        <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
          <button id="tabs-1-tab-1" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
          <button id="tabs-1-tab-2" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
        </div>
      </div>

      <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
        <div class="grid grid-cols-2 gap-x-4">
          <div class="group relative text-sm">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-cover object-center"></img>
            </div>
            <a href="#" class="mt-6 block font-medium text-gray-900">
              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
              New Arrivals
            </a>
            <p aria-hidden="true" class="mt-1">Shop now</p>
          </div>
          <div class="group relative text-sm">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-cover object-center"></img>
            </div>
            <a href="#" class="mt-6 block font-medium text-gray-900">
              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
              Basic Tees
            </a>
            <p aria-hidden="true" class="mt-1">Shop now</p>
          </div>
        </div>
        <div>
          <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
          <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
            </li>
          </ul>
        </div>
        <div>
          <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
          <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
            </li>
          </ul>
        </div>
        <div>
          <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
          <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Significant Other</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="tabs-1-panel-2" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
        <div class="grid grid-cols-2 gap-x-4">
          <div class="group relative text-sm">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-cover object-center"></img>
            </div>
            <a href="#" class="mt-6 block font-medium text-gray-900">
              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
              New Arrivals
            </a>
            <p aria-hidden="true" class="mt-1">Shop now</p>
          </div>
          <div class="group relative text-sm">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-cover object-center"></img>
            </div>
            <a href="#" class="mt-6 block font-medium text-gray-900">
              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
              Artwork Tees
            </a>
            <p aria-hidden="true" class="mt-1">Shop now</p>
          </div>
        </div>
        <div>
          <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
          <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
            </li>
          </ul>
        </div>
        <div>
          <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
          <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
            </li>
          </ul>
        </div>
        <div>
          <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
          <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
            </li>
            <li class="flow-root">
              <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="space-y-6 border-t border-gray-200 px-4 py-6">
      <div class="flow-root">
        <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
      </div>
      <div class="flow-root">
        <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
      </div>
    </div>

    <div class="space-y-6 border-t border-gray-200 px-4 py-6">
      <div class="flow-root">
        <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
      </div>
      <div class="flow-root">
        <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
      </div>
    </div>

    <div class="border-t border-gray-200 px-4 py-6">
      <a href="#" class="-m-2 flex items-center p-2">
        <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0"></img>
        <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
        <span class="sr-only">, change currency</span>
      </a>
    </div>
  </div>
</div>
</div> */}

        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* Mobile menu toggle */}
                {/* <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={toggleMobileMenu}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button> */}

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only"></span>
                    <Image className="h-8 w-auto" src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} width={20} height={20} alt="" />
                  </Link>
                </div>

                {/* navigation links */}
                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <Link href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      Home
                    </Link>
                    <Link href="/about" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      About Us
                    </Link>
                  </div>
                </div>

                <div className="ml-auto flex items-center">

                  {/* Cart */}
                
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link href="/cart" className="group -m-2 flex items-center p-2">
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </navbar>
  );
}

export default Navbar;