import Image from "next/image";

const BackgroundImage = ({ src, alt, children, styleClass }) => {
  return (
    <div
      className={`relative w-full bg-gray-800 bg-center bg-no-repeat bg-cover ${styleClass}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="object-cover"
        priority
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default BackgroundImage;
