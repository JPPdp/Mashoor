// components/ProductCard.tsx
'use client';

import { useState } from 'react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ProductPreviewModal } from './ProductPreviewModal';
import { useFavorites } from './FavoritesContext';
import { useCart } from './CartContext';

interface ProductCardProps {
    id: number;
    image: string;
    price: string;
    name: string;
    description: string;
}

export function ProductCard({
    id,
    image,
    price,
    name,
    description,
}: ProductCardProps) {
    const [open, setOpen] = useState(false);
    const { favorites, toggleFavorite } = useFavorites();
    const { addToCart } = useCart();
    const isFavorited = favorites.some((p) => p.id === id);

    return (
    <>
        <div
            className="flex-shrink-0 bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-2 w-full max-w-lg cursor-pointer group"
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
              e.stopPropagation(); // prevent modal opening
              toggleFavorite({ id, name, price }); // Add more fields if needed
            }}
            >
                <HeartIcon
                className={`h-6 w-6 transition-colors ${
                    isFavorited ? 'text-red-500' : 'text-gray-300 group-hover:text-red-500'
                }`}
                />
            </button>
        </div>
            <h2 className="text-sm font-semibold text-gray-800 truncate">{name + ' - ' + id}</h2>
            <p className="text-xs text-gray-500 mb-1 line-clamp-2">{description}</p>
            <p className="text-lg font-bold text-orange-500">{price}</p>
            {/* Add to Cart Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // prevent modal
                    addToCart({ id, name, price, image, description });
                }}
                className="mt-2 w-full bg-orange-500 text-white py-1.5 rounded text-sm font-medium hover:bg-orange-600 transition"
                >
                <div className="flex items-center justify-center gap-2">
                    <ShoppingCartIcon className="w-4 h-4" />
                    Add to Cart
                </div>
            </button>
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
