import Image from 'next/image';
import ProfessionalSeoServiceSlider from './ProfessionalSeoServiceComponents/ProfessionalSeoServiceSlider';
import { professionalSeoServices } from '@/utils/ServicesPagesData/SeoPageData';

const ServicesSection = () => {
  return (
    <section
      style={{
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-[image:--bgImageSeoServices] bg-no-repeat"
    >
      <div className=" py-16 px-6  mx-auto">
        <div className="relative w-full ">
          <div className="hidden xl:block">
            <div className="absolute left-10 bottom-0 customAnimation5">
              <Image
                src={'/assets/images/Services/SEO/sec5Arrow.png'}
                width={246}
                height={143}
                className="w-[246px] h-[143px]"
                alt="Arrow..."
              />
            </div>
          </div>
          <div className="max-w-[850px] flex flex-col gap-3 text-white mx-auto">
            <div className="text-[16px] text-[#FF6E4E] font-[500] justify-center items-center flex gap-2">
              <Image
                width={500}
                quality={100}
                height={500}
                className="max-w-[15px] h-[15px] w-full"
                src={'/assets/images/Services/SEO/Icons/star.svg'}
                alt="star"
              />{' '}
              <h5 className="text-center">Trusted SEO Services</h5>
            </div>
            <div>
              <h2 className="font-poppins font-[600] text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center">
                What's Included In Our{' '}
                <span className="text-[#FF6E4E]">Professional</span> SEO
                Services{' '}
              </h2>
            </div>
            <div className="max-w-[750px] mx-auto">
              <p className="font-poppins text-center md:leading-[26.16px] mt-4 text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
                Discover the full potential of your online presence with our
                comprehensive SEO services at Strugbits. Our offerings include:
              </p>
            </div>
          </div>
        </div>
        <div className="py-14">
          <ProfessionalSeoServiceSlider data={professionalSeoServices} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
