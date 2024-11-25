import React from "react";
import Image from "next/image";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const slides = [
  {
    image: "/assets/images/Home/content-writing.png",
    heading: "Content Writing",
  },
  {
    image: "/assets/images/Home/seo.png",
    heading: "Website SEO Solution",
  },
  {
    image: "/assets/images/Home/web-dev.png",
    heading: "Web Development Solution",
  },
  {
    image: "/assets/images/Home/ui-ux.png",
    heading: "UI/UI & Graphic Design Solutions",
  },
  {
    image: "/assets/images/Home/app-dev.png",
    heading: "App Development Solution",
  },
];

const ContactUsSlider = () => {
  const splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    arrows: false,
    pagination: false,
    autoStart: true,
    gap: "1rem",
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <div className=" my-6 ">
      <Splide
        options={splideOptions}
        extensions={{ AutoScroll }}
        aria-label="Continuous Content Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className=" h-[276px] max-w-[376px] rounded-[10px] justify-center text-center shadow-2xl shadow-[#030A1E14] font-bold">
              <div className="px-12 h-[80%]">
                <Image
                  width={500}
                  height={500}
                  src={slide.image}
                  className="max-w-[200px] mx-auto"
                  alt={"Consultation Icon"}
                />
              </div>
              <p className=" px-8 text-[20px] text-black text-center bottom-0">
                {slide.heading}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ContactUsSlider;
