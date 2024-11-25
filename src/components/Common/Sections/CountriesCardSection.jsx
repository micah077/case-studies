import Image from 'next/image';

const CountriesCardSection = ({ data, backgroundImage }) => {
  return (
    <section
      className={`${backgroundImage} bg-no-repeat bg-cover z-[-5] min-h-[900px] xl:min-h-[660px] 2xl:min-h-[750px] text-center flex justify-center items-center`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-[600] text-[20px] sm:text-[25px] md:text-[32px] text-white lg:text-[46px] text-center">
          Located in <span className="text-[#FF6E4E]">5 Countries</span>
        </h2>
        <div className="font-poppins mb-3 font-[300] text-[12px] xl:text-[14px] 2xl:text-[16px] sm:text-[16px] mt-4 leading-8 w-[90%] lg:w-[83%] xl:w-[75%] 2xl:w-[60%] m-auto text-[#b5b2b2] text-center">
          <p>
            Strugbits caters to a worldwide audience and clientele. Working with
            a diverse range of people makes us more adaptable and acceptable to
            unique digital needs and ideas. No matter where you are from or what
            you do, we can provide the online assistance you require.{" "}
          </p>
        </div>

        <div className="flex justify-around my-16 flex-wrap gap-2">
          {data.map((item, index) => {
            const { country, img } = item;
            return (
              <div
                key={index}
                className="border max-w-[350px] h-[220px] rounded-lg"
              >
                <h3 className="font-poppins text-[20px] leading-[42px] font-[600] text-white mt-7">
                  {country}
                  <Image
                    src={img}
                    width={230}
                    height={200}
                    quality={100}
                    className="p-2"
                    alt="image"
                  />
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountriesCardSection;
