import Image from "next/image";
import CustomButton from "../Common/CustomButton";
import BackgroundImage from "@/components/Common/BackgroundImage";

const ErrorPage = () => {
  return (
    <BackgroundImage
      src="/assets/images/Services/wixDev/bgImage.webp"
      alt="error 404"
    >
      <section className="flex items-center w-full min-h-[100dvh] sm:pt-[120px] 2xl:pt-[100px] 3xl:pt-10">
        <div className="max-w-[966.85px] mx-auto flex justify-center items-center flex-wrap xl:flex-nowrap 2xl:flex-nowrap mt-24 px-2">
          <div className="max-w-[387px] mx-auto flex flex-col gap-2">
            <h6 className="font-poppins uppercase text-[25px] text-[#FF6E4E] lg:text-[52px] text-center lg:text-left lg:flex-left font-[700]">
              Coming soon
            </h6>
            <p className="font-poppins text-[15px] text-center lg:text-left lg:flex-left text-[white] font-[400]">
              Exciting changes are coming to this page please visit again later!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-5">
              <CustomButton btnLabel={"Go To Homepage"} link={"/"} linkBtn />
            </div>
          </div>
          <div className="mt-8 xl:mt-0 2xl:mt-0">
            <Image
              width={500}
              height={500}
              quality={100}
              src={"/assets/images/error.png"}
              alt={"error 404"}
            />
          </div>
        </div>
      </section>
    </BackgroundImage>
  );
};

export default ErrorPage;
