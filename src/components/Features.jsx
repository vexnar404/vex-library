import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonShelter,
  faPlugCircleBolt,
  faWifi,
  faLock,
  faFingerprint,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Make sure to update these image paths to your project's asset location.
import deskPhoto from './../assets/desk-photo.jpg';
import powerBackupPhoto from './../assets/power-backup-photo.jpg';
import wifiPhoto from './../assets/wifi-photo.jpg';
import lockersPhoto from './../assets/lockers-photo.jpg';
import biometricPhoto from './../assets/biometric-photo.jpg';
import teaCoffeePhoto from './../assets/tea-coffee-photo.jpg';

const featuresData = [
  {
    icon: faPersonShelter,
    title: 'Your Personal Focus Zone',
    description: 'Every student gets an individual study carrel with ample space, ensuring privacy and minimizing distractions.',
    image: deskPhoto,
  },
  {
    icon: faPlugCircleBolt,
    title: 'Uninterrupted Power',
    description: 'With a personal power socket at every desk and 100% power backup, your laptop and devices will never run out of charge.',
    image: powerBackupPhoto,
  },
  {
    icon: faWifi,
    title: 'High-Speed Internet',
    description: 'Access online classes, research materials, and download resources without lag or interruption.',
    image: wifiPhoto,
  },
  {
    icon: faLock,
    title: 'Secure Personal Lockers',
    description: 'Keep your books and materials safe with our on-site locker facilities. No need to carry heavy bags every day.',
    image: lockersPhoto,
  },
  {
    icon: faFingerprint,
    title: 'Biometric Access',
    description: 'Secure, fingerprint-based entry ensures that only registered members can access the premises, providing a safe study environment.',
    image: biometricPhoto,
  },
  {
    icon: faMugHot,
    title: 'Complimentary Tea/Coffee',
    description: 'Stay refreshed and focused with our complimentary tea and coffee service, available for all members to enjoy.',
    image: teaCoffeePhoto,
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <style>{`
        .swiper-pagination.swiper-pagination-bullets {
          margin-top: 2rem;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A374D] mb-4">
            An Environment Engineered for Success
          </h2>
          <p className="text-lg text-[#212529]">
            We provide everything you need to study without interruption.
          </p>
        </div>

        <div className="flex justify-between md:ml-12 mx-auto">
            <Swiper
              modules={[Autoplay, Grid, FreeMode, Pagination]}
              loop={true} 
              autoplay={{
                delay: 2000, 
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  grid: { rows: 1 },
                  spaceBetween: 0,
                  centeredSlides: false,
                  pagination: {
                    enabled: true,
                  },
                },
                768: {
                  slidesPerView: 2,
                  grid: { rows: 1 },
                  spaceBetween: 24,
                  centeredSlides: false,
                  pagination: {
                    enabled: false,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  grid: { rows: 1 },
                  spaceBetween: 24,
                  centeredSlides: false,
                  pagination: {
                    enabled: false,
                  },
                },
              }}
              className="mySwiper mx-auto"
            >
              {featuresData.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="feature-card w-full sm:w-[320px] h-[370px] bg-white rounded-lg md:shadow-xl">
                    <div className="p-6 text-center flex flex-col items-center">
                      <FontAwesomeIcon icon={feature.icon} className="text-4xl text-[#B15E28] mb-4" />
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1A374D] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#212529] mb-4">
                        {feature.description}
                      </p>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full aspect-video object-cover rounded-lg mt-auto mb-3"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;