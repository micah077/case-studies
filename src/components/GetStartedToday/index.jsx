"use client";

import { usePathname, useRouter } from "next/navigation";
import Partners from "./Partners/Partners";
import Image from "next/image";
import { Rating } from "@mui/material";
import Link from 'next/link';

const GetStartedToday = ({ hidePartnersSection }) => {
  const location = usePathname();
  const route = useRouter();

  return (
    <div
      className={
        location === "/blog"
          ? "bg-cover relative  lg:pb-0 bg-[image:--bgImageBusinessSection]  h-[760px]  border-b-[#FF6E4E]  md:h-[470px] lg:h-[550px] text-center pt-[80px]"
          : "  bg-cover relative  lg:pb-0 bg-[image:--bgImageBusinessSection] h-auto pb-7 md:pb-0 border-b-[3px]    border-b-[#FF6E4E]  md:h-[570px] lg:h-[650px] text-center pt-[150px]"
      }
    >
      <div
        className={location === "/blog" || hidePartnersSection ? "hidden" : ""}
      >
        <Partners />
      </div>
      <Image
        src={"/assets/images/Home/Business/shape1.png"}
        className="absolute w-[50px] hidden md:block md:w-[80px] xl:w-[93.3px] right-0 xl:right-4 top-10 xl:top-16"
        alt="shape icon"
        width={80}
        height={80}
      />
      <Image
        src={"/assets/images/Home/Business/shape2.png"}
        className="absolute  w-[60px] hidden md:block xl:w-[120px] right-4 -bottom-3"
        alt="shape icon"
        width={120}
        height={120}
      />
      <Image
        src={"/assets/images/Home/Business/shape3.png"}
        className="absolute  w-[60px] hidden md:block xl:w-[120px] left-0 -bottom-3"
        alt="shape icon"
        width={120}
        height={120}
      />
      <div className="flex items-center justify-center gap-3">
        <p className=" font-poppins text-[18px] font[500]">Get Started Today</p>
        <div className=" w-fit  mt-1">
          <Rating
            value={5}
            size="small"
            style={{ color: "#5BAFA9" }}
            readOnly
          />
        </div>
      </div>
      <div>
        <h4 className=" font-poppins my-5 md:my-0 text-[20px] sm:text-[25px] md:text-[30px] px-3 lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center font-[600] ">
          {"Fast-track "}
          <span className="text-[#FF6E4E] italic">Your Success</span>
          {" With Expert Staff Augmentation"}
        </h4>
        <div className=" w-[90%] px-2 md:px-0 lg:w-[55%] xl:w-[70%] leading-7 m-auto">
          <p className=" font-poppins text-[16px]">
            Ready to take your business to the next level? Contact us now to
            learn more about our Staff Augmentation Services and how we can help
            you achieve your goals. Join the countless businesses that have
            already experienced the benefits of staff augmentation with
            Strugbits. Let's work together to drive success and innovation.
          </p>
        </div>
        <Link href="https://calendly.com/peter-1216"
          target="_blank"
          className="flex items-center hover:bg-[#FF6E4E]  gap-2 cursor-pointer border-2 m-auto mt-10 border-[#000248] rounded-3xl w-fit px-6 py-2 transition-all duration-500 ease-in-out"
        >
          <p className=" font-poppins font-[400] text-[16px] ">
            Schedule free consultation
          </p>
          <Image
            src={"/assets/images/Home/Business/sym.png"}
            alt="Consultation Icon"
            width={10}
            height={10}
          />
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-center mt-12 justify-center">
          <div className="flex gap-2 items-center">
            <p className="text-[#000] font-bold md:text-[#6A6A8E] text-[17px] font-Open md:font-[400] ">
              Or call us now{" "}
            </p>
            <Image
              src={"/assets/images/Home/Business/mob.png"}
              alt="Consultation Icon"
              width={30}
              height={30}
            />
          </div>
          <p className="text-[#000] font-bold md:font-[400] font-poppins text-[18px] md:text-[24px] md:text-[#6A6A8E] ">
            +1 718-717-8150
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedToday;
