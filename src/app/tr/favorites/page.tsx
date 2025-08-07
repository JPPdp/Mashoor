// app/[lang]/favorites/page.tsx
'use client';

import { useFavorites } from '../../../../components/FavoritesContext';
import { ProductCard } from '../../../../components/ProductCard';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="p-10 bg-gray-950 min-h-screen">
        <h1 className="text-2xl font-bold text-white mb-6">❤️ Your Favorites</h1>
        {favorites.length === 0 ? (
            <p className="text-gray-400">You havent added any favorites yet.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
            </div>
        )}
        </main>
    );
}
