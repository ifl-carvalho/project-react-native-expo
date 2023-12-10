import AsyncStorage from '@react-native-async-storage/async-storage';
import { create, type StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { loginService, refreshService } from '@/services/auth';

import type { LoginPayload, Session } from './types';

export interface AuthState {
  isLoading: boolean;
  session: Session | null;
  logout: () => void;
  login: (payload: LoginPayload) => Promise<void>;
  refreshSession: () => Promise<string>;
}

export const createAuthStore: StateCreator<AuthState> = (set, get) => ({
  session: null,
  isLoading: false,
  logout: () => {
    set((state) => ({ ...state, session: null, isLoading: false }));
  },
  login: async (payload: LoginPayload) => {
    set((state) => ({ ...state, isLoading: true }));

    const newSession = await loginService(payload);

    set((state) => ({ ...state, session: newSession, isLoading: false }));
  },
  refreshSession: async () => {
    set((state) => ({ ...state, isLoading: true }));

    const { session: expiredSession } = get();

    const newSession = await refreshService(expiredSession?.refreshToken ?? '');

    set((state) => ({ ...state, session: newSession, isLoading: false }));

    return newSession.accessToken;
  }
});

export const useAuthStore = create<AuthState>()(
  persist(immer(createAuthStore), { name: 'auth', storage: createJSONStorage(() => AsyncStorage) })
);
