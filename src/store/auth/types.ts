export type LoginPayload = {
  username: string;
  password: string;
};

export type Session = {
  user: User;
  role: Role;
  accessToken: string;
  refreshToken: string;
};

export type User = {
  id: number;
  role: Role;
  username: string;
};

export enum Role {
  ADMIN = 1,
  USER = 2
}

