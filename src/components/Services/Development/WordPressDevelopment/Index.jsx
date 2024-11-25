import Image from "next/image";

import { wordPressFeaturedWork } from "@/utils/ServicesPagesData/WixDevelopmentPageData";

import ImageTextFeatureSection from "@/components/Common/Sections/ImageTextFeatureSection";
import FeaturedWorkSection from "@/components/Common/Sections/FeaturedWorkSection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

import WordPressSolutionsSection from "./SolutionsSection";

const WordPressDevelopmentPage = () => {
  return (
    <main>
      <BackgroundImage
        src="/assets/images/Services/wixDev/bgImage.webp"
        alt="home page"
      >
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row py-32 sm:py-32 md:py-32 lg:py-36 xl:py-48 px-8">
          <div>
            <div className="max-w-[756px]">
              <div className="max-w-[820px] ml-auto">
                <h6 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                  Lead The Way to SUCCESS
                </h6>

                <h6 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left leading-snug text-[white] font-bold uppercase">
                  With WordPress{" "}
                  <span className="relative italic w-fit">
                    <UnderLineText italic>Development</UnderLineText>
                    <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-2 lg:bottom-3.5 right-0" />
                  </span>
                </h6>
                <h6 className="font-poppins text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
                  company
                </h6>
                <p className="font-poppins md:leading-[26.16px] text-center lg:text-left mt-4 text-[white] text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[300]">
                  As a top-notch WordPress development company, Strugbits
                  provides solutions that take your online presence and business
                  to a whole new level. We focus on creativity and technology to
                  deliver extraordinary services. Your website should be your
                  online masterpiece and we're here to make it happen!
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
          </div>
          <div className="max-w-[653px] relative">
            <div className="hidden lg:block xl:block">
              <div className="absolute top-48 left-8 bg-[#ffffff15] w-[150px] -rotate-[10deg] h-[150px] p-4 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-[27px] border border-[#FFFFFF] overflow-hidden">
                <Image
                  width={130}
                  height={130}
                  className="rotate-[10deg]"
                  src="/assets/images/Services/wordpressDev/wordpress-logo.png"
                  alt="wordpress-logo"
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
        imageSrc="/assets/images/Services/wordpressDev/section2-image1.png"
        webpSrc="/assets/images/Services/wordpressDev/section2-image1.webp"
        altText="Section2Image"
        titlePart1=" Stand Out from the Crowd with"
        underlinedText="Custom-Built"
        titlePart2="Websites on WordPress"
        layoutDirection="row"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          In a digital world filled with the ordinary, why settle for anything
          less than extraordinary? At Strugbits, we've made it our mission to
          redefine the online experience through custom WordPress development
          and design. We believe your online presence should be as unique as
          your brand, and that's precisely what we offer.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Our WordPress services go beyond the ordinary to craft websites that
          captivate, engage, and convert. We don't just use templates; we
          breathe life into your brand's identity through tailor-made designs
          that resonate with your audience. Whether you're a startup with a big
          dream or an established enterprise seeking a fresh digital
          perspective, our expertise in web design and custom WordPress
          development ensures your online presence stands out, leaving a lasting
          impact.
        </p>
      </ImageTextFeatureSection>

      <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/wordpressDev/section2-image2.png"
        webpSrc="/assets/images/Services/wordpressDev/section2-image2.webp"
        altText="Section3Image"
        titlePart1=" Stop Your Search - Hire The Creative"
        underlinedText="WordPress Designers"
        titlePart2="Today!"
        layoutDirection="row-reverse"
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Creative design isn't just about aesthetics; it's about engaging your
          audience, telling your brand's unique story, and ultimately driving
          results. Our innovative approach to web design ensures that your
          website not only looks spectacular but also functions seamlessly to
          meet your business objectives. No matter it's crafting a visually
          stunning homepage, optimizing user experience, custom WordPress
          development, or integrating cutting-edge features, our creativity
          knows no bounds.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          So, stop your search and get started on a creative journey with
          Strugbits today. Let our creative WordPress website designers
          transform your digital landscape into a captivating masterpiece that
          resonates with your audience, sparks curiosity, and drives success.
          Your brand's potential is limitless, and it's time to unleash it with
          a touch of creativity.
        </p>
      </ImageTextFeatureSection>

      <ImageTextFeatureSection
        styleClass="my-8"
        imageSrc="/assets/images/Services/wordpressDev/section2-image3.png"
        webpSrc="/assets/images/Services/wordpressDev/section2-image3.webp"
        altText="Section3Image"
        titlePart1="We Are Your One-Stop Shop For Your Complete"
        underlinedText="WordPress"
        titlePart2="Solutions"
        layoutDirection="row"
        buttonConfig={{
          label: "Discuss With Us",
          link: "/contact-us",
        }}
      >
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Strugbits is a place where your WordPress dreams find their ultimate
          destination. We pride ourselves on being your all-in-one hub for
          WordPress development services that puts you ahead of the competition.
          From inception to execution, we're your partners in creating digital
          excellence.
        </p>
        <p className="font-DM mt-8 text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px]">
          Why juggle multiple service providers when you can have it all under
          one roof? Our team of WordPress experts is your go-to resource for
          turning your digital vision into reality. With a comprehensive suite
          of WordPress development services and a deep understanding of web
          development, we're equipped to handle every aspect of your online
          journey. We're your one-stop shop for WordPress solutions that elevate
          your brand and streamline your digital presence.
        </p>
      </ImageTextFeatureSection>

      <WordPressSolutionsSection />

      <FeaturedWorkSection data={wordPressFeaturedWork} />

      <BusinessSection
        firstText="Ready to Grow"
        orangeText=" Your Business"
        lastText="With Skilled Wordpress Website Developers?"
        para="If your website is not doing enough for your business, we’ve got the perfect solution for you. Our skilled WordPress developers will build a site that works for you, making it easy to attract and engage more customers"
      />
    </main>
  );
};

export default WordPressDevelopmentPage;
