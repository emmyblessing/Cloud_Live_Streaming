import { create } from "zustand";

const useAuthStore = create((set) => ({
  email: '',
  otp: '',
  verificationCode: '',
  password: '',
  confirmPassword: '',
  token: '',
  isAuthenticated: false,
  setVerificationCode: (code) => set({ verificationCode: code }),
  setPassword: (password) => set({ password }),
  authenticate: () => set({ isAuthenticated: true }),
  setEmail: (email) => set({ email }),
  setToken: (token) => set({ token, isAuthenticated: true }),
  logout: () => set({ email: '', isAuthenticated: false })
}));

export default useAuthStore;
