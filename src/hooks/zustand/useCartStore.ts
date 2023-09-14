import { create } from 'zustand'
import { Product } from '@/types/Category'

interface CartStore {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (item: Product) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.product_id !== item.product_id),
    })),
  clearCart: () => set({ items: [] }),
}))
