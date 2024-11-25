import Image from "next/image";
import UnderLineText from "../UnderLineText";
import CustomButton from "../CustomButton";
const ImageTextFeatureSection = ({
  styleClass,
  imageSrc,
  webpSrc,
  altText,
  titlePart1,
  titlePart2,
  underlinedText,
  children,
  layoutDirection,
  textAlignment = "left",
  buttonConfig,
}) => {
  const layoutClass =
    layoutDirection === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-row";
  const textAlignClass =
    textAlignment === "right" ? "lg:text-right" : "lg:text-left";

  return (
    <section
      className={`w-full max-w-[1440px] flex flex-col ${layoutClass} justify-between items-center mx-auto lg:py-10 2xl:px-0 px-[30px] ${
        styleClass || ""
      }`}
    >
      <div
        className={`flex-1 flex ${
          layoutDirection === "row" ? "justify-start" : "justify-end"
        }`}
      >
        <div className="max-w-[650px] max-h-[530px] ">
          <picture>
            <source type="image/webp" srcSet={webpSrc} />
            <Image
              width={500}
              height={500}
              quality={100}
              src={imageSrc}
              loading="lazy"
              alt={altText}
            />
          </picture>
        </div>
      </div>
      <div className="flex-1">
        <div className="max-w-[716px]">
          <h6
            className={`font-DM text-[22px] md:text-[30px] lg:text-[33px] xl:text-[34px] 2xl:text-[41px] text-center ${textAlignClass} font-bold text-[#0A141F] capitalize`}
          >
            {titlePart1} <UnderLineText>{underlinedText}</UnderLineText>{" "}
            {titlePart2}
          </h6>

          <div>{children}</div>
          {buttonConfig && (
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8  mt-12">
              <CustomButton
                btnLabel={buttonConfig.label}
                linkBtn={buttonConfig.link ? true : false}
                link={buttonConfig.link}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTextFeatureSection;
