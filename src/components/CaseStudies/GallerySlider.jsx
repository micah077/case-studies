"use client";

import React, { useState } from "react";

import { PortfolioData } from "@/utils/CaseStudiesPageData";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ data }) => {
  const [isPause, setIsPause] = useState(false);
  return (
    <>
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
          // 899: {
          //   slidesPerView: 1,
          //   spaceBetween: 10,
          // },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
            fadeEffect: true,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url('${e.img}')`,
                backgroundSize: "100% 100%",
                backgroundPosition: "top",
                backgroundRepeat: `no-repeat`,
              }}
              className="max-w-[350px] h-[625px]  2xl:min-h-[848px] xl:max-w-[552px] lg:max-w-[550px] sm:max-w-[600px] mx-auto p-2"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const GallerySlider = () => {
  return (
    <div className="bg-[#121f35] py-20 overflow-hidden">
      <Slider data={PortfolioData} />
    </div>
  );
};

export default GallerySlider;
