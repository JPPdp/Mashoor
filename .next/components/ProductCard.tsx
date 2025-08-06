'use client';

import { HeartIcon } from '@heroicons/react/24/solid';
import { getLangData } from '../lib/lang/getLangData';
import { usePathname } from 'next/navigation';

export function ProductCard() {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] === 'tr' ? 'tr' : 'en';
    const langData = getLangData(lang);

    return (
        <div className="group relative w-full max-w-xs overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Product image */}
        <div className="h-44 w-full bg-orange-100 flex items-center justify-center">
            {/* Simulated image */}
            <span className="text-orange-400 font-bold">Image</span>
        </div>

        {/* Favorite button */}
        <button className="absolute top-2 right-2 z-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow hover:scale-110 transition">
            <HeartIcon className="h-5 w-5 text-gray-300 dark:text-gray-600 hover:text-red-500" />
        </button>

        {/* Product info */}
        <div className="px-3 py-3 text-left">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">
            {langData.productName}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
            {langData.productDescription}
            </p>
            <p className="text-base font-bold text-orange-500 mt-2">$9.99</p>
        </div>
        </div>
    );
}
