import Image from "next/image";
import Link from "next/link";

const BusinessSection = ({
  starsText,
  firstText,
  orangeText,
  lastText,
  para,
}) => {
  return (
    <div className="bg-cover relative lg:pb-0 bg-[image:--bgImageBusinessSection] h-[760px] border-b-[3px] border-b-[#FF6E4E] md:h-[470px] lg:h-[550px] text-center flex justify-center items-center">
      <img
        src={"/assets/images/Home/Business/shape1.png"}
        className="absolute w-[50px] hidden md:block md:w-[80px] xl:w-[93.3px] right-0 xl:right-1 top-10 xl:top-8"
        alt="shape icon"
      />
      <img
        src={"/assets/images/Home/Business/shape2.png"}
        className="absolute w-[60px] xl:w-[120px] right-4 -bottom-3"
        alt="shape icon"
      />
      <img
        src={"/assets/images/Home/Business/shape3.png"}
        className="absolute w-[60px] xl:w-[120px] left-0 -bottom-3"
        alt="shape icon"
      />
      <div className="">
        <div className="flex items-center justify-center gap-3">
          <p className="font-poppins text-[18px] font-[500]">
            {starsText ? starsText : "Contact Us Today"}
          </p>
          <Image
            width={80}
            height={80}
            src={"/assets/images/Home/ValuableClient/stars.png"}
            alt="Consultation Icon"
          />
        </div>
        <h4 className="font-poppins my-5 md:my-0 text-[20px] sm:text-[25px] md:text-[30px] px-3 lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center font-[600] ">
          {firstText}
          <span className="text-[#FF6E4E] italic">{orangeText}</span> {lastText}
        </h4>
        <div className="w-[90%] px-2 md:px-0 lg:w-[55%] xl:w-[70%] leading-7 m-auto">
          <p className="font-poppins text-[16px]">{para}</p>
        </div>
        <Link
          href="https://calendly.com/peter-1216/30min?back=1&month=2024-07"
          target="_blank"
          className="flex items-center hover:bg-[#FF6E4E] gap-2 cursor-pointer border-2 m-auto mt-10 border-[#000248] rounded-3xl w-fit px-6 py-2 transition-all duration-500 ease-in-out"
        >
          <p className="font-poppins font-[400] text-[16px] ">
            Schedule free consultation
          </p>
          <img
            src={"/assets/images/Home/Business/sym.png"}
            alt="Consultation Icon"
          />
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-center mt-12 justify-center">
          <div className="flex gap-2 items-center">
            <p className="text-[#000] font-bold md:text-[#6A6A8E] text-[17px] font-Open md:font-[400] ">
              Or call us now{" "}
            </p>
            <img
              src={"/assets/images/Home/Business/mob.png"}
              alt="Consultation Icon"
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

export default BusinessSection;
