import HiringProcess from "./HiringProcess";
import PartnerWithUs from "./PartnerWithUs";
import HeroSection from "./HeroSection";
import TeamSlider from "./TeamSlider";
import OurImpact from "./OurImpact";
import Reviews from "./Reviews";

import BusinessSection from "@/components/Common/Sections/BusinessSection";

import { staffCountriesCardData } from "@/utils/HomePageData/CountriesCardData";
import { StaffCountriesCard } from "./CountriesCard";

const StaffAugmentationPage = () => {
  return (
    <main className="bg-[#0D1B2F]">
      <HeroSection />
      <HiringProcess />
      <PartnerWithUs />
      <OurImpact />
      <TeamSlider />

      <section className="bg-white pb-[120px] xl:pb-[70px] border border-red-500 2xl:pb-[80px] z-[-5]  text-center pt-32 md:pt-[150px]">
        <StaffCountriesCard data={staffCountriesCardData} />
      </section>

      <section
        style={{ backgroundSize: `100% 100%` }}
        className="bg-no-repeat bg-[image:--bgImageReviewsLandingPage] pb-[120px] xl:pb-[70px] 2xl:pb-[80px] z-[-5] min-h-[900px]  xl:min-h-[750px]  2xl:min-h-[823px] text-center pt-16 md:pt-[70px]"
        id="success-stories"
      >
        <Reviews />
      </section>

      <BusinessSection
        starsText="Get Started Today"
        firstText="Fast-track"
        orangeText="Your Success"
        lastText="With Expert Staff Augmentation"
        para="Ready to take your business to the next level? Contact us now to learn more about our Staff Augmentation Services and how we can help you achieve your goals. Join the countless businesses that have already experienced the benefits of staff augmentation with Strugbits. Let's work together to drive success and innovation."
      />
    </main>
  );
};

export default StaffAugmentationPage;
