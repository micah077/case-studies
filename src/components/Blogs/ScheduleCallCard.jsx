import CustomButton from "../Common/CustomButton";

function ScheduleCallCard() {
  return (
    <div className="w-[95%] flex-[3] sm:w-[80%] md:w-[60%] lg:w-[60%] xl:w-[20%] m-auto rounded-[19px] xl:mt-[5%] 2xl:mt-[3%] text-center bg-[#122337] h-fit py-10 px-4 text-[#fff] xl:sticky xl:top-5 right-0 flex flex-col gap-5 items-center justify-center shadow-md">
      <div className="w-[100%] m-auto ">
        <h6 className=" font-poppins font-semibold text-[13px] md:text-[16px] lg:text-[19px] xl:text-[21px] 2xl:text-[26px] leading-[32px]">
          Schedule a Call <br className="hidden 2xl:block" /> With Us
        </h6>
      </div>
      <p className=" font-poppins  leading-[18px] text-[11px] xl:text-[13px] ">
        Ready to discuss your project or have questions about our services? Book
        a call with us! Our team is here to help and provide guidance tailored
        to your needs.
      </p>
      <div>
        <CustomButton
          link={"/contact-us"}
          linkBtn
          btnClassName={"lg:px-11"}
          btnLabel={"Schedule a call"}
        />
      </div>
    </div>
  );
}

export default ScheduleCallCard;
