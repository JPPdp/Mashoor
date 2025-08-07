'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useFavorites } from './FavoritesContext';
import { useCart } from './CartContext';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';


export function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/tr') ? 'tr' : 'en';
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { cart, toggleCart } = useCart();
    const { togglePanel, favorites } = useFavorites();

    const changeLang = (lang: 'en' | 'tr') => {
        const newPath = `/${lang}`;
        router.push(newPath);
        setOpen(false);
    };

    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/${currentLang}?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
    };    

    return (
        <nav className="bg-orange-500 text-white shadow-md">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto gap-2">
            <h1 className="text-xl font-bold tracking-wide">🛍️ Mashoor</h1>

            {/* Language Dropdown */}
            <div className="relative">
                <button
                onClick={() => setOpen(!open)}
                className="bg-white text-orange-500 font-semibold px-4 py-2 rounded"
                >
                {currentLang.toUpperCase()}
                </button>
                {open && (
                <div className="absolute right-0 mt-2 bg-white text-orange-500 rounded shadow z-10">
                    <button
                    onClick={() => changeLang('en')}
                    className="block px-4 py-2 hover:bg-orange-100 w-full text-left"
                    >
                    EN
                    </button>
                    <button
                    onClick={() => changeLang('tr')}
                    className="block px-4 py-2 hover:bg-orange-100 w-full text-left"
                    >
                    TR
                    </button>
                </div>
                )}
            </div>

            <Link
                href="/en/asdasd"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
                Test - 404 Error
            </Link>
        </div>

        {/* Search + Favorites */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          {/* Search Form */}
            <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'tr' ? 'Ürün ara...' : 'Search product...'}
                className="rounded-l px-4 py-2 text-gray-800 w-full sm:w-64"
                />
                <button
                type="submit"
                className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-r hover:bg-orange-100 transition"
                >
                🔍
                </button>
            </form>

                    {/* Favorites Button */}
                    <button
                        onClick={togglePanel}
                        className="bg-white text-orange-500 font-semibold px-4 py-2 rounded hover:bg-orange-100 transition">
                        ❤️ Favorites ({favorites.length})
                    </button>

                    <button onClick={toggleCart} className="relative">
                        <ShoppingCartIcon className="w-6 h-6" />
                            {cart.length > 0 && (
                            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
