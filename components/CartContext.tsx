// components/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    description?: string; // Optional field for product description
};

type CartContextType = {
    cart: Product[];
    showCart: boolean;
    toggleCart: () => void;
    addToCart: (product: Product) => void;
    //removeFromCart: (id: string) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => setShowCart((prev) => !prev);
    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };
    //const removeFromCart = (id: number) => {setCart((prev) => prev.filter((item) => item.id !== id));};
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
        value={{ cart, showCart, toggleCart, addToCart, clearCart }}
        >
        {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};
