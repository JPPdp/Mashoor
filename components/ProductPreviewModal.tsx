// components/ProductPreviewModal.tsx
'use client';

import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from './CartContext';
import image from 'next/image';
interface ProductPreviewModalProps {
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
    onClose: () => void;
}

export function ProductPreviewModal({ id, name, description, price,image, onClose }: ProductPreviewModalProps) {
    const { addToCart } = useCart();
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-10 relative">
            <button title='a' className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="h-72 bg-orange-100 flex items-center justify-center rounded mb-4">
                <span className="text-4xl text-orange-400">🛍️</span>
            </div>

            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
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
        </div>
    );
}
