import Image from "next/image";
import { professionalSeoServicesNew } from "@/utils/ServicesPagesData/SeoPageData";
import ProfessionalSeoServiceSlider from "../ProfessionalSeoServiceComponents/ProfessionalSeoServiceSlider";
import ProfessionalSeoServiceCard from "../ProfessionalSeoServiceComponents/ProfessionalSeoServiceCard";
import BackgroundImage from "@/components/Common/BackgroundImage";

const SeoAuditServicesSection = () => {
  return (
    <BackgroundImage
      src="/assets/images/Services/SEO/seoServices-bgImage.png"
      alt="services sections bg"
    >
      <div className=" py-16 px-6 mx-auto max-w-[1440px]">
        <div className="relative w-full ">
          <div className="max-w-[850px] flex flex-col gap-3 text-white mx-auto">
            <h2 className="font-poppins font-[600] text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center">
              See What's Included in Our{" "}
              <span className="text-[#FF6E4E]">SEO Audit</span> Services
            </h2>
            <div className="max-w-[750px] mx-auto">
              <p className="font-poppins text-center md:leading-[26.16px] mt-4 text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
                Explore how our SEO copywriting services can help your website
                get noticed online. We'll use the right words to make sure your
                site shows up when people search, helping you connect with more
                customers.
              </p>
            </div>
          </div>
        </div>

        <section className="py-14 flex flex-wrap justify-evenly gap-[10px]">
          {professionalSeoServicesNew.map((data, i) => {
            const { title, desc, id } = data;
            return (
              <div
                key={i}
                className="max-w-[320px] border-2 border-[#FFFFFF66] rounded-[8px] h-[384px] relative overflow-hidden parent group p-3 md:mx-2 overflow-hidden"
              >
                <div className="bg-[#ffffff0e] rounded-[8px] h-full w-full px-2 text-white flex justify-between group-[&:hover]:bg-[#FF6E4E] relative">
                  <div className="flex flex-col gap-4 justify-center items-center text-center">
                    <div className="text-[#FF6E4E] text-[36px] font-poppins font-[600] group-[&:hover]:text-white">
                      <h3>{id}.</h3>
                    </div>
                    <h4 className="text-[20px] font-poppins font-[500] text-white">
                      {title}
                    </h4>
                    <p className="text-[15px] leading-[24px] font-poppins font-[300] text-[white]">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </BackgroundImage>
  );
};

export default SeoAuditServicesSection;
