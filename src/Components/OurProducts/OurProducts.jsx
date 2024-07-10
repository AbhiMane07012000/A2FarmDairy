import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      productImage: './ghee.png',
      title: 'Gir Cow Desi Ghee',
      features: [
        'Ghee is the best substitute for human consumption among all types of oils',
        "Ghee helps in weight-loss. It doesn't increase bad LDL cholesterol, rather improves good HDL cholesterol",
        'Ghee is rich in fat-soluble vitamins such as Vitamin A, D, E, & K, Omega3 & Omega 9',
        'Ghee helps digestive tract in good health and boosts immunity',
      ],
    },
    {
      id: 2,
      productImage: './Gir-Cow-milk.png',
      title: 'Gir Cow Desi Milk',
      features: [
        "Desi cow milk contains A2 beta-casein protein that helps brain development",
        "The amino acid in the milk helps to digest milk protein easily and improves kidney health",
        "Contains a good source of Vitamin B2, B3 & A and minerals",
        "Drinking A2 Desi cow milk improves the immunity level in the body to fight against diseases",
        "Vitamins in A2 desi cow milk help reduce acidity in the stomach and improve stomach health",
        "Reduces chances of peptic ulcer, colon, breast and skin cancer",
      ],
    },
    {
      id: 3,
      productImage: './baffalo-milk.png',
      title: 'Baffalo Desi Milk',
      features: [
        "It is rich in vitamins and minerals that strengthen the immune system and promote good health.",
        "The nutrients in buffalo milk help build strong bones, teeth, nails and hair.",
        "Drinking buffalo milk will help your body fight off diseases as well as improve your skin!",
        "It has more calcium and vitamin C than regular Milk, which can be good for people who are lactose intolerant.",
        "Buffalo Milk consist of Beta-lactoglobulin and potassium, which helps in reducing high blood pressure and is good for your heart",
      ],
    },
  ];

  return (
    <section aria-labelledby="our-products-heading">
      <header className="text-center p-10">
        <h2 id="our-products-heading" className="text-2xl lg:text-5xl font-bold text-cyan-500" data-aos="zoom-in" data-aos-duration="3000">
          Our Products
        </h2>
      </header>
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
        className="mySwiper my-10"
        data-aos="zoom-out" data-aos-duration="1500"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <article className="grid grid-cols-1 lg:grid-cols-2 w-full">
              <div
                className="justify-self-center bg-cover rounded-lg lg:w-72 "
                style={{ backgroundImage: `url("./empty-wood.webp")`, backgroundSize: "100% 100%" }}
              >
                <img
                  className="py-4"
                  src={product.productImage}
                  alt={product.productImage + ' Image'}
                  style={{ height: '20rem' }}
                />
              </div>
              <div className="p-10">
                <h2 className="font-extrabold text-xl text-cyan-600">{product.title}</h2>
                <ul className="space-y-2 pt-4">
                  {product.features.map((feature, index) => (
                    <li className="flex items-start" key={index}>
                      <span className="mr-2">
                        <FaCheck size={25} className="text-cyan-400" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurProducts;
