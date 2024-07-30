import Link from 'next/link';
import Image from "next/image";
import CartButton from '../components/CartButton'; 

function Navbar() {
  return (
    <nav>
      <div className="bg-white">
        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only"></span>
                    <Image 
                      className="h-8 w-auto" 
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
                      width={20} 
                      height={20} 
                      alt="" 
                    />
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
                    <CartButton />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </nav>
  );
}

export default Navbar;