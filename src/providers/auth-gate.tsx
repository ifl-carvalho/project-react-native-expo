import type { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { api } from '@/services/api';
import { useAuthStore } from '@/store/auth';

export const AuthGate = ({ children }: PropsWithChildren) => {
  const { session, refreshSession } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    api.interceptors.request.use((config) => {
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session?.accessToken}`;
      }
      return config;
    });
  }, [session?.accessToken]);

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const request = error.config;

        if (error.response?.status !== 401 || !request) return Promise.reject(error);

        const token = await refreshSession().catch(() => router.push('/sign-in'));

        request.headers.Authorization = `Bearer ${token}`;

        return api(request);
      }
    );
  }, [router, refreshSession]);

  return children;
};
