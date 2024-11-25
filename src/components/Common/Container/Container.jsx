const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full flex max-w-[1440px] mx-auto lg:py-10 2xl:px-4 px-[30px] sm:px-[50px] my-10 lg:my-0 flex-col justify-center items-center md:gap-6 gap-10 lg:flex-row ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
