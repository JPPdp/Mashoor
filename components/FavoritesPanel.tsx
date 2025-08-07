// components/FavoritesPanel.tsx
'use client';
import { useFavorites } from './FavoritesContext';
import Image from 'next/image';
import { mockProducts } from '../data/mockProducts';
import { shuffleArray } from '../utils/shuffle';
export const FavoritesPanel = () => {
    const { favorites, showPanel, togglePanel } = useFavorites();
    const shuffledProducts = shuffleArray(mockProducts);
    
    if (!showPanel) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 bg-opacity-95 overflow-y-auto">
        <div className="max-w-screen-xl mx-auto px-4 py-6 relative">
            <button
            onClick={togglePanel}
            className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
            ✕ Close
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            💖 My Favorites
            </h2>

            {favorites.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">No favorites yet.</p>
            ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favorites.map((product) => (
                <div
                    key={product.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
                >
                    <div className="relative w-full h-48">
                    <Image
                        src={'/placeholder.png'}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-4">
                    <p className="font-semibold text-sm text-gray-800 opacity-60 dark:text-white line-clamp-2">
                        {product.name}
                    </p>
                    <p className="text-red-500 font-bold mt-2 text-base">
                        ${'0.00'}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
};
