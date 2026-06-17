'use client';
import { Avatar } from '@/components/ui';
import { Carousel, Grid } from 'antd';
import { FaQuoteRight } from 'react-icons/fa6';

interface IComment {
  id: number;
  name: string;
  level: string;
  comment: string;
  avatar?: string;
}

const comments: IComment[] = [
  {
    id: 1,
    name: 'Tố Như',
    level: 'HSK5 239/300',
    comment: 'Điều em thích nhất là thầy vừa nghiêm túc vừa rất gần gũi, học không bị áp lực.',
    avatar: '/img/avatar/to-nhu.jpg',
  },
  {
    id: 2,
    name: 'Nghiệp Tuấn',
    level: 'HSK5 233/300',
    comment:
      'Em vẫn thích phong cách dạy của thầy nhất, phân tích rất kỹ, nhiều ví dụ thực tế nên nhớ bài lâu hơn.',
    avatar: '/img/avatar/nghiep-tuan.jpg',
  },
  {
    id: 3,
    name: 'Hoàng Đạt',
    level: 'HSK5 231/300',
    comment: 'Thầy giống một người bạn đồng hành hơn là một người chỉ đứng giảng trên lớp.',
    avatar: '/img/avatar/hoang-dat.png',
  },
  {
    id: 4,
    name: 'Hạnh Dung',
    level: 'HSK4 272/300',
    comment: 'Thầy không chỉ dạy kiến thức mà còn truyền động lực học rất nhiều.',
    avatar: '/img/avatar/hanh-dung.jpg',
  },
  {
    id: 5,
    name: 'Ngọc Tám',
    level: 'HSK4 248/300',
    comment:
      'Thầy luôn kiên nhẫn giải thích đến khi em thật sự hiểu vấn đề. Em cám ơn thầy rất nhiều.',
    avatar: '/img/avatar/ngoc-tam.png',
  },
  {
    id: 6,
    name: 'Hà My',
    level: 'HSK4 266/300',
    comment:
      'Thầy không để mấy bạn thụ động, một người hướng nội như em cũng nói được tiếng Trung rồi',
    avatar: '/img/avatar/ha-my.png',
  },
];

const Comment = ({ data }: { data: IComment }) => {
  return (
    <div className="my-2 rounded-xl bg-[#f3f3f3] p-4 shadow-md shadow-black/30">
      <div className="flex items-center gap-4">
        <Avatar name={data.name} src={data.avatar} />
        <span className="text-primary font-semibold">{`${data.name} | ${data.level}`}</span>
      </div>
      <p className="mt-2">{`"${data.comment}"`}</p>
      <div className="flex justify-end">
        <FaQuoteRight className="text-secondary inline text-5xl" />
      </div>
    </div>
  );
};

const Reviews = () => {
  const { md, lg } = Grid.useBreakpoint();

  return (
    <div>
      <h2 className="text-primary mb-4 text-center text-2xl font-bold lg:text-3xl">
        Học viên nói gì
      </h2>
      <Carousel
        draggable
        slidesPerRow={lg ? 3 : md ? 2 : 1}
        dots={false}
        autoplay
        autoplaySpeed={5000}
      >
        {comments.map((item) => (
          <Comment key={item.id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
