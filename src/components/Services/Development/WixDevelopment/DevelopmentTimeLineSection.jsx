"use client";

import { accordionData } from "@/utils/ServicesPagesData/WixDevelopmentPageData";

import Container from "@/components/Common/Container/Container";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";
import CustomAccordion from "@/components/Common/CustomAccordion";

const DevelopmentTimeLineSection = () => {
  return (
    <Container className={"lg:mt-16 lg:items-start xl:min-h-[550px] "}>
      <div className="flex-[1]">
        <div className="max-w-[644px]">
          <h6 className="font-DM text-[25px] lg:text-[45.59px] leading-[54.71px] text-center lg:text-left font-bold text-[#0A141F] capitalize">
            Wix Website
          </h6>
          <h6 className="font-DM text-[25px] lg:text-[45.59px] leading-[54.71px] text-center lg:text-left font-bold text-[#0A141F] capitalize">
            Development <UnderLineText>Timeline</UnderLineText>
          </h6>
          <div className="text-[#8A90A2] mt-7">
            <p className="text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
              We highly believe in delivering a digital experience that exceeds
              all your expectations. Our structured Wix website development
              timeline ensures that your online journey is efficient,
              transparent, and, most importantly, tailored to your unique needs
              and goals. Here's a glimpse into the detailed process.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
              <CustomButton
                btnLabel={"Discuss With Us"}
                linkBtn
                link={"/contact-us"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[1] ">
        <div className="max-w-[590px] ml-auto">
          <CustomAccordion data={accordionData} />
        </div>
      </div>
    </Container>
  );
};

export default DevelopmentTimeLineSection;
