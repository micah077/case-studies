"use client";
import React, { useState } from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";

import ProfessionalSeoServiceCard from "./ProfessionalSeoServiceCard";

const ProfessionalSeoServiceSlider = ({ data }) => {
  const [isPause, setIsPause] = useState(false);
  return (
    <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onMouseDown={() => setIsPause((prev) => !prev)}
      allowSlideNext={!isPause}
      allowSlidePrev={!isPause}
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: true,
        renderBullet: (c, i) => (c = ""),
      }}
      breakpoints={{
        899: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {data.map((e, i) => (
        <SwiperSlide key={i}>
          <ProfessionalSeoServiceCard title={e.title} desc={e.desc} id={e.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProfessionalSeoServiceSlider;
