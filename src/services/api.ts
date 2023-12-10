import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_GATEWAY ?? 'http://localhost:3377';

export const api = axios.create({ baseURL });
