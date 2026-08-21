import Image from 'next/image';

const galleryImages = [
  '/img/gallery/review1.webp',
  '/img/gallery/review2.webp',
  '/img/gallery/review7.webp',
  '/img/gallery/review6.webp',
  '/img/gallery/review4.webp',
  '/img/gallery/review10.webp',
  '/img/gallery/review3.webp',
  '/img/gallery/review8.webp',
  '/img/gallery/review9.webp',
  '/img/gallery/review11.webp',
  '/img/gallery/review5.webp',
  '/img/gallery/review12.webp',
];

const Gallery = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-primary mb-2 text-3xl font-bold tracking-wide uppercase">
          KHOẢNH KHẮC HỌC VIÊN CHIA SẺ CÙNG AFÚ CHINESE
        </h2>
        <p className="text-base">
          Những chia sẻ chân thật từ học viên trong hành trình chinh phục tiếng Trung.
        </p>
      </div>

      <div className="columns-2 gap-4 md:columns-3">
        {galleryImages.map((image, index) => (
          <figure
            key={image}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <Image
              src={image}
              alt={`Học viên Afú Chinese chia sẻ trải nghiệm ${index + 1}`}
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
