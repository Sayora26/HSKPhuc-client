import { adminDb } from '@/lib/firebase-admin';
import { Course } from '@/types';
import { revalidateTag, unstable_cache } from 'next/cache';

const getCourseCollection = () => {
  if (!adminDb) {
    throw new Error('Firebase Admin is not configured');
  }

  return adminDb.collection('courses');
};

export const getPublicCourses = () =>
  unstable_cache(
    async () => {
      const snapshot = await getCourseCollection().get();
      const courses: Course[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Course, 'id'>),
      }));
      return courses.sort((a, b) => a.order - b.order);
    },
    ['course-list'],
    {
      tags: ['courses-data'],
    },
  )();

export const createCourse = async (data: Omit<Course, 'id'>) => {
  const courseRef = await getCourseCollection().add({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  revalidateTag('courses-data', 'max');

  return courseRef.id;
};

export const updateCourse = async (id: string, data: Omit<Course, 'id'>) => {
  const ref = getCourseCollection().doc(id);
  const existingCourse = await ref.get();
  if (!existingCourse.exists) {
    throw new Error('Course not found');
  }
  await ref.update({
    ...data,
    updatedAt: new Date(),
  });

  revalidateTag('courses-data', 'max');

  return { id, ...data } as Course;
};

export const deleteCourse = async (id: string) => {
  const ref = getCourseCollection().doc(id);
  const existingCourse = await ref.get();
  if (!existingCourse.exists) {
    throw new Error('Course not found');
  }
  await ref.delete();

  revalidateTag('courses-data', 'max');
};
