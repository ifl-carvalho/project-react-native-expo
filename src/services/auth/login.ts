import { api } from '@/services/api';

import type { AuthResponse, LoginPayload } from './types';

export const loginService = async (payload: LoginPayload) => {
  const { data } = await api.post<AuthResponse>('/auth/login', payload);

  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    role: data.user.permission,
    user: {
      id: data.user.id,
      role: data.user.permission,
      username: data.user.username,
    }
  };
};
