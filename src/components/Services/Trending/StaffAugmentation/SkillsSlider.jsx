"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from "next/image";

let timer;
const SkillsSlider = ({ slides, direction }) => {
  return (
    <div className="">
      <Splide
        aria-label="What We Offers"
        tag="div"
        className="w-full mx-auto mb-6"
        extensions={{ AutoScroll }}
        options={{
          // type: "loop",
          type: "loop",
          autoWidth: true,
          focus: direction === 1 ? "right" : "left",
          preloadPages: 1,
          gap: 24,
          arrows: false,
          pagination: false,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: direction,
          },
        }}
      >
        {slides.map(({ id, skillName, src }) => {
          return (
            <SplideSlide
              key={id}
              className="w-max flex-1 px-4 py-2 md:px-6 md:py-4 flex items-center flex-nowrap justify-center gap-x-4 md:gap-x-6 3xl:gap-x-8 bg-white rounded-lg"
            >
              <Image
                src={src}
                width={52}
                height={52}
                className="max-w-[36px] md:max-w-[42px] 3xl:max-w-[52px]"
                alt="image"
              />
              <h6 className="w-max max-w-max text-lg md:text-xl 3xl:text-[22px] font-poppins">
                {skillName}
              </h6>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default SkillsSlider;
