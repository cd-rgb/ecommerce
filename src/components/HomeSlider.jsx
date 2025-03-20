import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/insta-img-1.jpg",
    title: "50% OFF IN ALL PRODUCTS",
    description: "Get up to 50% off your shopping items tomorrow!",
    buttonText: "Shop Now",
  },
  {
    image: "/insta-img-3.jpg",
    title: "New Arrivals Are Here",
    description: "Check out the latest trends in fashion!",
    buttonText: "Explore Now",
  },
  {
    image: "/insta-img-10.jpg",
    title: "Big Deals on Electronics",
    description: "Grab the best deals on top brands!",
    buttonText: "Buy Now",
  },
];

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-[500px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.description}</p>
              <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
