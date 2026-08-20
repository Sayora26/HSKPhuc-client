import { adminDb } from '@/lib/firebase-admin';
import { Class, ClassStatus, ClassWithCourse, Course } from '@/types';
import { revalidateTag, unstable_cache } from 'next/cache';

const getClassCollection = () => {
  if (!adminDb) {
    throw new Error('Firebase Admin is not configured');
  }

  return adminDb.collection('classes');
};

const getCourseCollection = () => {
  if (!adminDb) {
    throw new Error('Firebase Admin is not configured');
  }

  return adminDb.collection('courses');
};

const toClass = (doc: FirebaseFirestore.QueryDocumentSnapshot): Class => ({
  id: doc.id,
  ...(doc.data() as Omit<Class, 'id'>),
  startDate: doc.data().startDate?.toDate(),
  createdAt: doc.data().createdAt?.toDate(),
  updatedAt: doc.data().updatedAt?.toDate(),
});

export const getClasses = (courseId?: string) =>
  unstable_cache(
    async () => {
      let query: FirebaseFirestore.Query = getClassCollection();
      if (courseId) {
        query = query.where('courseId', '==', courseId);
      }

      const snapshot = await query.get();
      return snapshot.docs.map(toClass);
    },
    ['class-list', `class-course-${courseId}`],
    {
      tags: ['classes-data'],
    },
  )();

export const getPublicClasses = (status?: ClassStatus) =>
  unstable_cache(
    async () => {
      let query: FirebaseFirestore.Query = getClassCollection();
      if (status !== undefined) {
        query = query.where('status', '==', status);
      }

      const [classSnapshot, courseSnapshot] = await Promise.all([
        query.get(),
        getCourseCollection().get(),
      ]);

      const courses = new Map<string, Course>(
        courseSnapshot.docs.map((doc) => [
          doc.id,
          { id: doc.id, ...(doc.data() as Omit<Course, 'id'>) },
        ]),
      );

      const classes: ClassWithCourse[] = classSnapshot.docs
        .map(toClass)
        .filter((cls) => courses.has(cls.courseId))
        .map((cls) => {
          const course = courses.get(cls.courseId)!;
          return {
            ...cls,
            course: { name: course.name, image: course.image, target: course.target },
          };
        });

      return classes;
    },
    ['public-class-list', `class-status-${status}`],
    {
      tags: ['classes-data'],
    },
  )();

export const createClass = async (data: Omit<Class, 'id'>) => {
  const classRef = await getClassCollection().add({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  revalidateTag('classes-data', 'max');

  return classRef.id;
};

export const updateClass = async (id: string, data: Omit<Class, 'id'>) => {
  const ref = getClassCollection().doc(id);
  const existingClass = await ref.get();
  if (!existingClass.exists) {
    throw new Error('Class not found');
  }
  await ref.update({
    ...data,
    updatedAt: new Date(),
  });

  revalidateTag('classes-data', 'max');

  return { id, ...data } as Class;
};

export const deleteClass = async (id: string) => {
  const ref = getClassCollection().doc(id);
  const existingClass = await ref.get();
  if (!existingClass.exists) {
    throw new Error('Class not found');
  }
  await ref.delete();

  revalidateTag('classes-data', 'max');
};
