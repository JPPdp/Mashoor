// components/FavoritesPanel.tsx
'use client';
import { useFavorites } from './FavoritesContext';
import Image from 'next/image';
export const FavoritesPanel = () => {

    const { favorites, showPanel, togglePanel } = useFavorites();

    if (!showPanel) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">

            <div className="max-w-screen-xl mx-auto  relative bg-orange-500">
                <button onClick={togglePanel} className=" absolute top-4 right-4  px-3 py-1 text-sm rounded hover:bg-gray-300 dark:hover:bg-orange-600 transition">
                ✕ Close
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                My Favorites
                </h2>
                <div className="max-w-screen-xl bg-white px-4 py-6">
                    {favorites.length === 0 ? (
                    <p className="text-center text-gray-600 dark:text-gray-400">No favorites yet.</p>
                    ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {favorites.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 700 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
                        >
                            <div className="relative w-full h-48">
                            <Image
                                src={'/placeholder.png'}
                                alt={product.name}
                                fill
                                className="object-cover bg-orange-500 p-4"
                            />
                            </div>
                            <div className="p-4">
                            <p className="font-semibold text-sm text-gray-800 opacity-60 line-clamp-2">
                                {product.name + ' - ' + product.id}
                            </p>
                            <p className="text-orange-500 font-bold mt-2 text-base">
                                ${product.price ? product.price : '0.00'}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};
