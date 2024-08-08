'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PaginationControls({ currentPage, totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="mt-8 flex justify-center">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <Link href={createPageURL(currentPage - 1)}
          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'pointer-events-none' : ''}`}
        >
          Previous
        </Link>
        {[...Array(totalPages).keys()].map((number) => (
          <Link
            key={number + 1}
            href={createPageURL(number + 1)}
            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
              currentPage === number + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number + 1}
          </Link>
        ))}
        <Link href={createPageURL(currentPage + 1)}
          className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === totalPages ? 'pointer-events-none' : ''}`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
}
