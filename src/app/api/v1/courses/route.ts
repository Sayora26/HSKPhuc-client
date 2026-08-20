import {
  createCourse,
  deleteCourse,
  getPublicCourses,
  updateCourse,
} from '@/services/course.service';
import { Course } from '@/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type CoursePayload = Omit<Course, 'id'>;

const isValidCoursePayload = (payload: Partial<CoursePayload>) =>
  typeof payload.name === 'string' &&
  typeof payload.target === 'string' &&
  typeof payload.image === 'string' &&
  typeof payload.order === 'number';

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

    const id = await createCourse(payload);

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

    const updatedCourse = await updateCourse(id, payload);

    return NextResponse.json(updatedCourse);
  } catch {
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
};

export const DELETE = async (request: Request): Promise<NextResponse> => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing course id' }, { status: 400 });
    }

    await deleteCourse(id);

    return NextResponse.json({ id });
  } catch {
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
};
