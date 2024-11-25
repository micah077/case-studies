const Partners = () => {
  return (
    <div className="mt-[-230px] mb-[60px] w-[80%] mx-auto  relative">
      <div className="absolute hidden md:block left-[-65px] top-[-75px]   max-w-[140px]">
        <img src={"/assets/images/Ring.png"} alt="ring" />
      </div>
      <div className="shadow-2xl px-2 py-5 rounded-lg md:px-10 bg-white  relative z-50">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <h5 className=" font-poppins text-center md:text-left text-[20px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-[600] ">
              Our Official <span className="text-[#FF6E4E]">Partners</span>{" "}
            </h5>
            <p className=" font-poppins font-[400] my-1 text-center md:text-left text-[14px]  md:16px  lg:18px xl:20px  2xl:text-[22px] ">
              We are Wix partner and Velo certified developers
            </p>
          </div>
          <div className=" w-[200px] md:w-[250px] lg:w-[280px] xl:w-[350px] 2xl:w-[379px] ">
            <img
              className="w-[100%] "
              src={"/assets/images/Home/Business/wixGroup.png"}
              alt="images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
