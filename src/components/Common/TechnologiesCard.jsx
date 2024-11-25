const TechnologiesCard = ({
  imgSrc,
  title,
  desc,
  renderBtn,
  handleAboutModel,
}) => {
  const maxW = renderBtn ? `max-w-[430px]` : `max-w-[324px]`;
  const minH = renderBtn ? `min-h-[300px]` : `min-h-[288px]`;

  return (
    <div
      className={`w-full ${maxW} bg-white bg-opacity-5 p-4 md:p-[20px] ${minH}  rounded-xl border border-white flex flex-col`}
    >
      <div className="max-h-[50px] md:min-h-[50px] flex flex-[1] items-center justify-center md:justify-normal">
        <img src={imgSrc} className="object-contain " alt="Consultation Icon" />
      </div>
      <div className={`flex-[10]`}>
        <h3 className="text-lg md:text-xl text-center md:text-left font-poppins my-4 font-[600] text-white">
          {title}
        </h3>
        <p className="text-[13px] leading-[15px]  text-center md:text-left font-poppins mb-4  font-normal my-2 text-white">
          {desc}
        </p>
      </div>
      {renderBtn && (
        <div className={`flex-[1]`}>
          <button
           onClick={handleAboutModel}
            className="text-white font-DM border-2 w-full md:w-auto px-4 py-2 hover:bg-[#FF6E4E] transition-all duration-500 ease-in-out border-white rounded-3xl text-xs md:text-sm"
          >
            GET NOW
          </button>
        </div>
      )}
    </div>
  );
};
TechnologiesCard.defaultProps = {
  imgSrc: "",
  title: "Wix Development",
  desc: `Make the most out of the simplicity and versatility of Wix with our proficient developers. We'll create a Wix website that not only grabs the attention of your viewers but also functions seamlessly, ensuring that your online presence is a cut above the rest.`,
};

export default TechnologiesCard;
