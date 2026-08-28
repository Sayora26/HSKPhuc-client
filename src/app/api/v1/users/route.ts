import { deleteUser, getUsers, updateUserRole } from '@/services/user.service';
import { UserRole } from '@/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const isUserRole = (role: unknown): role is UserRole => role === 'admin' || role === 'user';

export const GET = async (): Promise<NextResponse> => {
  try {
    return NextResponse.json(await getUsers());
  } catch {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
};

export const PATCH = async (request: Request): Promise<NextResponse> => {
  try {
    const payload = (await request.json()) as { id?: string; role?: unknown };

    if (!payload.id || !isUserRole(payload.role)) {
      return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
    }

    return NextResponse.json(await updateUserRole(payload.id, payload.role));
  } catch {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
};

export const DELETE = async (request: Request): Promise<NextResponse> => {
  try {
    const id = new URL(request.url).searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
    }

    await deleteUser(id);
    return NextResponse.json({ id });
  } catch {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
};
