import { PATHS } from '@/config/routes';
import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Result
        status="404"
        title="Trang không tồn tại"
        subTitle="Trang bạn đang tìm kiếm không tồn tại."
        extra={<Button href={PATHS.ADMIN.DASHBOARD}>Về trang chủ</Button>}
      />
    </div>
  );
};

export default NotFound;
