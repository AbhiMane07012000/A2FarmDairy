// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  const SliderHeadings = [
    {
      id: 1,
      image: "./carousel_1.jpg",
    },
    {
      id: 2,
      image: "./carousel_2.jpg",
    },
    {
      id: 3,
      image: "./carousel_3.jpeg",
    },
  ];

  return (
    <section aria-labelledby="slider-heading">
      <h2 id="slider-heading" className="sr-only">Image Carousel</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {SliderHeadings.map((SliderHeading) => (
          <SwiperSlide key={SliderHeading.id}>
            <div
              className="relative w-full h-40 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${SliderHeading.image})` }}
            >
              <img
                src={SliderHeading.image}
                alt={`Slide ${SliderHeading.id}`}
                className="sr-only"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
