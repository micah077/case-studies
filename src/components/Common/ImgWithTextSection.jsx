import Image from "next/image";
import Container from "./Container/Container";

const ImgWithTextSection = ({
  imgSrc,
  fallBackImg,
  alt,
  alignRight,
  children,
  className,
  style,
}) => {
  return (
    <Container style={style || null} className={`${className || ""}`}>
      {alignRight ? (
        <>
          <div className="flex-[1.1]">{children}</div>

          <div className="relative w-full flex-[0.9] ">
            <picture>
              <source type="image/webp" srcSet={imgSrc} />
              <Image
                width={1000}
                height={1000}
                src={fallBackImg}
                className="w-full object-fill"
                alt={alt}
              />
            </picture>
          </div>
        </>
      ) : (
        <>
          <div className="relative w-full flex-[0.8]">
            <picture>
              <source type="image/webp" srcSet={imgSrc} />
              <Image
                width={1000}
                height={1000}
                src={fallBackImg}
                className="w-full object-fill"
                alt={alt}
              />
            </picture>
          </div>
          <div className="flex-[1.2]">{children}</div>
        </>
      )}
    </Container>
  );
};

export default ImgWithTextSection;
