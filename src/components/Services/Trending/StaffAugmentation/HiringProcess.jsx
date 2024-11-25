import Image from "next/image";

import CustomButton from "@/components/Common/CustomButton";
import HiringProcessCard from "./HiringProcessCard";

const hiringProcess = [
  {
    id: 1,
    title: "Tell Us Your Requirements",
    detail:
      "Complete the form on our website, sharing what skill you need from developers, how many team members you require and some necessary details about your company.",
    count: "01.",
    src: "/assets/images/Landing Page/HiringProcess/hp-1.svg",
  },
  {
    id: 2,
    title: "Schedule a Call",
    detail:
      "Schedule a call with us to discuss your needs, the goals you have for your development team, and how we are going to assist you in the process.",
    count: "02.",
    src: "/assets/images/Landing Page/HiringProcess/hp-2.svg",
  },
  {
    id: 3,
    title: "Let Us Handle The Rest",
    detail:
      "Within a short period of time, we'll find and connect you with the best developers suited to your needs, forming your engineering team quickly and efficiently.",
    count: "03.",
    src: "/assets/images/Landing Page/HiringProcess/hp-3.svg",
  },
];
const HiringProcess = () => {
  return (
    <div className="pt-16 md:pt-pt-20 3xl:pt-32 pb-12 md:pb-16 3xl:pb-20 round rounded-[36px] md:rounded-[60px] bg-[#f8f9ff]">
      <Image
        src={"/assets/images/Landing Page/curve-line.svg"}
        width={1983}
        height={404}
        className="w-full object-cover absolute top-80 z-0"
        alt="curve-line"
      />
      <div className="max-w-[1360px] mx-auto px-6 z-10 ">
        <div className="text-center font-poppins mb-8 md:mb-14">
          <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center font-bold">
            Our 3-Step
            <span className="text-[#FB724C]"> Hiring </span>
            Process
          </h6>
          <p className="font-poppins md:leading-[26.16px] text-[#0A141F] text-base text-center mt-4 text-[10px] sm:text-[12px] xl:text-[13px]  2xl:text-[15px] font-[400]">
            Hiring can be tiring, which is why we've simplified the process for
            you, making it as easy as 1,2,3.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16 mb-16 md:mb-20 3xl:mb-32">
          {hiringProcess.map((item) => (
            <HiringProcessCard key={item.id} {...item} />
          ))}
        </div>
        <div className="flex justify-center">
          <CustomButton
            btnLabel={"Discuss With Us"}
            link={"/contact-us"}
            linkBtn={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
