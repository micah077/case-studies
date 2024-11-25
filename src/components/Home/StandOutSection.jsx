"use client";
import UnderLineText from "../Common/UnderLineText";
import CustomButton from "../Common/CustomButton";

const StandOutSection = ({ standData }) => {
  return (
    <section className="w-full flex max-w-[1440px] mx-auto lg:py-10 2xl:px-0 px-[30px] sm:px-[50px] my-10 lg:my-0 flex-col justify-center items-start md:gap-6 gap-10 lg:flex-row ">
      {/* left */}
      <div className="flex-1 relative lg:sticky top-2">
        <div className="max-w-[590px] ">
          <img
            src={"/assets/images/Home/standout.png"}
            className="w-[100%]"
            alt="Consultation Icon"
          />
          <div className="w-[100%] lg:w-[95%] m-auto">
            <p className="text-center text-[13px]  md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16.8px]   text-[#8A90A2] mt-8 mb-10">
              Strugbits, a trusted tech partner, has been helping clients
              worldwide for over 5 years. We offer a wide range of services to
              meet your needs. Choose us for unmatched solutions and see why
              we’re the best in the business. Step up your IT game with
              Strugbits!
            </p>
          </div>
          <div className="text-center">
            <span className="text-center  font-bold text-[25px]  xl:text-[25px] 2xl:text-[31px]">
              Let's Start a{" "}
              <span className="text-[#FF6E4E]">Something Great</span> Together
            </span>
          </div>
          <p className="text-[#8A90A2]  text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal mt-3 xl:mb-8 text-center">
            Boost your success with Strugbits' tech expertise. Get in touch now
            for amazing solutions!
          </p>
          <div className="w-full flex justify-center mt-5 sm:mt-0">
            <CustomButton
              btnLabel={"Discuss with us"}
              linkBtn
              link={"/contact-us"}
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-2">
        <div className="max-w-[675px]">
          <div className="w-[100%] lg:w-[100%] xl:w-[525px] 2xl:w-[482px]">
            <h5 className="  text-center font-poppins lg:mt-0 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[34px]  font-[600] lg:text-left">
              {" "}
              What Makes Us{" "}
              <UnderLineText
                className={
                  "bottom-1 md:bottom-[5px] lg:bottom-[5px] xl:bottom-[5px] 2xl:bottom-[10px] "
                }
              >
                Stand Out
              </UnderLineText>
              From The Rest?
            </h5>
          </div>
          <div className="w-[100%] ">
            <p className="text-[#8A90A2] text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-DM  lg:text-left   mt-4  text-center md:text-left">
              Strugbits is a full-fledged tech partner company. We have been
              providing a wide range of services to clients all around the world
              for more than 5 years. We're a league apart from others in the
              industry for a multitude of reasons:
            </p>
            <div className="flex flex-col gap-6 mt-[30px]">
              {standData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start flex-col gap-4 lg:flex-row"
                  >
                    <img
                      src={item.image}
                      className="m-auto w-[60px]  md:w-[100px] lg:m-0"
                      alt="Consultation Icon"
                    />
                    <div>
                      <h2 className="color-[#FF6E4E] py-1 font-bold font-poppins text-center text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] lg:text-left">
                        {item.title}
                      </h2>
                      <p className="font-[400] text-[12px] sm:text-[14px] md:text-[13px]  2xl:text-[17px]  font-DM text-center text-[#8A90A2] lg:text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="flex justify-center mt-10 cursor-pointer items-center gap-1">
            <p className="font-medium text-[#292930] font-DM text-[16px]">
              View More
            </p>
            <img src={"/assets/images/Home/down.png"} alt="down icon" />
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandOutSection;
