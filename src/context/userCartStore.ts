import { create } from "zustand";
import { Product } from "../types/Product";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (codigo: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((p) => p.codigo === product.codigo);
      if (existingProduct) {
        return {
          cart: state.cart.map((p) =>
            p.codigo === product.codigo
              ? { ...p, cantidad: p.cantidad + product.cantidad }
              : p
          ),
        };
      }
      return { cart: [...state.cart, { ...product, cantidad: 1 }] };
    }),
  removeFromCart: (codigo) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.codigo !== codigo),
    })),
  clearCart: () => set({ cart: [] }),
}));