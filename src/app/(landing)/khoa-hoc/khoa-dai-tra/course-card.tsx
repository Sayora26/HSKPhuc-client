'use client';
import { formatDate } from '@/lib/dayjs';
import { Course } from '@/types';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import RegisterForm from '../../components/register-form';

interface CourseCardProps {
  data: Course;
}

const CourseCard = ({ data }: CourseCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl">
      <div className="flex gap-4 md:gap-6">
        <div>
          <Image
            src={data.image}
            alt={data.name}
            width={200}
            height={200}
            className="aspect-square w-20 rounded-2xl md:w-30 lg:w-50"
          />
        </div>
        <ul className="flex-1 text-base md:text-lg">
          <li>
            Đối tượng: <span className="font-semibold">{data.target}</span>
          </li>
          <li>Lịch học: {data.schedule}</li>
          <li>Lịch khai giảng: {formatDate(data.startDate)}</li>
          <li>Số lượng: Tối đa {data.maxStudents} người</li>
          <li>
            Tình trạng: {data.currentStudents}/{data.maxStudents}
          </li>
        </ul>
        <div className="hidden self-end sm:block">
          <Button type="primary" size="large" onClick={() => setOpen(true)} disabled>
            Đăng ký
          </Button>
        </div>
      </div>
      <div className="mt-2 sm:hidden">
        <Button type="primary" size="large" block onClick={() => setOpen(true)} disabled>
          Đăng ký
        </Button>
      </div>
      <Modal
        open={open}
        title={<div className="text-center">Vui lòng nhập thông tin</div>}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <p className="mx-auto mb-8 text-center">Giáo viên sẽ liên hệ sắp xếp lớp ngay</p>
        <RegisterForm onAfterFinish={() => setOpen(false)}>
          <div className="text-center">
            <Button variant="solid" htmlType="submit" type="primary" className="mt-4">
              Đăng ký khóa học
            </Button>
          </div>
        </RegisterForm>
      </Modal>
    </div>
  );
};

export default CourseCard;
