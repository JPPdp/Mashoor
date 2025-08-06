// lib/data/mockProducts.ts
export const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  image: '',
  price: `₱${199 + i * 10}`,
}));
