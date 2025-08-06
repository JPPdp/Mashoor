'use client';

import { usePathname } from 'next/navigation';
import { getLangData } from '../lib/lang/getLangData';

export function Footer() {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] === 'tr' ? 'tr' : 'en';
    const t = getLangData(lang);

    return (
        <footer className="bg-orange-500 text-white mt-10">
        <div className="max-w-screen-lg mx-auto px-4 py-6 text-center">
            <p className="text-lg font-semibold">{t.welcome}</p>
            <p className="text-sm mt-2">© 2025 Mashoor. All rights reserved.</p>
        </div>
        </footer>
    );
}
