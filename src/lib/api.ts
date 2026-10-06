import { HttpClient } from './api-client';

export const api = new HttpClient({
  baseUrl: 'http://localhost:1101/api/v1',
});
