'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/tr') ? 'TR' : 'EN';
    const [open, setOpen] = useState(false);

    const changeLang = (lang: 'en' | 'tr') => {
        const newPath = `/${lang}`;
        router.push(newPath);
        setOpen(false);
    };

    return (
        <nav className="bg-orange-500 text-white shadow-md">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">🛍️ Mashoor</h1>
            <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="bg-white text-orange-500 font-semibold px-4 py-2 rounded"
            >
                {currentLang}
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
        </div>
        </nav>
    );
}
