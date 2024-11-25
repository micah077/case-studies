import Image from "next/image";

import { FeaturedWorkSectionDark } from "@/components/Common/Sections/FeaturedWorkSection";
import BusinessSection from "@/components/Common/Sections/BusinessSection";
import ImgWithTextSection from "@/components/Common/ImgWithTextSection";
import TechnologiesCard from "@/components/Common/TechnologiesCard";
import Container from "@/components/Common/Container/Container";
import CustomButton from "@/components/Common/CustomButton";

import DesignProcessSection from "./DesignProcessSection";
import TopWorkSlider from "../TopWorkSlider";

import { UiUxFeaturedWork } from "@/utils/ServicesPagesData/UiUxDesignPageData";
import { webDesignData } from "@/utils/ServicesPagesData/WebDesignPageData";

const WebDesignPage = () => {
  return (
    <main>
      <section className=" bg-center bg-[image:--bgImageHeroSection] w-[100%] min-h-[100dvh] bg-no-repeat bg-cover flex items-center pt-[120px] sm:pt-[175px] pb-10 2xl:pt-10  2xl:pb-0">
        <ImgWithTextSection
          imgSrc={"/assets/images/Services/web-design/sec1.webp"}
          fallBackImg={"/assets/images/Services/web-design/sec1.png"}
          alt={"section1ImgAFFORDABLE, STUNNING WEB DESIGN "}
          alignRight
        >
          <h6 className="font-poppins text-[25px] lg:text-[40px] 2xl:text-[48px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase">
            Affordable, Stunning
            <span className="text-[#FB724C]"> web designs </span>
            <span className="relative italic w-fit">
              <span className="relative w-full z-10">Just for</span>
              <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-2 lg:bottom-3.5 right-0" />
            </span>{" "}
            You
          </h6>
          <p className=" font-poppins text-center lg:text-left mt-4 text-[white] text-[12px] md:text-[14px] font-[400]">
            Get top-notch web designs that won't break the bank, customized just
            for you, at Strugbits. Our team offers affordable web design
            services, creating visually stunning websites that perfectly reflect
            your brand. Count on us to create professional yet accessible
            designs that effectively engage your audience.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
            <CustomButton btnLabel={"Discuss With Us"} />
          </div>
        </ImgWithTextSection>
      </section>

      <ImgWithTextSection
        imgSrc={"/assets/images/Services/web-design/sec2.webp"}
        fallBackImg={"/assets/images/Services/web-design/sec2.png"}
        alt={"section2Img,  Custom Web Design "}
      >
        <h6 className="font-DM text-[25px] lg:text-[44px] text-center lg:text-left font-bold text-[#0A141F]">
          Why Your Business Deserves{" "}
        </h6>
        <h6 className="font-DM text-[25px] lg:text-[44px] text-center lg:text-left font-bold text-[#0A141F]">
          Custom Web Design{" "}
          <span className="relative w-fit">
            <span className="relative w-full z-10">Solutions</span>
            <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-2.5 right-0" />
          </span>
        </h6>
        <div className="">
          <p className="font-DM mt-8 text-[#8A90A2] text-[16.41px] ">
            In today's world, a cookie-cutter approach to web design simply
            won't cut it. Your business deserves custom web design solutions
            tailored to its unique needs and objectives. At Strugbits, we
            understand the importance of standing out in a crowded online space.
            That's why we believe in creating bespoke web designs that not only
            capture attention but also drive results.
          </p>
          <p className="font-DM mt-8 text-[#8A90A2] text-[16.41px] ">
            Custom web design allows you to align your online presence with your
            brand identity, creating a cohesive and memorable experience for
            your audience. With our expertise in user-centric design principles,
            we ensure that every aspect of your website is optimized to enhance
            user engagement and conversion rates.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
            <CustomButton btnLabel={"Discuss With Us"} />
          </div>
        </div>
      </ImgWithTextSection>

      <section className="xl:mb-16">
        <ImgWithTextSection
          imgSrc={"/assets/images/Services/web-design/sec3.webp"}
          fallBackImg={"/assets/images/Services/web-design/sec3.png"}
          alt={"section1ImgAFFORDABLE, STUNNING WEB DESIGN "}
          alignRight
        >
          <h1 className="text-[25px] font-DM lg:text-[45px] text-center lg:text-left font-[650] text-[#0A141F]">
            From Concept to Creation: We Offer Perfection in{" "}
            <span className="relative w-fit">
              <span className="relative w-full z-10">Every Step</span>
              <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-2.5 right-0" />
            </span>{" "}
          </h1>
          <div className="lg:pr-24">
            <p className="mt-8  font-DM text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] font-normal">
              At Strugbits, we take pride in our holistic approach to web
              design, guiding you through every step of the process from concept
              to creation. Our team of experts specializes in affordable custom
              website design, ensuring that your vision is brought to life with
              precision and attention to detail.
            </p>
            <p className="mt-8 font-DM text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] font-normal">
              From initial brainstorming sessions to the final launch, we
              collaborate closely with you to understand your unique goals and
              requirements. With our affordable custom website design services,
              you can rest assured that your website will not only look stunning
              but also function seamlessly across all devices and platforms.
              Trust us to deliver perfection in every step of the journey,
              creating a website that truly reflects the essence of your brand
              and resonates with your target audience.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
              <CustomButton btnLabel={"Discuss With Us"} />
            </div>
          </div>
        </ImgWithTextSection>
      </section>

      <DesignProcessSection />

      <ImgWithTextSection
        imgSrc={"/assets/images/Services/web-design/sec4.webp"}
        fallBackImg={"/assets/images/Services/web-design/sec4.png"}
        alt={"section1ImgAFFORDABLE, STUNNING WEB DESIGN "}
      >
        <h6 className="font-DM text-[25px] lg:text-[44px] text-center lg:text-left font-bold text-[#0A141F]">
          Strugbits' Success Formula for{" "}
        </h6>
        <h6 className="font-DM text-[25px] lg:text-[44px] text-center lg:text-left font-bold text-[#0A141F]">
          Exceptional{" "}
          <span className="relative w-fit">
            <span className="relative w-full z-10">Web Design</span>
            <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-2.5 right-0" />
          </span>{" "}
          Services
        </h6>
        <div>
          <p className="font-DM mt-8 text-[#8A90A2] text-[16.41px] ">
            At Strugbits, our success formula for exceptional web design
            services revolves around our commitment to providing tailored
            solutions through custom web design services. We understand that
            every business is unique, which is why we prioritize understanding
            your specific needs and goals to deliver a website that exceeds
            expectations.
          </p>
          <p className="font-DM mt-8 text-[#8A90A2] text-[16.41px] ">
            Our approach combines creativity, innovation, and expertise to
            create visually stunning and user-friendly websites that resonate
            with your target audience. With our custom web design services, you
            can trust us to transform your vision into a reality, ensuring that
            your website stands out in today's competitive digital landscape.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
            <CustomButton btnLabel={"Discuss With Us"} />
          </div>
        </div>
      </ImgWithTextSection>

      <Container className="xl:my-16 xl:gap-0">
        <div className="max-w-[660px]">
          <h1 className="font-DM text-[25px] lg:text-[45px] text-center lg:text-left font-bold text-[#0A141F]">
            What You'll Get In Our Website Design{" "}
            <span className="relative w-fit">
              <span className="relative w-full z-10">Services</span>
              <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1.5 lg:bottom-2.5 right-0" />
            </span>{" "}
          </h1>
          <div className="lg:pr-16">
            <p className="mt-8 text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] font-normal">
              In our website design services at Strugbits, you'll get a
              comprehensive package tailored to meet your specific needs and
              objectives. From stunning visuals to seamless functionality, we
              ensure that every aspect of your website is crafted with precision
              and attention to detail.
            </p>
            <p className="mt-8 text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] font-normal">
              Expect a user-friendly interface that engages visitors and
              encourages interaction, coupled with responsive design to ensure
              optimal performance across all devices. Additionally, our website
              design services include thorough testing and ongoing support to
              ensure that your website remains up-to-date, secure, and effective
              in achieving your business goals.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
              <CustomButton btnLabel={"Discuss With Us"} />
            </div>
          </div>
        </div>
        <div className="max-w-[710px]">
          <picture>
            <source
              type="image/webp"
              srcSet={"/assets/images/Services/web-design/sec5.webp"}
            />
            <Image
              width={1000}
              height={1000}
              src={`/assets/images/Services/web-design/sec5.png`}
              className="w-full object-fill"
              alt={"section6Image "}
            />
          </picture>
        </div>
      </Container>

      <section
        style={{
          backgroundSize: `100% 100%`,
          backgroundRepeat: "no-repeat",
        }}
        className=" relative w-full  bg-[image:--webDesignSectionsBgImage]  "
      >
        <div className="w-full bg-[#0b1724] bg-opacity-[0.99] ">
          <div className="max-w-[1440px] mx-auto md:py-[120px] px-5  py-6 ">
            <div className="w-full max-w-[993px] m-auto text-white font-[600] ">
              <p className="text-[25px] w-full md:text-[30px] lg:text-[40px] xl:text-[46px] font-poppins text-center ">
                The<i className="text-[#FF6E4E] font-[600]"> Technologies</i> We
                Trust For Tailored Web Design Solutions
              </p>
            </div>
            <div className=" w-[100%] max-w-[883px]  mt-5 font-[400] font-DM text-[14px] m-auto">
              <p className="text-center text-white">
                Discover the cornerstone technologies powering our tailored web
                design solutions at Strugbits. From the user-friendly interface
                of Wix to the robust customization options of WordPress, we
                leverage trusted platforms like Shopify and Magento to craft
                websites that align perfectly with your business goals.
              </p>
            </div>

            <div className="flex  items-center w-full m-auto justify-center mt-12 gap-[21px] flex-wrap ">
              {webDesignData.length &&
                webDesignData.map((item, index) => (
                  <TechnologiesCard
                    title={item.title}
                    key={index}
                    desc={item.desc}
                    imgSrc={item.img}
                  />
                ))}
            </div>

            <div className="mt-10 text-center">
              <button className="text-white max-w-[230px] uppercase font-DM hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out  border-2 w-[229px] font-[400] border-white rounded-3xl text-sm p-2 text=[10px]">
                Get Free Consultation
              </button>
            </div>
          </div>

          <TopWorkSlider />
          <div className="relative">
            <div className="absolute z-50 hidden md:block left-[10px] top-[10%]  max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <div className="absolute hidden md:block right-[10px] top-[35%] max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <div className="absolute hidden md:block left-[10px] bottom-[10%]  max-w-[500px]">
              <img
                src={
                  "assets/images/Services/web-design/FeaturedWork/bgImageFw.png"
                }
                alt="fwBackgroundImg"
              />
            </div>
            <FeaturedWorkSectionDark data={UiUxFeaturedWork} />
          </div>
        </div>
      </section>

      <BusinessSection
        firstText="Ready to Grow"
        orangeText="Your Business"
        lastText="With Skilled Web Website Developers?"
        para="Boost your business and take your online presence to the next level with our web developers’ skills. Get in touch with us now to begin your digital transformation journey with custom web development."
      />
    </main>
  );
};

export default WebDesignPage;
