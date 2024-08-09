import Link from "next/link";
import Image from "next/image";
import PaginationControls from "../components/PaginationControls";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Products({ searchParams }) {
  const products = await getProducts();
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const productsPerPage = 8;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="mt-16">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link href={`/review/${product.id}`}>
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={200} 
                    height={200} 
                    priority={true}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/review/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <PaginationControls 
          currentPage={page} 
          totalPages={totalPages} 
        /> */}
      </div>
    </div>
  );
}