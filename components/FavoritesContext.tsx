// components/FavoritesContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
    id: number;
    name: string;
  // other fields
};

interface FavoritesContextType {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    showPanel: boolean;
    togglePanel: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);
    const [showPanel, setShowPanel] = useState(false);

    const toggleFavorite = (product: Product) => {
        setFavorites((prev) =>
        prev.some((p) => p.id === product.id)
            ? prev.filter((p) => p.id !== product.id)
            : [...prev, product]
        );
    };

    const togglePanel = () => setShowPanel((prev) => !prev);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, showPanel, togglePanel }}>
        {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
    return context;
};
