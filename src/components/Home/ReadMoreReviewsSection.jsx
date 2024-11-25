import Image from "next/image";
import Link from "next/link";

const ReadMoreReviewsSection = () => {
  return (
    <div className="max-w-[1068px] mx-auto my-16 ">
      <div className="max-w-[880px] my-10 mx-auto">
        <p className="font-DM text-center text-[46px] my-2 md:my-1 font-bold px-14">
          Read More <span className="text-[#FF6E4E]">Reviews</span>
        </p>
        <div className="text-center  m-auto px-8">
          <p className=" font-poppins text-[#6A6A8E] text-[16px] leading-[28px]">
            Read our reviews from all over the world. Our customers have shared
            their experiences from various corners of the globe, reflecting a
            diverse range of perspectives and stories.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row  ">
        <Link
          href="https://manage.wix.com/marketplace/wix-partner/strugbits"
          target="_blank"
          className="parent-readMore w-[356px] h-[248px] border flex justify-center items-center hover:border-2 hover:border-[#FF6E4E]"
        >
          <Image
            width={150}
            height={150}
            src={"/assets/images/Home/ValuableClient/market.png"}
            className="hover-readMore-image saturate-0"
            alt="Consultation Icon"
          />
        </Link>
        <Link
          href="https://maps.app.goo.gl/pkxr5t8sEz2B3Vad9"
          target="_blank"
          className="parent-readMore w-[356px] h-[248px] border flex justify-center items-center hover:border-2 hover:border-[#FF6E4E]"
        >
          <Image
            width={150}
            height={150}
            src={"/assets/images/Home/ValuableClient/google.png"}
            className="hover-readMore-image saturate-0"
            alt="Consultation Icon"
          />
        </Link>
        <Link
          href="https://www.trustpilot.com/review/strugbits.com"
          target="_blank"
          className="parent-readMore w-[356px] h-[248px] border flex justify-center items-center hover:border-2 hover:border-[#FF6E4E]"
        >
          <Image
            width={150}
            height={150}
            src={"/assets/images/Home/ValuableClient/trust.png"}
            className="hover-readMore-image saturate-0"
            alt="Consultation Icon"
          />
        </Link>
      </div>
    </div>
  );
};
export default ReadMoreReviewsSection;
