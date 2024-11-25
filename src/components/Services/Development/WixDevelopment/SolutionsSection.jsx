"use client";

import UnderLineText from "@/components/Common/UnderLineText";
import DevelopmentCard from "@/components/Common/DevelopmentCard";
import { wixSolutions } from "@/utils/ServicesPagesData/WixDevelopmentPageData";

const WixSolutionsSection = () => {
  return (
    <section className="bg-[image:--bgImageHeroSectionWixDev] 2xl:px-0 px-[40px] relative w-full bg-no-repeat bg-center  bg-cover   py-24 mx-auto">
      <div className="max-w-[1440px]  mx-auto">
        <div className="max-w-[870px] mx-auto">
          <div className="w-full text-center m-auto text-white">
            <h6 className="text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] font-DM text-center font-[700] uppercase">
              Why Choose{" "}
              <span className="text-[#FF6E4E] font-[600]"> Strugbits </span> for
              Your 360° Wix <UnderLineText>Solutions?</UnderLineText>
            </h6>
          </div>

          <div className=" w-full mt-5 m-auto">
            <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] text-white">
              At Strugbits, we aim to become your partners in progress. Hence,
              you don't just get a website, but also a comprehensive Wix
              solution designed to elevate your digital presence to new heights.
              Here's what you will get if you entrust us with your web journey:
            </p>
          </div>
        </div>
        <div className="flex items-center w-full m-auto justify-center mt-12 gap-x-[45px] gap-y-[40px] flex-wrap max-w-[1120px]">
          {wixSolutions.length &&
            wixSolutions.map((item, index) => {
              return <DevelopmentCard key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default WixSolutionsSection;
