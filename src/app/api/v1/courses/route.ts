import { db } from '@/lib/firebase';
import { Course } from '@/types';
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export const revalidate = 60;

type CoursePayload = Omit<Course, 'id' | 'startDate'> & {
  startDate: string;
};

const toCourseData = (payload: CoursePayload) => ({
  ...payload,
  startDate: new Date(payload.startDate),
});

const isValidCoursePayload = (payload: Partial<CoursePayload>) =>
  typeof payload.name === 'string' &&
  typeof payload.target === 'string' &&
  typeof payload.schedule === 'string' &&
  typeof payload.image === 'string' &&
  typeof payload.order === 'number' &&
  typeof payload.maxStudents === 'number' &&
  typeof payload.currentStudents === 'number' &&
  typeof payload.startDate === 'string' &&
  !Number.isNaN(new Date(payload.startDate).getTime());

export const GET = async (): Promise<NextResponse> => {
  try {
    const snapshot = await getDocs(collection(db, 'courses'));
    const courses: Course[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Course, 'id'>),
      startDate: doc.data().startDate?.toDate(),
    }));

    return NextResponse.json(courses);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
};

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const payload = (await request.json()) as CoursePayload;

    if (!isValidCoursePayload(payload)) {
      return NextResponse.json({ error: 'Invalid course data' }, { status: 400 });
    }

    const courseRef = await addDoc(collection(db, 'courses'), toCourseData(payload));

    return NextResponse.json({ id: courseRef.id, ...payload }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
};

export const PATCH = async (request: Request): Promise<NextResponse> => {
  try {
    const { id, ...payload } = (await request.json()) as CoursePayload & { id?: string };

    if (!id || !isValidCoursePayload(payload)) {
      return NextResponse.json({ error: 'Invalid course data' }, { status: 400 });
    }

    const courseRef = doc(db, 'courses', id);
    const existingCourse = await getDoc(courseRef);

    if (!existingCourse.exists()) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    await updateDoc(courseRef, toCourseData(payload));

    return NextResponse.json({ id, ...payload });
  } catch {
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
};
