import { adminDb } from '@/lib/firebase-admin';
import { User, UserRole } from '@/types';
import { revalidateTag, unstable_cache } from 'next/cache';

const getUserCollection = () => {
  if (!adminDb) {
    throw new Error('Firebase Admin is not configured');
  }

  return adminDb.collection('users');
};

export const getUsers = () =>
  unstable_cache(
    async () => {
      const snapshot = await getUserCollection().get();
      const users: User[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<User, 'id'>),
        createdAt: doc.data().createdAt?.toDate(),
      }));

      return users.sort((first, second) =>
        (first.name ?? first.email).localeCompare(second.name ?? second.email),
      );
    },
    ['user-list'],
    { tags: ['users-data'] },
  )();

export const updateUserRole = async (id: string, role: UserRole) => {
  const ref = getUserCollection().doc(id);
  const existingUser = await ref.get();
  if (!existingUser.exists) {
    throw new Error('User not found');
  }

  await ref.update({ role });
  revalidateTag('users-data', 'max');

  return { id, role };
};

export const deleteUser = async (id: string) => {
  const ref = getUserCollection().doc(id);
  const existingUser = await ref.get();
  if (!existingUser.exists) {
    throw new Error('User not found');
  }

  await ref.delete();
  revalidateTag('users-data', 'max');
};
