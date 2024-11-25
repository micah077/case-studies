const UnderLineText = ({ children, italic, className }) => {
  return (
    <>
      {italic ? (
        <i className="relative w-fit">
          <span className="relative w-full z-10">{children}</span>
          <span
            className={`absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1 md:bottom-[8px] lg:bottom-[10px] xl:bottom-[10px] 2xl:bottom-[10px] right-0 ${
              className || null
            }}`}
          />
        </i>
      ) : (
        <span className="relative w-fit">
          <span className="relative w-full z-10">{children}</span>
          <span
            className={`absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1 md:bottom-[8px] lg:bottom-[10px] xl:bottom-[10px] 2xl:bottom-[10px] right-0 ${
              className || null
            }}`}
          />
        </span>
      )}
    </>
  );
};

export default UnderLineText;
