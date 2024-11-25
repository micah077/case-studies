import Image from "next/image";
import CustomButton from "@/components/Common/CustomButton";

const FeaturedWorkSection = ({ data }) => {
  return (
    <section className="py-14 bg-[#FFFBF8]">
      <div className="max-w-[1440px] mx-auto 2xl:px-0 px-[40px]">
        <div className="w-full px-2 lg:px-48 text-center m-auto text-[#0A141F]">
          <h6 className="font-poppins text-[25px] lg:text-[45.59px] leading-[54.71px] text-center font-[600] capitalize">
            our<span className="text-[#FF6E4E] font-[600]"> Featured </span>{" "}
            work
          </h6>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 items-center mt-12">
          {data.length &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-[35px] border m-3 shadow-lg"
                >
                  <Image
                    src={item.img}
                    height={1000}
                    width={1000}
                    alt="Consultation Icon"
                    className="rounded-[35px]"
                  />
                </div>
              );
            })}
        </div>
        {data.length > 9 && (
          <div className="flex justify-center items-center mt-16 mb-8">
            <CustomButton btnLabel={"View More"} />
          </div>
        )}
      </div>
    </section>
  );
};
export const FeaturedWorkSectionDark = ({ data }) => {
  return (
    <div className="max-w-[1400px] py-16 px-6 mx-auto ">
      <div className="md:pt-10 ">
        <div className=" px-2 lg:px-48 text-center m-auto text-[#0A141F]">
          <h6 className="font-poppins text-white text-[25px] lg:text-[50px] text-center font-bold capitalize">
            our
            <span className="text-[#FF6E4E] font-[600]"> Featured </span> work
          </h6>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative z-50">
        {data &&
          data.length &&
          data.map((item, index) => {
            return (
              <div key={index} className="overflow-hidden rounded-xl">
                <div className="h-[480px]">
                  <Image
                    height={1000}
                    width={1000}
                    quality={100}
                    src={item.img}
                    className="h-[500px] w-full"
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
      </section>
      {data.length > 9 && (
        <div className="flex flex-wrap justify-center items-center gap-8  mt-12 mb-16 md:my-[100px]">
          <CustomButton btnLabel={"View More"} />
        </div>
      )}
    </div>
  );
};

export default FeaturedWorkSection;
