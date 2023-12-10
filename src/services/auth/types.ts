export type LoginPayload = {
  username: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type User = {
  id: number;
  username: string;
  permission: Role;
};

export enum Role {
  ADMIN = 1,
  USER = 2
}
