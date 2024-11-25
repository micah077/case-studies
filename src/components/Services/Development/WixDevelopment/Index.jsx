import Image from "next/image";

import { wixFeaturedWork } from "@/utils/ServicesPagesData/WixDevelopmentPageData";

import TopRatedWixPartnersSection from "@/components/Common/Sections/TopRatedWixPartnersSection";
import ImageTextFeatureSection from "@/components/Common/Sections/ImageTextFeatureSection";
import FeaturedWorkSection from "@/components/Common/Sections/FeaturedWorkSection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import DevelopmentTimeLineSection from "./DevelopmentTimeLineSection";
import WixSolutionsSection from "./SolutionsSection";

const WixDevelopmentPage = () => {
  return (
    <main>
      <BackgroundImage
        src="/assets/images/Services/wixDev/bgImage.webp"
        alt="home page"
      >
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
          <div>
            <div className="max-w-[756px]">
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                From Ideas To flawless
              </h2>

              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-snug text-[white] font-bold uppercase">
                Designs: our <span className="text-[#FB724C]"> wix </span>
                <UnderLineText italic>Developers</UnderLineText>
              </h2>
              <h2 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                Handle it all
              </h2>
              <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[white] text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
                Let's build a booming website for your business with our
                breakthrough Wix development services. Our skillful Wix
                developers and Wix designers have a proven track record of
                building enviable websites using the platform. And we can build
                one for you too!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-12">
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
              <div className="absolute top-48 left-8 bg-[#ffffff15] w-[150px] -rotate-[10deg] h-[150px] p-4 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                <Image
                  width={130}
                  height={130}
                  className="rotate-[10deg]"
                  src="/assets/images/Services/wixDev/wix-logo.png"
                  alt="wix-logo"
                />
              </div>
            </div>
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/images/Services/wixDev/hero-image.webp"
              />
              <Image
                width={1000}
                height={1000}
                quality={100}
                src="/assets/images/Services/wixDev/hero-image.png"
                className="w-full object-fill"
                alt="section1"
              />
            </picture>
          </div>
        </section>
      </BackgroundImage>

      <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/wixDev/section2-image1.png"
        webpSrc="/assets/images/Services/wixDev/section2-image1.webp"
        altText="Section2Image"
        titlePart1="Looking For Custom Wix Design? We're Ready To"
        underlinedText="Make It For You!"
        titlePart2=""
        layoutDirection="row"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Searching for that perfect blend of creativity, uniqueness, and
          functionality for your online presence? Look no further! At Strugbits,
          we specialize in custom Wix web design, ensuring your website is not
          just like any other digital presence but a captivating masterpiece
          that leaves a lasting impression.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Our team of experts doesn't just do Wix website development; we craft
          digital experiences that resonate with your brand and audience. From
          eye-catching layouts to seamless navigation, we make sure every pixel
          reflects your unique vision. No matter if you're starting from
          absolute scratch or revamping an existing site, our custom Wix web
          design services are tailored to your needs. Let's turn your ideas into
          an online reality that stands out in the digital crowd!
        </p>
      </ImageTextFeatureSection>

      <ImageTextFeatureSection
        styleClass="mb-12"
        imageSrc="/assets/images/Services/wixDev/section2-image2.png"
        webpSrc="/assets/images/Services/wixDev/section2-image2.webp"
        altText="Section2Image"
        titlePart1="Professional wix developers to achieve your"
        underlinedText="endless growth"
        titlePart2=""
        layoutDirection="row-reverse"
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          When it comes to crafting online experiences, Strugbits is your beacon
          of excellence. We stand for struggles to succeed, and that's exactly
          what we do - we tackle the complexities and challenges of web
          development transforming them into the stepping stones for your
          digital world takeover. Our team of Wix developers is proficient and
          passionate about pushing the boundaries of what's possible in the
          digital world.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          What sets us apart as professionals in custom Wix web design and web
          development is our commitment to your growth. We take the time to
          understand your brand, your goals, and your target audience. Then,
          with the help of this knowledge, we employ cutting-edge technologies
          and innovative design strategies to create websites that captivate,
          engage, and convert visitors into loyal customers. It's not just about
          building websites; it's about building your digital future, one line
          of code at a time.
        </p>
      </ImageTextFeatureSection>

      <WixSolutionsSection />

      <DevelopmentTimeLineSection />

      <FeaturedWorkSection data={wixFeaturedWork} />

      <TopRatedWixPartnersSection />

      <section className=" bg-center bg-[image:--bgImageHeroSection] w-[100%]  bg-no-repeat bg-cover pt-[150px] lg:pt-0 ">
        <div className="bg-[#0b1724] bg-opacity-75">
          <div className="max-w-[1440px] py-28 mx-auto 2xl:px-0 px-[40px]">
            <div className="max-w-[1100px] mx-auto">
              <div className="w-full text-center px-4 text-white">
                <h6 className="font-DM text-[25px] lg:text-[45.59px] leading-[54.71px] text-center text-[white] font-[600] uppercase">
                  DON'T BELIEVE US, BELIEVE OUR CLIENTS' REVIEWS ON{" "}
                  <UnderLineText>THE WIX MARKETPLACE!</UnderLineText>
                </h6>
              </div>
              <div className="w-full mt-5 px-8">
                <p className="text-center text-white font-Poppins text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] font-[300] ">
                  Don't just take our word for it—listen to our satisfied
                  clients! Check out their reviews on the Wix Marketplace and
                  see why they love our services.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center mt-12">
              <CustomButton
                btnLabel={"Read More"}
                linkBtn
                link={
                  "https://manage.wix.com/marketplace/wix-partner/strugbits"
                }
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>

      <BusinessSection
        firstText="Ready to Grow"
        orangeText="Your Business"
        lastText="With Skilled Wix Website Developers?"
        para="Struggling with a website that doesn’t work for you? Our skilled Wix developers can fix that! We’ll create a site that’s easy to use and helps your business attract more customers."
      />
    </main>
  );
};

export default WixDevelopmentPage;
