'use client';

import { Button, Modal } from 'antd';
import { useState } from 'react';
import RegisterForm from '../../components/register-form';

const CourseModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="large"
        type="primary"
        block
        className="lg:order-last"
        onClick={() => setOpen(true)}
      >
        Nhận tư vấn
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title={<div className="text-center">Vui lòng nhập thông tin</div>}
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
    </>
  );
};

export default CourseModal;
