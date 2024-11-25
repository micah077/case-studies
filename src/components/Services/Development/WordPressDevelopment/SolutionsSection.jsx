"use client";

import UnderLineText from "@/components/Common/UnderLineText";
import DevelopmentCard from "@/components/Common/DevelopmentCard";
import { wixSolutions } from "@/utils/ServicesPagesData/WixDevelopmentPageData";
import { wordpressServices } from "@/utils/ServicesPagesData/WordpressDevelopmentData";

const WordPressSolutionsSection = () => {
  return (
    <section className="bg-[image:--bgImageHeroSectionWixDev] 2xl:px-0 px-[40px] relative w-full bg-no-repeat bg-center  bg-cover   py-24 mx-auto">
      <div className="max-w-[1440px]  mx-auto">
        <div className="max-w-[870px] mx-auto">
          <div className="w-full   text-center m-auto text-white">
            <h6 className="text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] font-DM text-center font-[700] uppercase">
              Let's Uncover What You'll Get In Our WordPress{" "}
              <UnderLineText>Services?</UnderLineText>
            </h6>
          </div>

          <div className="w-full mt-5 m-auto">
            <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] text-white">
              When you choose Strugbits for your WordPress services, you're
              getting more than just a website; you're gaining access to a world
              of digital excellence. Here are all the services that we offer to
              make your digital presence the actual STAR OF THE SHOW:
            </p>
          </div>
        </div>
        <div className="flex items-center w-full m-auto justify-center mt-12 gap-x-[45px] gap-y-[40px] flex-wrap max-w-[1120px]">
          {wordpressServices.length &&
            wordpressServices.map((item, index) => {
              return <DevelopmentCard key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default WordPressSolutionsSection;
