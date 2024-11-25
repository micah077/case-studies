"use client";
import React from "react";
import Image from "next/image";

import PartnerCardSlider from "./PartnerCardSlider";
import PartnerCard from "./PartnerCard";

import { partnerWithUs } from "@/utils/LandingPageData";

const PartnerWithUs = () => {
  const partnerSliderRef = React.createRef();

  const handleBackward = () => {
    partnerSliderRef.current && partnerSliderRef.current.slickPrev();
  };

  const handleForward = () => {
    partnerSliderRef.current && partnerSliderRef.current.slickNext();
  };
  return (
    <main className="py-24 md:py-32 3xl:40">
      <div className="max-w-[1324px] mx-auto px-6">
        <div className="flex gap-6 justify-center lg:justify-between items-end font-poppins mb-10 md:mb-12 3xl:mb-16">
          <div className="text-white max-w-[663px] text-left ">
            <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left font-bold">
              Why <span className="text-[#FB724C]">Partner</span> With Us
            </h6>
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-2 text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
              We offer trusted talent, seamless teamwork, and lightning-fast
              hiring, making us the go-to choice for businesses worldwide.
            </p>
          </div>
          <div className="text-white gap-x-2 hidden lg:flex">
            <button
              className="rounded-xl size-[44px] border-white border-solid border flex justify-center items-center"
              id="button-left"
              onClick={handleBackward}
            >
              <Image
                src={"/assets/icons/left-arrow.svg"}
                alt=""
                width={24}
                height={16}
              />
            </button>
            <button
              className="rounded-xl size-[44px] border-white border-solid border flex justify-center items-center"
              id="button-right"
              onClick={handleForward}
            >
              <Image
                src={"/assets/icons/right-arrow.svg"}
                alt=""
                width={24}
                height={16}
              />
            </button>
          </div>
        </div>
        <PartnerCardSlider partnerSliderRef={partnerSliderRef}>
          {partnerWithUs.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center w-full"
            >
              <PartnerCard
                title={item.title}
                desc={item.detail}
                imgSrc={item.image}
              />
            </div>
          ))}
        </PartnerCardSlider>
      </div>
    </main>
  );
};

export default PartnerWithUs;
