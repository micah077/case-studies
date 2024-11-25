const achievements = [
  {
    name: "Skilled Professional",
    range: "80+",
    image: "/assets/images/Services/web-dev/skilled-professional-icon.png",
  },
  {
    name: "Completed Projects",
    range: "500+",
    image: "/assets/images/Services/web-dev/projects-icon.png",
  },
  {
    name: "Yeas of Experience",
    range: "3+",
    image: "/assets/images/Services/web-dev/experience-icon.png",
  },
  {
    name: "Customer Success",
    range: "100%",
    image: "/assets/images/Services/web-dev/customer-icon.png",
  },
];

const OurAchievementsSection = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="mx-auto lg:text-center">
        <h6 className="font-poppins text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center text-[#0A141F] font-bold capitalize">
          Our
          <span className="text-[#FB724C]"> Achievements</span>
        </h6>
        <p className="mt-6 lg:px-[140px] font-poppins text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] xl:text-[14px] 2xl:text-[16.41px] text-center leading-8 text-[#292929]">
          Empowering success: Over 5 years, we've proudly we've proudly served
          1000+ clients globally, delivering exceptional solutions and fostering
          long-lasting partnerships. Each achievement reflects our commitment to
          excellence and the trust of our valued clients.
        </p>
      </div>

      <div className="mx-auto mt-16 ">
        <div className="flex justify-between flex-wrap">
          {achievements.map((data, index) => {
            const { name, range, image } = data;
            return (
              <div key={index} className="flex items-center w-fit my-3">
                <img className="w-16 lg:w-20 lg:h-20" src={image} alt={name} />
                <div className="font-medium text-left pl-6">
                  <h6 className="font-poppins text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] leading-10 text-[#0A141F] font-bold uppercase">
                    {range}
                  </h6>
                  <p className="font-poppins text-[12px] md:text-[13px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] text-[#6A6A8E] font-normal">
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurAchievementsSection;
