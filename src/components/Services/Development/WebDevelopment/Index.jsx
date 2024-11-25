"use client";
import { useState } from "react";
import Image from "next/image";

import ImageTextFeatureSection from "@/components/Common/Sections/ImageTextFeatureSection";
import OurAchievementsSection from "@/components/Common/Sections/OurAchievementsSection";
import ChooseTechnologySection from "@/components/ContactUs/ChooseTechnologySection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import AboutUsModal from "@/components/Layout/Navbar/AboutUsModal";
import ServicesSection from "./ServicesSection";

const WebDevelopmentPage = () => {
  const [aboutModel, setAboutModel] = useState(false);
  const [nav, setNav] = useState(false);

  const handleAboutModel = () => {
    setAboutModel(true);
  };
  return (
    <>
      {aboutModel && (
        <AboutUsModal setNav={setNav} setAboutModel={setAboutModel} />
      )}

      <main>
        <BackgroundImage
          src="/assets/images/bg.webp"
          alt="Web development page"
        >
          <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
            <div>
              <div className="max-w-[756px]">
                <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                  Secure & User Centric
                </h6>

                <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-10 text-[white] font-bold uppercase">
                  <span className="text-[#FB724C]"> website </span>
                  <UnderLineText italic>Development</UnderLineText>
                </h6>
                <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                  Services
                </h6>
                <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[white] text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
                  At Strugbits, we're not just web developers, we're THE DIGITAL
                  ARCHITECTS! Transforming your ideas into captivating, secure,
                  and user-friendly websites is our passion. Let's build your
                  online success story together with our up-to-the-mark website
                  development services!
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-12">
                  <CustomButton
                    btnLabel={"Discuss With Us"}
                    linkBtn
                    link={"/contact-us"}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-[653px] relative">
              <div className="hidden lg:block xl:block">
                <div className="absolute bottom-4 left-0 bg-[#ffffff15] w-[95px] -rotate-[20deg] h-[95px] p-4 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                  <Image
                    width={150}
                    height={150}
                    className="rotate-[10deg]"
                    src="/assets/images/Services/web-dev/react.png"
                    alt="react-logo"
                  />
                </div>
                <div className="absolute -top-8 right-[32%] bg-[#ffffff15] w-[95px] -rotate-[20deg] h-[95px] p-4 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                  <Image
                    width={150}
                    height={150}
                    className="rotate-[20deg]"
                    src="/assets/images/Services/web-dev/wix.png"
                    alt="wix-logo"
                  />
                </div>
                <div className="absolute -bottom-2 right-[0%] bg-[#ffffff15] w-[95px] rotate-[20deg] h-[95px] p-4 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                  <Image
                    width={150}
                    height={150}
                    className="-rotate-[20deg]"
                    src="/assets/images/Services/web-dev/wordpress.png"
                    alt="WordPress-logo"
                  />
                </div>
              </div>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/Services/web-dev/sec1.webp"
                />
                <Image
                  width={1000}
                  height={1000}
                  quality={100}
                  src="/assets/images/Services/web-dev/sec1.png"
                  className="w-full object-fill"
                  alt="section1ImgAFFORDABLE, STUNNING WEB DESIGN "
                />
              </picture>
            </div>
          </section>
        </BackgroundImage>

        <ImageTextFeatureSection
          styleClass="my-8"
          imageSrc="/assets/images/Services/web-dev/sec2.png"
          webpSrc="/assets/images/Services/web-dev/sec2.webp"
          altText="Section2Image"
          titlePart1="What Makes Custom Web
Development a"
          underlinedText="Smart Choice?"
          titlePart2=""
          layoutDirection="row"
        >
          <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
            Choosing custom web development services is a brilliant move to stay
            ahead of the game in the digital era. Here, at Strugbits, we highly
            believe in the power of tailored solutions. Web templates may be
            readily available, but they can't capture the unique essence of your
            brand.
          </p>
          <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
            With custom web development, you're not just getting a visually
            appealing website; you're getting a strategic tool that aligns with
            your business goals. Every element, from design to functionality, is
            carefully curated to resonate with your target audience. This
            personal touch enhances user engagement and sets the stage for
            increased conversions and business growth. So, if you're looking to
            make a smart investment in your online presence, custom web
            development is the way forward, and Strugbits is your go-to partner
            for extraordinary custom web development services.
          </p>
        </ImageTextFeatureSection>

        <ImageTextFeatureSection
          styleClass="mb-8"
          imageSrc="/assets/images/Services/web-dev/sec3.png"
          webpSrc="/assets/images/Services/web-dev/sec3.webp"
          altText="Section2Image"
          titlePart1="Ease Your Way Forward with a Custom"
          underlinedText="Web Development"
          titlePart2="Company"
          layoutDirection="row-reverse"
        >
          <p className="mt-8 text-[#8A90A2] font-DM text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] font-normal">
            Get ready to crack the code of success in the digital landscape.
            When you choose Strugbits, a custom web development company, you're
            choosing a smooth and hassle-free journey to a captivating online
            presence. We understand that your website is the digital face of
            your business, and it deserves to shine brighter than other brands.
            That's where our web development expertise comes into play.
          </p>
          <p className="mt-8 text-[#8A90A2] font-DM text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] font-normal">
            We take pride in simplifying the complexities of web development for
            you. Our team of experienced web developers handles everything, from
            conceptualization to execution, so you can focus on what you do best
            - running your business. With clear communication, affordable
            pricing, and a commitment to meeting deadlines, we make sure that
            your project progresses seamlessly.
          </p>
        </ImageTextFeatureSection>

        <section className="2xl:px-0 px-[30px] sm:px-[50px] bg-cover pt-16 2xl:pt-32 pb-16 bg-[image:--achivementSectionBg]">
          <OurAchievementsSection />
          <ChooseTechnologySection />
        </section>

        <ServicesSection handleAboutModel={handleAboutModel} />

        <BusinessSection
          firstText="Ready to Grow"
          orangeText="Your Business"
          lastText="With Skilled Web Website Developers?"
          para="Boost your business and take your online presence to the next level with our web developers’ skills. Get in touch with us now to begin your digital transformation journey with custom web development."
        />
      </main>
    </>
  );
};

export default WebDevelopmentPage;
