'use client';
import { Avatar, Carousel } from 'antd';

interface IComment {
  id: number;
  name: string;
  level: string;
  comment: string;
}

const comments: IComment[] = [
  {
    id: 1,
    name: 'Tố Như',
    level: 'HSK5 239/300',
    comment: 'Điều em thích nhất là thầy vừa nghiêm túc vừa rất gần gũi, học không bị áp lực.',
  },
  {
    id: 2,
    name: 'Nghiệp Tuấn',
    level: 'HSK5 233/300',
    comment:
      'Em vẫn thích phong cách dạy của thầy nhất, phân tích rất kỹ, nhiều ví dụ thực tế nên nhớ bài lâu hơn.',
  },
  {
    id: 3,
    name: 'Hoàng Đạt',
    level: 'HSK5 231/300',
    comment: 'Thầy giống một người bạn đồng hành hơn là một người chỉ đứng giảng trên lớp.',
  },
  {
    id: 4,
    name: 'Hạnh Dung',
    level: 'HSK4 272/300',
    comment: 'Thầy không chỉ dạy kiến thức mà còn truyền động lực học rất nhiều.',
  },
  {
    id: 5,
    name: 'Ngọc Tám',
    level: 'HSK4 248/300',
    comment:
      'Thầy luôn kiên nhẫn giải thích đến khi em thật sự hiểu vấn đề. Em cám ơn thầy rất nhiều.',
  },
  {
    id: 6,
    name: 'Hà My',
    level: 'HSK4 266/300',
    comment:
      'Thầy không để mấy bạn thụ động, một người hướng nội như em cũng nói được tiếng Trung rồi',
  },
];

const Comment = ({}: { data?: IComment }) => {
  return (
    <div className="rounded-xl bg-[#f3f3f3] p-4">
      <div className="flex">
        <Avatar />
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <h2 className="text-primary mb-4 text-2xl font-bold lg:text-3xl">Học viên nói gì</h2>
      <Carousel draggable slidesPerRow={3} autoplay dots={false}>
        {comments.map((item) => (
          <Comment key={item.id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
