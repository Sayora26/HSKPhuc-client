import { Container } from '@/components/ui';
import { Metadata } from 'next';
import TextTicker from '../../components/text-ticker';
import CourseCard from './CourseCard';

export const metadata: Metadata = {
  title: 'Khóa đại trà online',
  description:
    'Khóa học tiếng Trung online dành cho người mới bắt đầu, giúp học viên nắm vững kiến thức cơ bản và phát triển kỹ năng giao tiếp hiệu quả.',
};

const COURSE_DATA = [
  {
    image: '/img/courses/introductory.png',
    name: 'Khóa học tiếng Trung cơ bản',
    target: 'Dành cho người mới',
    schedule: '18h - 19h30 | Thứ 2, 4, 6',
    startDate: new Date(),
    maxStudents: 10,
    currentStudents: 6,
  },
  {
    image: '/img/courses/hsk3.png',
    name: 'Khóa học HSK 3',
    target: 'Học viên đã hoàn thành trình độ khóa HSK 2',
    schedule: '18h - 19h30 | Thứ 2, 4, 6',
    startDate: new Date(),
    maxStudents: 10,
    currentStudents: 6,
  },
  {
    image: '/img/courses/hsk4.png',
    name: 'Khóa học HSK 4',
    target: 'Học viên đã hoàn thành trình độ khóa HSK 3',
    schedule: '18h - 19h30 | Thứ 2, 4, 6',
    startDate: new Date(),
    maxStudents: 10,
    currentStudents: 6,
  },
  {
    image: '/img/courses/hsk5.png',
    name: 'Khóa học HSK 5',
    target: 'Học viên đã hoàn thành trình độ khóa HSK 4',
    schedule: '18h - 19h30 | Thứ 2, 4, 6',
    startDate: new Date(),
    maxStudents: 10,
    currentStudents: 6,
  },
];

const MassCourse = () => {
  return (
    <div>
      <TextTicker />
      <h1 className="sr-only">Khóa đại trà online</h1>
      <Container className="py-8">
        <h2 className="text-primary mb-2 rounded-2xl bg-linear-90 from-[#e9ebed] to-transparent px-6 py-4 text-2xl font-bold lg:text-3xl">
          Đang vận hành
        </h2>
        <div className="flex flex-col gap-4">
          {COURSE_DATA.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MassCourse;
