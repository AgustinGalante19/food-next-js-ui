import { create } from 'zustand'

interface AuthStore {
  isAuth: boolean
  authorize: () => void
  unauthorize: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  authorize: () => set({ isAuth: true }),
  unauthorize: () => set({ isAuth: false }),
}))
