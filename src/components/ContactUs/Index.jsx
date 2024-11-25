import Image from 'next/image';

import ContactUsServicesSlider from './ServicesSlider';
import ScheduleCallSection from './ScheduleCallSection';
import ContactForm from './ContactForm';

import { countriesCardData } from '@/utils/HomePageData/CountriesCardData';

import CountriesCardSection from '../Common/Sections/CountriesCardSection';
import MileStonesSection from '../Common/Sections/MileStonesSection';
import BackgroundImage from '../Common/BackgroundImage';
import CustomButton from '../Common/CustomButton';
import OurAchievementsSection from '../Common/Sections/OurAchievementsSection';

const ContactUsPage = () => {
  return (
    <main>
      {/* HEO Section */}
      <BackgroundImage src="/assets/images/Blogs/hero.webp" alt="contact us">
        <section className="w-[100%] min-h-[65vh] sm:min-h-[85dvh] bg-no-repeat bg-cover flex items-center pt-[120px] sm:pt-[150px]  lg:pt-20  ">
          <div className="w-full px-6 flex max-w-[7xl] mx-auto lg:py-20 md:py-12 sm:py-8 flex-col justify-center items-center lg:flex-row ">
            <div className="flex-2 w-full max-w-[785px]">
              <h6
                className="font-poppins text-[22px] sm:text-[30px] md:text-[40px] 
lg:text-[45px] xl:text-[50px] 2xl:text-[70px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase"
              >
                We would love to
              </h6>
              <h6
                className="w-full font-poppins text-[22px] sm:text-[30px] md:text-[40px] 
lg:text-[45px] xl:text-[50px] 2xl:text-[70px] text-center lg:text-left lg:flex-left text-[white] font-bold uppercase"
              >
                <span className="text-[#FB724C]"> hear </span>
                <span className="relative italic w-fit">
                  <span className="relative w-full z-10">From you</span>
                  <span className="absolute w-full h-1 2xl:h-3 lg:h-2 bg-[#FB724C] bottom-2 2xl:bottom-6 lg:bottom-4 right-0" />
                </span>
              </h6>
              <p className=" font-poppins text-center lg:text-left mt-4 text-[white] text-[12px] md:text-[14px]">
                We're here for anything you need. Just drop us a quick message
                below. We'll get back in 24 hrs.
              </p>

              <div className="flex  flex-wrap justify-center lg:justify-start items-center gap-8  mt-8">
                <CustomButton
                  linkBtn
                  link={'/case-studies'}
                  btnLabel={'View Case Studies'}
                  className={'text-[10.5px] lg:text-[14.95px]'}
                />
                <Image
                  className="w-[180.78px] h-[71px]"
                  width={500}
                  height={500}
                  src={'/assets/images/Home/wixlogo.png'}
                  alt="Consultation Icon"
                />
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <ContactUsServicesSlider />

      <ContactForm />

      <MileStonesSection styles="lg:mt-16 lg:pt-0" />

      <section className="2xl:px-0 px-[30px] mt-16 sm:px-[50px] bg-cover pt-16 2xl:pt-32 pb-16 bg-[image:--achivementSectionBg]">
        <OurAchievementsSection />
        <ScheduleCallSection />
      </section>

      <CountriesCardSection
        data={countriesCardData}
        backgroundImage="bg-[image:--bgImageCountriesSectionHome]"
      />
    </main>
  );
};

export default ContactUsPage;
