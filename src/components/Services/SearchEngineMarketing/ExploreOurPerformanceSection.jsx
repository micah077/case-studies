import Image from "next/image";

import Container from "@/components/Common/Container/Container";
import UnderLineText from "@/components/Common/UnderLineText";
import CustomButton from "@/components/Common/CustomButton";

const ExploreOurPerformanceSection = () => {
  return (
    <Container className={"lg:my-16"}>
      <div className="flex-[1.1]">
        <picture>
          <source
            type="image/webp"
            srcSet={"/assets/images/Services/SEO/sec5.webp"}
          />
          <Image
            src={"/assets/images/Services/SEO/sec5.png"}
            className="max-w-[684px] w-full"
            priority
            height={500}
            width={500}
            quality={100}
            alt="sec5Image"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-5 flex-[0.9]">
        <div>
          <h6 className="font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center lg:text-left md:leading-[52px] font-bold">
            Explore Our <UnderLineText italic>Performance</UnderLineText> <br />
            <span>Driven SEO Process</span>
          </h6>
        </div>
        <div className="flex flex-col gap-5 text-[#8A90A2]">
          <p className="font-poppins md:leading-[26.16px] text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
            Discover how we make SEO work for you with Strugbits' simple yet
            effective approach. Our enterprise SEO services are all about
            getting your website noticed and bringing in more visitors. We'll
            find the best keywords, tweak your content, and build links to boost
            your website's visibility and attract more customers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
          <CustomButton
            btnLabel={"Discuss With Us"}
            linkBtn
            link={"/contact-us"}
          />
        </div>
      </div>
    </Container>
  );
};

export default ExploreOurPerformanceSection;
