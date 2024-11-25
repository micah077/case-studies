import { topNotchData } from "@/utils/CaseStudiesPageData";

const TopNotchSection = () => {
  return (
    <section className="bg-[image:--bgImageCaseStudiesSec1] pb-12 pt-[30px] sm:pt-[40px] md:[60px] md:pt-[90px] lg:pt-[110px] xl:pt-[135px]  2xl:pt-[160px] bg-no-repeat bg-cover w-[100%] h-auto">
      <div className="font-poppins text-[#fff]  text-center text-[25px] sm:text-[28px] md:text-[35px] lg:text-[43px] xl:text-[48px] font-bold 2xl:text-[54px]">
        <div className="relative">
          <h6>Our TOP-NOTCH</h6>
          <h6 className="text-[#FF6E4E]">Case Studies</h6>
          <img
            className="absolute top-[-15%] xl:top-[-20%] 2xl:top-[-15%] lg:block hidden sm:block sm:left-[21%] md:left-[22%] lg:left-[27%] xl:left-[30%] 2xl:left-[34%]"
            src={"/assets/images/Case Studies/left.png"}
            alt="Consultation Icon"
          />
          <img
            className="absolute top-[20%] hidden sm:block sm:right-[22%] md:right-[25%] lg:right-[28%] xl:right-[25%] 2xl:right-[32%]"
            src={"/assets/images/Case Studies/right.png"}
            alt="Consultation Icon"
          />
        </div>
      </div>

      <div className="h-auto pb-[80px] pt:[25px] sm:pt-[70px] md:pt-[80px] xl:pt-[80px] 2xl:mt-[100px]">
        <div className=" w-[90%] md:max-w-[70%] xl:max-w-[1440px] relative  m-auto gap-10 flex-wrap flex justify-center  ">
          <img
            src={"/assets/images/Case Studies/HomeBg.png"}
            className="absolute top-[-50px]"
            alt="bg icon"
          />
          {topNotchData.length &&
            topNotchData.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-[#285653] z-50 rounded-lg p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5"
                >
                  <div
                    style={{
                      backgroundImage: `url('${item.img}')`,
                    }}
                    className="w-[230px]  md:h-[400px] lg:h-[500px] xl:h-[600px] md:w-[400px] 2xl:w-[550px]  2xl:h-[663px] rounded-lg  bg-cover bg-top  hover:bg-bottom   transition-all ease-in-out duration-[8s]  h-[400px] bg-[#000]"
                  ></div>
                  <div className="text-center flex text-[10px] px-2  pb-2 lg:px-0 lg:pb-0 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] items-center justify-center mt-4">
                    <p className="text-[white]  font-poppins font-semibold ">
                      {/* {item.title} <span>-</span>  */}
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div className="md:px-[40px]   hover:bg-[#ff6e4e] transition-all duration-700 px-[53px] 2xl:px-[75px] cursor-pointer rounded-3xl font-DM font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] m-auto py-3   opacity-[0.9] border text-white w-fit">
    VIEW MORE
  </div> */}
    </section>
  );
};

export default TopNotchSection;
