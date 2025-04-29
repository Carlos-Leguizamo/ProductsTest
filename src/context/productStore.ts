import { create } from 'zustand';
import { Product } from '../types/Product';

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (codigo: number) => void;
  loadFromStorage: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => {
      const updated = [...state.products, product];
      localStorage.setItem('products', JSON.stringify(updated));
      return { products: updated };
    });
  },
  deleteProduct: (codigo) => {
    set((state) => {
      const updated = state.products.filter((p) => p.codigo !== codigo);
      localStorage.setItem('products', JSON.stringify(updated));
      return { products: updated };
    });
  },
  loadFromStorage: () => {
    const stored = localStorage.getItem('products');
    if (stored) {
      set({ products: JSON.parse(stored) });
    }
  },
}));
