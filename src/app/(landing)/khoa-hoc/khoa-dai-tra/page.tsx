import { Container } from '@/components/ui';
import { db } from '@/lib/firebase';
import { Course } from '@/types';
import { collection, getDocs } from 'firebase/firestore';
import { Metadata } from 'next';
import { cache } from 'react';
import TextTicker from '../../components/text-ticker';
import CourseCard from './course-card';
import LearningStep from './learning-step';

export const metadata: Metadata = {
  title: 'Khóa đại trà online',
  description:
    'Khóa học tiếng Trung online dành cho người mới bắt đầu, giúp học viên nắm vững kiến thức cơ bản và phát triển kỹ năng giao tiếp hiệu quả.',
};

export const revalidate = 60;

const getCourses = cache(async (): Promise<Course[]> => {
  const snapshot = await getDocs(collection(db, 'courses'));
  const courses: Course[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Course),
    startDate: doc.data().startDate?.toDate(),
  }));
  return courses;
});

const MassCourse = async () => {
  const courses = await getCourses();

  return (
    <div>
      <TextTicker />
      <h1 className="sr-only">Khóa đại trà online</h1>
      <Container className="py-8">
        <h2 className="text-primary mb-2 rounded-2xl bg-linear-90 from-[#e9ebed] to-transparent px-6 py-4 text-2xl font-bold lg:text-3xl">
          Đang vận hành
        </h2>
        <div className="flex flex-col gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </div>
      </Container>
      <LearningStep />
    </div>
  );
};

export default MassCourse;
