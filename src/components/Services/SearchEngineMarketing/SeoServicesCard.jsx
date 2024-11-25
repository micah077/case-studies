const SeoServicesCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="max-w-[306px] parent mx-auto md:max-w-[428px] h-[450px]  md:h-[416px] rounded-[30px] border border-[#FFFFFF66] p-[20px] hover:border-white">
      <div className="bg-[#FFFFFF05] rounded-[30px] h-full w-full text-white flex justify-center py-[43px] px-[28px]">
        <div className="flex flex-col gap-4 justify-center items-center m-auto">
          <div className="flex justify-center hover-bright ">
            <img
              alt={title}
              height={100}
              width={100}
              className="h-auto w-auto"
              src={imgSrc}
            />
          </div>

          <div className="font-poppins text-[20px] font-[600]">
            <h4 className="text-center">{title}</h4>
          </div>
          <div className="font-poppins md:leading-[26.16px] text-center lg:text-left text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[15px] font-[300]">
            <p className="text-center">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoServicesCard;
