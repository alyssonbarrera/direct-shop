import { create } from 'zustand';
import { setItem, getItem, deleteItemAsync } from 'expo-secure-store';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

type UserState = {
  isLoggedIn: boolean;
  user: UserDTO | null;
  token: string | null;
  logout: VoidFunction;
  _hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  login: ({ user, token }: { user: UserDTO; token: string }) => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      _hasHydrated: false,
      login: ({ user, token }) => set((state) => ({ ...state, user, token, isLoggedIn: true })),
      logout: () => set((state) => ({ ...state, isLoggedIn: false, user: null, token: null })),
      setHasHydrated: (value: boolean) => set((state) => ({ ...state, _hasHydrated: value })),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);
