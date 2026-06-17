'use client';
import { Avatar, Carousel, Grid } from 'antd';
import { FaQuoteRight } from 'react-icons/fa6';

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

const Comment = ({ data }: { data: IComment }) => {
  return (
    <div className="my-2 rounded-xl bg-[#f3f3f3] p-4 shadow-md shadow-black/30">
      <div className="flex items-center gap-4">
        <Avatar>
          {data.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </Avatar>
        <span className="text-primary font-semibold">{`${data.name} | ${data.level}`}</span>
      </div>
      <p className="mt-2">{`"${data.comment}"`}</p>
      <div className="flex justify-end">
        <FaQuoteRight className="inline text-5xl" />
      </div>
    </div>
  );
};

const Reviews = () => {
  const { md, lg } = Grid.useBreakpoint();

  return (
    <div>
      <h2 className="text-primary mb-4 text-2xl font-bold lg:text-3xl">Học viên nói gì</h2>
      <Carousel draggable slidesPerRow={lg ? 3 : md ? 2 : 1} dots={false}>
        {comments.map((item) => (
          <Comment key={item.id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
