// components/ProductPreviewModal.tsx
'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProductPreviewModalProps {
    name: string;
    description: string;
    price: string;
    onClose: () => void;
}

export function ProductPreviewModal({ name, description, price, onClose }: ProductPreviewModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button title='a' className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="h-48 bg-orange-100 flex items-center justify-center rounded mb-4">
            <span className="text-4xl text-orange-400">🛍️</span>
            </div>

            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <p className="text-lg font-bold text-orange-500">{price}</p>
        </div>
        </div>
    );
}
