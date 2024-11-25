import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative z-50 w-full pt-[40px] h-full  bg-[image:--footerBG] bg-no-repeat bg-cover">
      <div className="max-w-[1440px] w-[100%] flex flex-col lg:flex-row lg:justify-between lg:items-center pb-4 mx-auto">
        <div className="w-[200px] mb-14 md:mb-auto sm:w-[250px] md:w-[300px] lg:w-[365px]">
          <img src={'/assets/images/Footer/Link.png'} alt="images" />
        </div>
        <div className="flex flex-col ml-[12%] mt-[-20px] lg:flex-row lg:mr-[5%] xl:mr-[25%] gap-8">
          <div className="w-[100px]">
            <Link
              target="_blank"
              href={'https://www.facebook.com/strugbits.co'}
            >
              <img
                className="w-[100px]"
                src={'/assets/images/Footer/facebook.png'}
                alt="Facebook link"
              />
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href={'https://www.linkedin.com/company/strugbits/'}
            >
              <img
                className="w-[100px]"
                src={'/assets/images/Footer/linked.png'}
                alt="linkedIn Link"
              />
            </Link>
          </div>

          <div>
            <Link
              target="_blank"
              // href={"https://x.com/strugbits_"}
              href={'#'}
            >
              <img
                className="w-[100px]"
                src={'/assets/images/Footer/twitter.png'}
                alt="X Link"
              />
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href={'https://www.instagram.com/strugbits.co/'}
            >
              <img
                className="w-[100px]"
                src={'/assets/images/Footer/instagram.png'}
                alt="Instagram Link"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-slate-500" />
      {/* <div className="flex items-center border-slate-500 border-t"></div> */}
      <div className="max-w-[1440px] w-full flex flex-col xl:flex-row justify-center items-center mx-auto">
        <div className="w-full border-slate-500 py-[40px] xl:border-r px-8 ">
          <h6 className="text-[22px] sm:text-[30px] tracking-wider md:text-[40px] xl:text-[65px] 2xl:text-[80px] ml-3 text-[#fff] xl:leading-[70px] 2xl:leading-[80px] font-DM font-[700]">
            Let’s Work <br />
            Together
          </h6>

          <div className="flex justify-left items-center gap-4 flex-wrap lg:flex-nowrap 2xl:flex-nowrap my-10 ">
            <div className="flex border-2 rounded-2xl justify-between border-slate-600 px-4 py-2 md:py-4  gap-5 w-[380px] xl:w-[250px] 2xl:w-[320px]">
              <span className="font-[400] text-[#fff] text-[14px] md:text-[17px] xl:text-[19px] font-[Inter]">
                info@strugbits.com
              </span>
              <Link
                href={'mailto:info@Strugbits.com'}
                className="w-[20px] mt-1 cursor-pointer"
              >
                <img
                  src={'/assets/images/Footer/vec.png'}
                  className="w-[100%]"
                  alt="images"
                />
              </Link>
            </div>
            <div className="flex border-2 rounded-2xl justify-between border-slate-600 px-4 py-2 md:py-4  gap-5 w-[380px] xl:w-[250px] 2xl:w-[320px]">
              <span className="font-[400] text-[#fff] text-[14px] md:text-[17px] xl:text-[19px]  font-[Inter]">
                +1 718-717-8150
              </span>
              <Link
                href={'tel:+1 718-717-8150'}
                className="w-[20px] mt-1 cursor-pointer"
              >
                <img
                  src={'/assets/images/Footer/vec.png'}
                  className="w-[100%]"
                  alt="images"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-left items-baseline flex-wrap text-[#b7b4b4] ">
            <h1 className="text-[16px] lg:text-[12px] xl:text-[14px] font-[400] font-Inter mr-7">
              <Link
                href="https://calendly.com/peter-1216/30min?back=1&month=2024-07"
                target="_blank"
              >
                Schedule a Call With Us
              </Link>
            </h1>
            <div className="flex justify-between items-center flex-wrap xl:flex-nowrap 2xl:flex-nowrap gap-3">
              <Image
                width={130}
                height={130}
                src="/assets/images/Home/partners.png"
                alt="partner image"
              />{' '}
              <Image
                width={130}
                height={130}
                src="/assets/images/Home/trust.png"
                className="mx-4"
                alt="trust image"
              />{' '}
              <Image
                width={130}
                height={130}
                src="/assets/images/Home/wixlogo.png"
                alt="wix logo"
              />
            </div>
          </div>
        </div>

        <div className="w-full border-slate-200 px-8">
          <div className="m-auto">
            <h6 className="font-[400] text-[#fff] text-[23px] leading-[31px] font-Inter">
              Quick Links
            </h6>
            <div className="font-Inter font-[400] text-[#b7b4b4] mt-2 md:mt-12 flex flex-col sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between lg:justify-around flex-wrap">
              <div className="flex flex-col gap-3 text-[18px]">
                <Link
                  href={'/'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Home
                </Link>
                <Link
                  href={'/not-found'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Services
                </Link>
                <Link
                  href={'/404'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Case Studies
                </Link>
                <Link
                  href="#testimonial"
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Testimonials
                </Link>
                <Link
                  href={'/blogs'}
                  className="text-[13px] md:text-[15px] lg:text-[15px] "
                >
                  Blogs
                </Link>
              </div>

              <div className="flex flex-col xl:mt-0 gap-3">
                <Link
                  href={'/content'}
                  className="text-[13px] md:text-[15px] lg:text-[15px] "
                >
                  Content Writing
                </Link>
                <Link
                  href={'/web-development'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Website & App Development
                </Link>
                <Link
                  href={'/SMM'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Social Media Management
                </Link>
                <Link
                  href={'/web-design'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Designing & Branding
                </Link>
                <Link
                  href={'/seo'}
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Search Engine Optimization
                </Link>
              </div>

              <div className="flex flex-col xl:mt-0 gap-3">
                <Link
                  href="/privacy-and-policy"
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Privacy and Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-[13px] md:text-[15px] lg:text-[15px]"
                >
                  Terms and Condition
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border border-slate-800 w-full"></div>
            <h6 className="font-Inter text-center md:text-left font-[400]  text-[#b7b4b4] py-3 lg:py-10 text-[11px] md:text-[13px] lg:text-[15px]">
              Copyright @2024, Strugbits All Rights Reserved
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
