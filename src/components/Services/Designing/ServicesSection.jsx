"use client";

import DevelopmentCard from "@/components/Common/DevelopmentCard";
import { uiUxServices } from "@/utils/ServicesPagesData/UiUxDesignPageData";

const ServicesSection = () => {
  return (
    <div className=" px-[40px]">
      <div className="max-w-[1440px]  mx-auto mb-16">
        <div className="max-w-[870px] mx-auto">
          <div className="w-full   text-center m-auto text-white">
            <h6 className="font-DM text-[25px] lg:text-[50px] text-center  text-[white] font-bold uppercase">
              What You'll Get in{" "}
              <span className="text-[#FB724C]">UI/UX Design</span>{" "}
              <span className="relative w-fit">
                <span className="relative w-full z-10">Services</span>
                <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-3.5 right-0" />
              </span>
            </h6>
          </div>

          <div className=" w-full   mt-5 m-auto">
            <p className="text-center text-white font-poppins text-[12px] md:text-[14.95px] font-[300]">
              Our UI/UX design services are a well-crafted package of
              excellence, designed to elevate your online presence and boost
              user satisfaction. Here's a glimpse of what you can expect when
              you choose Strugbits
            </p>
          </div>
        </div>
        <div className="flex items-center w-full m-auto justify-center mt-12 gap-x-[45px] gap-y-[40px] flex-wrap max-w-[1120px]">
          {uiUxServices.length &&
            uiUxServices.map((item, index) => {
              return (
                <DevelopmentCard
                  textFlex={`1.5`}
                  imgFlex={`0.5`}
                  key={index}
                  item={item}
                />
              );
            })}
        </div>

        <div className="mt-10 text-center">
          <button className="text-white font-DM hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out  border-2 w-[229px] font-[400] border-white rounded-3xl text-sm p-2 text=[10px]">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
