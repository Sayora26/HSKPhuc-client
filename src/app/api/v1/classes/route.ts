import { createClass, deleteClass, getClasses, updateClass } from '@/services/class.service';
import { Class } from '@/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type ClassPayload = Omit<Class, 'id' | 'startDate'> & {
  startDate: string;
};

const toClassData = (payload: ClassPayload) => ({
  ...payload,
  startDate: new Date(payload.startDate),
});

const isValidClassPayload = (payload: Partial<ClassPayload>) =>
  typeof payload.courseId === 'string' &&
  typeof payload.code === 'string' &&
  typeof payload.schedule === 'string' &&
  typeof payload.maxStudents === 'number' &&
  typeof payload.currentStudents === 'number' &&
  typeof payload.startDate === 'string' &&
  !Number.isNaN(new Date(payload.startDate).getTime());

export const GET = async (request: Request): Promise<NextResponse> => {
  try {
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get('courseId') ?? undefined;
    const classes = await getClasses(courseId);
    return NextResponse.json(classes);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
  }
};

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const payload = (await request.json()) as ClassPayload;

    if (!isValidClassPayload(payload)) {
      return NextResponse.json({ error: 'Invalid class data' }, { status: 400 });
    }

    const id = await createClass(toClassData(payload));

    return NextResponse.json({ id, ...payload }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create class' }, { status: 500 });
  }
};

export const PATCH = async (request: Request): Promise<NextResponse> => {
  try {
    const { id, ...payload } = (await request.json()) as ClassPayload & { id?: string };

    if (!id || !isValidClassPayload(payload)) {
      return NextResponse.json({ error: 'Invalid class data' }, { status: 400 });
    }

    const updatedClass = await updateClass(id, toClassData(payload));

    return NextResponse.json(updatedClass);
  } catch {
    return NextResponse.json({ error: 'Failed to update class' }, { status: 500 });
  }
};

export const DELETE = async (request: Request): Promise<NextResponse> => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing class id' }, { status: 400 });
    }

    await deleteClass(id);

    return NextResponse.json({ id });
  } catch {
    return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 });
  }
};
