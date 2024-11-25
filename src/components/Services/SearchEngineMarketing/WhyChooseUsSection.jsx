import React from "react";

import { topSeoServices } from "@/utils/ServicesPagesData/SeoPageData";
import SeoCardSlider from "./SeoCardSlider";
import SeoServicesCard from "./SeoServicesCard";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:pb-[125px] bg-[image:--bgImageSec4Seo]">
      <div className="lg:flex-col md:gap-[60px] py-8 px-6">
        <div className="max-w-[850px] flex flex-col gap-3 text-white mx-auto">
          <div className="text-[16px] text-[#FF6E4E] font-[500]">
            <h5 className="text-center">Why Choose Us</h5>
          </div>
          <div>
            <h2 className="text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center font-poppins font-[600]">
              Seeking Top-tier SEO Services?{" "}
              <br className="hidden lg:block xl:block 2xl:block" /> Why{" "}
              <span className="text-[#FF6E4E]">Strugbits</span> Leads The Way{" "}
            </h2>
          </div>
          <div>
            <p className="font-poppins md:leading-[26.16px] text-center mt-4 text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
              Ready to take your brand to the top of search engine results?
              Choose Strugbits for top-notch SEO services! With guaranteed
              results, tailored solutions, and friendly support, we're your
              ticket to online success.
            </p>
          </div>
        </div>
      </div>
      <SeoCardSlider>
        {topSeoServices.map((e, i) => (
          <div key={i} className="flex justify-center items-center w-full">
            <SeoServicesCard title={e.title} desc={e.desc} imgSrc={e.imgSrc} />
          </div>
        ))}
      </SeoCardSlider>
    </section>
  );
};

export default WhyChooseUsSection;
