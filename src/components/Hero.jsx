import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import heroPhoto1 from './../assets/hero-photo-1.jpg';
import heroPhoto2 from './../assets/hero-photo-2.jpg';
import heroPhoto3 from './../assets/hero-photo-3.jpg';

const slides = [heroPhoto1, heroPhoto2, heroPhoto3];

function Hero() {
  return (
    <section id="home" className="mt-28 pt-10 flex flex-col items-center text-center text-white overflow-hidden px-4 md:px-10">
      <div className="flex flex-col relative">
        <div className="flex items-center justify-center mx-auto p-1.5 shadow-md text-black text-sm rounded-3xl bg-[#efe7d6]">
          <span className='px-2.5 py-1 text-white bg-orange-500 rounded-2xl mr-1'>NEW</span>
          Daily pass is now available
        </div>

        <div className='text-black mt-2.5 mb-8'>
          <h1 className='text-5xl sm:text-7xl md:w-2/3 mx-auto mb-2'>
            Welcome to your Uninterrupted <span className='text-orange-500 italic'>focus</span> Zone
          </h1>
          <p className='text-lg mx-auto md:w-1/3'>
            A premium self-study library built for aspirants who desire peace, focus, and productivity to hit their goals.
          </p>
        </div>
      </div>

      <div className="relative w-[380px] sm:w-11/12 h-[300px] sm:h-[600px] my-8">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="rounded-3xl shadow-xl overflow-hidden">
              <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;