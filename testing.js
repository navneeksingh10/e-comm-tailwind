 <div class="flex">
                <div class="relative flex">
                   {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                  <button id="womenButton" type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Women </button>
                </div>
              
                
                  {/* 'Women' flyout menu, show/hide based on flyout menu state.
              
                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0" */}
                
                   <div id="womenDropdown" class="absolute inset-x-0 top-full text-sm text-gray-500 hidden z-50">
                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
              
                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-cover object-center"></img>
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                          <div class="group relative text-base sm:text-sm">
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
                        <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div>
                            <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Tops</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Dresses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Denim</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Significant Other</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <script>
                document.addEventListener("DOMContentLoaded", function() {
                  const womenButton = document.getElementById('womenButton');
                  const womenDropdown = document.getElementById('womenDropdown');
              
                  womenButton.addEventListener('click', function() {
                    const expanded = womenButton.getAttribute('aria-expanded') === 'true' || false;
                    womenButton.setAttribute('aria-expanded', !expanded);
                    womenDropdown.classList.toggle('hidden');
                  });
                });
              </script> */}
              
              <div class="flex">
                <div class="relative flex">
                   {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800"  */}
                  <button id="menButton" type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">
                    Men
                  </button>
                </div>
              
                
                  {/* 'Men' flyout menu, show/hide based on flyout menu state.
              
                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0" */}
                
                <div id="menDropdown" class="absolute inset-x-0 top-full text-sm text-gray-500 hidden z-50">
                   {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow  */}
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
              
                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div class="group relative text-base sm:text-sm">
                            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-cover object-center"></img>
                            </div>
                            <a href="#" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                          <div class="group relative text-base sm:text-sm">
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
                        <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div>
                            <p id="Men-Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Men-Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Tops</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Men-Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Men-Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Watches</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p id="Men-Brands-heading" class="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Men-Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Full Nelson</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <script>
                document.addEventListener("DOMContentLoaded", function() {
                  const menButton = document.getElementById('menButton');
                  const menDropdown = document.getElementById('menDropdown');
              
                  menButton.addEventListener('click', function() {
                    const expanded = menButton.getAttribute('aria-expanded') === 'true' || false;
                    menButton.setAttribute('aria-expanded', !expanded);
                    menDropdown.classList.toggle('hidden');
                  });
                });
              </script> */}











              'use client'
 
import { useRouter } from 'next/navigation'

export default function Review() {
  const router = useRouter()  
  return (
      <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
          </li>
        </ol>
      </nav>
  
       {/* Image gallery  */}
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center"></img>
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center"></img>
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center"></img>
          </div>
        </div>
        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"></img>
        </div>
      </div>
  
       {/* Product info */}
      <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
        </div>
  
         {/* Options  */}
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">$192</p>
  
           {/* Reviews  */}
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                 {/* Active: "text-gray-900", Default: "text-gray-200"  */}
                <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg class="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="sr-only">4 out of 5 stars</p>
              <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
            </div>
          </div>
  
          <form class="mt-10">
           
          <button type="button" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => router.push('/')}>
          Add to bag    
          </button>

            {/* <a href="">
              <button type="button" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"></button>
            </a> */}
            
          </form>
        </div>
  
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
           {/* Description and details */}
          <div>
            <h3 class="sr-only">Description</h3>
  
            <div class="space-y-6">
              <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
            </div>
          </div>
  
          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
  
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>
  
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>
  
            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }














  