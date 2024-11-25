"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import { TechnologiesData } from "@/utils/ServicesPagesData/WebDevPageData";
import { useEffect, useState } from "react";

import Image from "next/image";

const btnFilter = [
  {
    btnLabel: "Frontend",
    type: "frontend",
  },
  {
    btnLabel: "Backend",
    type: "backend",
  },
  {
    btnLabel: "Database",
    type: "database",
  },
  {
    btnLabel: "CMS",
    type: "cms",
  },
];
const TechnologiesCard = ({ imgSrc, title }) => (
  <div className="max-w-[382px] w-full min-h-[258px] border border-[#B7B7B7] rounded-lg flex flex-col gap-4 justify-center items-center">
    <div className="w-20">
      <Image height={100} width={100} quality={100} src={imgSrc} alt={title} />
    </div>
    <div>
      <p className="font-poppins text-[21px] font-[400] text-[#122337]">
        {title}
      </p>
    </div>
  </div>
);
const ChooseTechnologySection = () => {
  const [selectedStack, setSelectedStack] = useState("frontend");
  const [mainSlider, setMainSlider] = useState(null);

  const activeBtnStyle = "border-[#FF6E4E] text-[#FF6E4E] bg-[#FFF0EC]";
  const nonActiveBtnStyle = " text-[#263238] border-[#263238]";

  useEffect(() => {
    if (mainSlider) {
      mainSlider.go(0);
    }
  }, [selectedStack]);
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="max-w-[900px] mx-auto mt-8 md:mt-16">
        <h3 className="font-poppins text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center text-[#0A141F] font-bold capitalize">
          Choosing The Best <span className="text-[#FF6E4E]">Technology</span>
          <br /> For Your Projects
        </h3>
      </div>
      <div className="flex justify-center flex-wrap gap-5 items-center py-8">
        {btnFilter.map((data, i) => {
          const { btnLabel, type } = data;
          return (
            <button
              key={i}
              onClick={() => setSelectedStack(type)}
              className={`border rounded-[24px] py-[10px] px-[30px] font-poppins text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px]  ${
                type === selectedStack ? activeBtnStyle : nonActiveBtnStyle
              }`}
            >
              {btnLabel}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end gap-3 py-5">
        <button onClick={() => mainSlider.go("<")}>
          <FaArrowLeftLong color="#0A141F" fontSize={20} />
        </button>
        <button onClick={() => mainSlider.go(">")}>
          <FaArrowRightLong color="#0A141F" fontSize={20} />
        </button>
      </div>

      <div className="h-[275px]">
        <Splide
          options={{
            fixedWidth: 316,
            isNavigation: true,
            gap: "1rem",
            focus: "center",
            pagination: false,
            cover: true,
            arrows: false,
            rewind: true,
          }}
          aria-label="Technology Cards Main Slider"
          onMounted={(splide) => {
            setMainSlider(splide);
          }}
        >
          {TechnologiesData.map((data, index) => {
            const { img, title, type } = data;
            if (selectedStack === type) {
              return (
                <SplideSlide key={index} className="slider-img">
                  <TechnologiesCard imgSrc={img} title={title} />
                </SplideSlide>
              );
            }
          })}
        </Splide>
      </div>
    </div>
  );
};

export default ChooseTechnologySection;
