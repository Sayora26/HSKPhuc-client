'use client';
import { Carousel } from 'antd';

const Reviews = () => {
  return (
    <div>
      <h2 className="text-primary mb-4 text-2xl font-bold lg:text-3xl">Học viên nói gì</h2>
      <Carousel draggable>
        <div className="h-20 bg-amber-300">1</div>
        <div className="h-20 bg-amber-300">2</div>
        <div className="h-20 bg-amber-300">3</div>
        <div className="h-20 bg-amber-300">4</div>
      </Carousel>
    </div>
  );
};

export default Reviews;
