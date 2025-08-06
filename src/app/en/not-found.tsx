'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900">
      <div className="max-w-md">
        <div className="text-7xl mb-4">🛍️</div>
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Oops! Page not found.</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Looks like this page is missing or no longer available. 
          Let’s help you find something you’ll love!
        </p>
        <Link
          href="http://localhost:3000/en"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          🛒 Go Back to Home
        </Link>
      </div>
    </div>
  );
}
