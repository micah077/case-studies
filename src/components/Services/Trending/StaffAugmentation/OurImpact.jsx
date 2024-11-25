import Image from "next/image";

import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

const OurImpact = () => {
  return (
    <section className="bg-white pt-8 pb-12 md:py-14 3xl:py-20 w-full flex mx-auto lg:py-10 2xl:px-0 px-[30px] sm:px-[50px] my-10 lg:my-0 flex-col justify-center items-center md:gap-6 gap-10 lg:flex-row lg:gap-x-[76px] item-center">
      <div className=" w-full flex max-w-[1440px] mx-auto flex-col justify-center items-center md:gap-6 gap-10 lg:flex-row lg:gap-x-[76px] item-center">
        <div className="relative flex-[1]">
          <div className="hidden lg:block relative">
            <Image
              width={584}
              height={471}
              src={"/assets/images/Landing Page/map.png"}
              className="w-full h-auto"
              alt="logos"
            />

            <div className="w-full h-full absolute top-0">
              <Image
                width={116}
                height={116}
                src={"/assets/images/Landing Page/Impact/person-1.png"}
                alt="logos"
                className="top-[62%] left-[6%] absolute customAnimationForImpact2"
              />
              <Image
                width={94}
                height={94}
                src={"/assets/images/Landing Page/Impact/person-2.png"}
                className="top-[52%] left-[33%] absolute customAnimationForImpact"
                alt="logos"
              />
              <Image
                width={140}
                height={140}
                src={"/assets/images/Landing Page/Impact/person-3.png"}
                className="top-[70%] left-[66%] absolute customAnimationForImpact2"
                alt="logos"
              />
              <Image
                width={116}
                height={116}
                src={"/assets/images/Landing Page/Impact/person-4.png"}
                className="top-[22%] left-[70%] absolute customAnimationForImpact"
                alt="logos"
              />
            </div>
            {/* <div className=" customAnimation6 z-50  h-[112px] w-[113px] absolute top-16 left-0 ">
              <Image
                width={113}
                height={112}
                src={"/assets/images/Services/SEO/sec3Second.png"}
                alt="logos"
              />
            </div>

            <div className=" customAnimation3 z-50  h-[179px] w-[251px] absolute -bottom-16 right-16 ">
              <Image
                width={251}
                height={179}
                src={"/assets/images/Services/SEO/sec3Third.png"}
                alt="logos"
              />
            </div>

            <div className="  h-[327px] -z-30 w-[345px] absolute -top-24 right-0 ">
              <Image
                width={345}
                height={327}
                src={"/assets/images/Services/SEO/Icons/sec3Icon.svg"}
                alt="vectorIcon"
              />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3 3xl:gap-5 flex-[1]">
          <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left font-bold">
            Our
            <span className="text-[#FB724C]"> Impact </span>
            Knows No
            <UnderLineText>Boundaries</UnderLineText>
          </h6>
          <div className="mt-4 md:t-6 3xl:mt-8 md:mt-[24px] flex flex-col gap-5 text-[#8A90A2]  text-[12px]  md:text-[16.41px] ">
            <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
              We operate globally, hiring talent from all over the world. Our
              services reach every corner of the globe, offering top-notch
              remote developers and teams without any geographical limits. We
              find the best talent and ensure they're ready to start as soon as
              possible, making teamwork easy, no matter where you are. We're all
              about quality and ensuring you receive excellent customer support.
              You can count on us to maintain honesty every step of the way.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-4 md:t-6 3xl:mt-8">
            <CustomButton
              btnLabel={"Discuss With Us"}
              link={"/contact-us"}
              linkBtn={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
