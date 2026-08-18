import { createCourse, getPublicCourses, updateCourse } from '@/services/course.service';
import { Course } from '@/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

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
    const courses = await getPublicCourses();
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

    const id = await createCourse(toCourseData(payload));

    return NextResponse.json({ id, ...payload }, { status: 201 });
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

    const updatedCourse = await updateCourse(id, toCourseData(payload));

    return NextResponse.json(updatedCourse);
  } catch {
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
};
