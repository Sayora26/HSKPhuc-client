export interface Course {
  id?: string;
  image: string;
  name: string;
  target: string;
  schedule: string;
  startDate: Date;
  maxStudents: number;
  currentStudents: number;
}
