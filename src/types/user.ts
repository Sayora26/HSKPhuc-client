export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  role: UserRole;
  createdAt?: Date;
}
