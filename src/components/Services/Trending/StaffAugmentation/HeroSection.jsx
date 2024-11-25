import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import SkillsSlider from "./SkillsSlider";

import { skills } from "@/utils/LandingPageData";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundSize: "100% 100%",
      }}
      className="pt-[120px] sm:pt-[140px] bg-center bg-[image:--bgImageHeroSectionLandingPage] bg-no-repeat bg-cover"
    >
      <div className="w-full px-6">
        <div className="w-full max-w-[1380px] mx-auto py-12 md:py-16 3xl:py-20">
          <h1 className="font-poppins text-[22px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[62px] text-center lg:text-left text-[white] font-bold uppercase mb-8 lg:mb-12 ">
            Quality Technical
            <span className="text-[#FB724C]"> Staff Augmentation, </span>
            Exceptional Customer Support, and honest trustworthy
            <UnderLineText italic> partnerships</UnderLineText>
          </h1>

          <div className="flex flex-col md:flex-row w-full items-center gap-8 mt-8 text-center md:text-left">
            <CustomButton
              btnLabel={"Discuss With Us"}
              link={"/contact-us"}
              linkBtn={true}
            />

            <p className=" font-poppins text-[white] text-[12px] md:text-[14px] ">
              Discover your perfect remote team quickly, only with Strugbits! We
              equip small, medium, and large enterprises with top technical
              talent, whether it’s for an individual or an entire team, You’ll
              gain a true partner focused on delivering excellent technical
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div
        id="technical-skills"
        className="pt-6 pb-16 md:pt-8 md:pb-20 3xl:pt-10 3xl:pb-28"
      >
        <SkillsSlider direction={1} slides={skills.slice(0, 11)} />
        <SkillsSlider direction={-1} slides={skills.slice(11)} />
      </div>
    </section>
  );
};

export default HeroSection;
