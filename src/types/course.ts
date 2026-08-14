export interface Course {
  id: string;
  image: string;
  name: string;
  target: string;
  schedule: string;
  startDate: Date;
  maxStudents: number;
  currentStudents: number;
  order: number;
  status: CourseStatus;
}

export enum CourseStatus {
  Inactive,
  Active,
}
