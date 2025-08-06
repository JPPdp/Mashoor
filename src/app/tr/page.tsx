'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import { ProductCard } from '../../../components/ProductCard';
import { mockProducts } from '../../../data/mockProducts';
import { getLangData } from '../../../lib/lang/getLangData';
import { shuffleArray } from '../../../utils/shuffle';

export default function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const lang = pathname.split('/')[1] === 'tr' ? 'tr' : 'en';
  const t = getLangData(lang);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  // Ürünleri karıştır
  const shuffledProducts = shuffleArray(mockProducts);

  // Arama sorgusuna göre filtrele
  const filteredProducts = shuffledProducts.filter((product) => {
    const translated =
      t.products[product.id - 1] ??
      t.products[Math.floor(Math.random() * t.products.length)];

    return (
      translated.name.toLowerCase().includes(searchQuery) ||
      translated.description.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <main className="w-full px-4 py-10 max-w-screen-xl mx-auto">
      {searchQuery && (
        <p className="mb-4 text-sm text-gray-500">
          Arama sonuçları: <span className="font-semibold">{searchQuery}</span>
        </p>
      )}

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400">Ürün bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {filteredProducts.map((product) => {
            const translated =
              t.products[product.id - 1] ??
              t.products[Math.floor(Math.random() * t.products.length)];

            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={translated.name}
                description={translated.description}
                price={product.price}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
