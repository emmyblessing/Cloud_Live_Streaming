import { create } from "zustand";

const useAuthStore = create((set) => ({
  email: '',
  token: '',
  isAuthenticated: false,
  setEmail: (email) => set({ email }),
  setToken: (token) => set({ token, isAuthenticated: true }),
  logout: () => set({ email: '', isAuthenticated: false })
}));

export default useAuthStore;
