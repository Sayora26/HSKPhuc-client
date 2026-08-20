import { Container } from '@/components/ui';
import { ClassStatus } from '@/types';
import { Metadata } from 'next';
import TextTicker from '../../components/text-ticker';
import CourseCard from './course-card';
import LearningStep from './learning-step';
import { getPublicClasses } from '@/services/class.service';

export const metadata: Metadata = {
  title: 'Khóa đại trà online',
  description:
    'Khóa học tiếng Trung online dành cho người mới bắt đầu, giúp học viên nắm vững kiến thức cơ bản và phát triển kỹ năng giao tiếp hiệu quả.',
};

export const revalidate = 60;

const MassCourse = async () => {
  const inactiveClasses = await getPublicClasses(ClassStatus.Inactive);
  const activeClasses = await getPublicClasses(ClassStatus.Active);

  return (
    <div>
      <TextTicker />
      <h1 className="sr-only">Khóa đại trà online</h1>
      <Container className="py-8">
        {activeClasses.length > 0 && (
          <>
            <h2 className="text-primary mb-2 rounded-2xl bg-linear-90 from-[#e9ebed] to-transparent px-6 py-4 text-2xl font-bold lg:text-3xl">
              Đang tuyển sinh
            </h2>
            <div className="flex flex-col gap-4">
              {activeClasses.map((cls) => (
                <CourseCard key={cls.id} data={cls} />
              ))}
            </div>
          </>
        )}
        {inactiveClasses.length > 0 && (
          <>
            <h2 className="text-primary mt-4 mb-2 rounded-2xl bg-linear-90 from-[#e9ebed] to-transparent px-6 py-4 text-2xl font-bold lg:text-3xl">
              Đang vận hành
            </h2>
            <div className="flex flex-col gap-4">
              {inactiveClasses.map((cls) => (
                <CourseCard key={cls.id} data={cls} />
              ))}
            </div>
          </>
        )}
      </Container>
      <LearningStep />
    </div>
  );
};

export default MassCourse;
