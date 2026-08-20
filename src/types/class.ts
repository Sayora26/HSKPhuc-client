import { Course } from './course';

export interface Class {
  id: string;
  courseId: string;
  code: string;
  schedule: string;
  startDate: Date;
  maxStudents: number;
  currentStudents: number;
  status: ClassStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum ClassStatus {
  Inactive,
  Active,
}

export type ClassWithCourse = Class & {
  course: Pick<Course, 'name' | 'image' | 'target'>;
};
