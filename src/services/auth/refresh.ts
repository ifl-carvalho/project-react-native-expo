import type { AxiosResponse } from 'axios';

import { api } from '@/services/api';

import type { AuthResponse } from './types';

let refreshPromise: Promise<AxiosResponse<AuthResponse>> | null = null;

export const refreshService = async (refreshToken: string) => {
  if (!refreshPromise) {
    refreshPromise = api.post<AuthResponse>('/auth/refresh', { refresh_token: refreshToken });
  }

  const { data } = await refreshPromise;

  refreshPromise = null;

  return data;
};
