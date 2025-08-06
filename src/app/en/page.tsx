import { getLangData } from '../../../lib/lang/getLangData';
import { ProductCard } from '../../../components/ProductCard';

export default function Page() {
  const lang = 'en';
  const t = getLangData(lang);

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
            {t.welcome}
          </h1>
          <p className="text-gray-700 text-lg">{t.description}</p>
        </div>

        <div className="flex justify-center">
          <ProductCard />
        </div>
      </main>
    </>
  );
}
