const TopWorkCard = ({ imgSrc, title, desc }) => {
  return (
    <div className=" pb-5 max-w-[456px]">
      <div className=" shadow-md bg-[#5BAFA9] rounded-2xl ">
        <div className="w-[100%] overflow-hidden border-4 border-[#285653] rounded-[14px]">
          <img src={imgSrc} width={"100%"} alt={title} />
        </div>
        <div className="p-3 mt-[20px] md:mt-[30px] w-full md:max-w-[375px]">
          <p className="font-[500] text-[#122337] font-Roboto md:text-[18px]  text-[16px]">
            {title}
          </p>

          <h3 className="text-[#122337] my-[14px] text-[18px]  md:text-[22px]  font-[600] font-poppins">
            {desc}
          </h3>
        </div>
      </div>
    </div>
  );
};
TopWorkCard.defaultProps = {
  imgSrc: "/assets/images/Services/web-design/TopWork/tw1.png",
  title: "Wix Development",
  desc: `Cyparess Website Design & Development`,
};

export default TopWorkCard;
