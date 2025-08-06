// components/ProductCard.tsx
'use client';

import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ProductPreviewModal } from './ProductPreviewModal';

interface ProductCardProps {
    id: number;
    image: string;
    price: string;
    name: string;
    description: string;
}

export function ProductCard({ id, image, price, name, description }: ProductCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-2 w-full max-w-sm cursor-pointer group"
            onClick={() => setOpen(true)}
        >
            <div className="relative overflow-hidden rounded-md mb-2">
            <div className="h-[220px] bg-orange-100 flex items-center justify-center">
                <span className="text-orange-400 font-bold">🛍️</span>
            </div>
            <button
                title="Add to Favorites"
                className="absolute top-2 right-2 z-10"
                onClick={(e) => {
                e.stopPropagation(); // prevent modal trigger
                }}
            >
                <HeartIcon className="h-6 w-6 text-gray-300 group-hover:text-red-500 transition-colors" />
            </button>
            </div>
            <h2 className="text-sm font-semibold text-gray-800 truncate">{name}</h2>
            <p className="text-xs text-gray-500 mb-1 line-clamp-2">{description}</p>
            <p className="text-lg font-bold text-orange-500">{price}</p>
        </div>

        {open && (
            <ProductPreviewModal
            name={name}
            description={description}
            price={price}
            onClose={() => setOpen(false)}
            />
        )}
        </>
    );
}
