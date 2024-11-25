const WDPCard = ({ imgSrc, serialNum, Heading, text }) => {
  return (
    <div className="w-full max-w-[306px] p-3 md:p-4 rounded-[30px] min-h-[280px] flex items-center flex-col border border-white bg-white bg-opacity-5">
      <div className="text-center flex justify-center">
        <img
          src={imgSrc}
          className=" max-w-[80px] max-h-[80px] w-full object-contain"
          alt="Consultation Icon"
        />
      </div>
      <h3 className="text-[14px] md:text-xl text-center  font-poppins my-4 font-bold text-white ">
        <span className="text-[#FF6E4E]">{`${serialNum}.`}</span> {Heading}
      </h3>
      <p className="text-sm  text-center  font-poppins  border-slate-500 font-normal  text-white">
        {text}
      </p>
    </div>
  );
};
WDPCard.defaultProps = {
  imgSrc: "/assets/images/Services/web-design/Goal_Identification.webp",
  serialNum: "01",
  text: `We kick off by understanding your objectives and goals for the website, ensuring that every step aligns with your business vision.`,
  Heading: "Goal Identification",
};

export default WDPCard;
