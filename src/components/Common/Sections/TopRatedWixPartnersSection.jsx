import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    href: 'https://manage.wix.com/marketplace/wix-partner/strugbits',
    imageSrc: '/assets/images/Services/wixDev/wix-partner.png',
  },
  {
    href: 'https://manage.wix.com/marketplace/wix-partner/strugbits',
    imageSrc: '/assets/images/Services/wixDev/velo-certified.png',
  },
  {
    href: 'https://manage.wix.com/marketplace/wix-partner/strugbits',
    imageSrc: '/assets/images/Services/wixDev/wix-expert.png',
  },
];
const TopRatedWixPartnersSection = () => {
  return (
    <div className="max-w-[1068px] mx-auto my-16 ">
      <div className="max-w-[880px] my-10 mx-auto">
        <p className="font-DM text-center text-[46px] my-2 md:my-1 font-bold px-14">
          <span className="text-[#FF6E4E]">Top-Rated Wix </span>
          Legend Partners and Velo Certified Developers
        </p>
        <div className="text-center  m-auto px-8">
          <p className=" font-poppins text-[#6A6A8E] text-[16px] leading-[28px]">
            Being Velo Certified and recognized as Legend Partners means that
            Wix itself has verified our expertise. We earned these important
            titles through our dedication to creativity, technical skill, and
            consistently delivering great results. With this recognition, we are
            the perfect choice for creating web solutions that fit your needs.
            When you choose us, you’re trusting the professionals that even Wix
            relies on.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row  ">
        {data.map((data, index) => {
          const { imageSrc, href } = data;
          return (
            <Link
              key={index}
              href={href}
              target="_blank"
              className="parent-topRated w-[356px] h-[248px] border flex justify-center items-center hover:border-2 hover:border-[#FF6E4E]"
            >
              <div className="p-2 rounded-full shadow-md hover-topRated-image">
                <Image
                  width={120}
                  height={120}
                  src={imageSrc}
                  alt="Consultation Icon"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TopRatedWixPartnersSection;
