'use client';
import React, { useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GoArrowUpRight } from 'react-icons/go';
import { usePathname } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';

import ServicesModal, { ServicesData } from './ServiceModal';
import AboutUsModal from './AboutUsModal';
import Link from 'next/link';

const navbarLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Success Stories', href: '/success-stories' },
];
const Navbar = () => {
  const path = usePathname();

  const [aboutModel, setAboutModel] = useState(false);
  const [sideHeader, setSideHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const toggleAboutModal = () => setAboutModel((prev) => !prev);
  const toggleSideHeader = () => {
    setNav(false);
    setSideHeader((prev) => !prev);
  };

  return (
    <nav className="flex flex-col absolute z-50 w-full items-center border-gray-200">
      <div className="w-[100%] max-w-[1440px] flex flex-row justify-between m-auto 2xl:px-0 px-[30px] sm:px-[50px] p-6">
        <div className="flex z-[100] mt-1 items-center ">
          <Link href="/">
            <img
              src={'/assets/images/Navbar/logo.png'}
              className="max-w-[150px] 2xl:max-w-[180px]"
              alt="Strugbits LOGO"
            />
          </Link>
        </div>
        {/* Mobile menu start */}
        <div
          className={`fixed z-[100] flex flex-col lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${
            nav ? '' : 'left-[-100%]'
          }`}
        >
          <ul className="flex flex-col w-full font-medium text-[13px] text-[#FFFFFF] font-lexend p-4 md:p-0 mt-16 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            {navbarLinks.map((link, index) => {
              const { name, href } = link;
              if (name === 'Services') {
                return (
                  <li key={index}>
                    <button
                      id="dropdownNavbarLink"
                      onClick={toggleSideHeader}
                      className="flex items-center justify-between w-full py-2 px-3 lg:text-[13px] xl:text-[15px] 2xl:text-[16px] font-normal font-Lexend border-b-[1px] rounded-lg hover:bg-[#FF6E4E]"
                    >
                      Services
                      <img
                        className="mx-1"
                        src={'/assets/images/Navbar/downarrow.png'}
                        alt="Consultation Icon"
                      />
                    </button>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={toggleNav}
                    className="block py-2 px-3 border-b-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] font-normal font-Lexend rounded-lg hover:bg-[#FF6E4E]"
                    aria-current={path === href ? 'page' : undefined}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            {path === '/staff-augmentation' && (
              <li>
                <Link
                  href="#technical-skills"
                  onClick={toggleNav}
                  className="block py-2 px-3 border-b-[0.74px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] font-normal font-Lexend rounded-lg hover:bg-[#FF6E4E]"
                  aria-current="page"
                >
                  Technical Skills
                </Link>
              </li>
            )}
          </ul>

          <div className="block md:hidden">
            <li className="flex my-3 justify-center items-center">
              <Link href="/contact-us" onClick={toggleNav}>
                <div className="flex cursor-pointer flex-row justify-center items-center ease-in duration-300 hover:text-black b-[1px] font-medium text-[15px] border rounded-md border-[#FF6E4E] px-4 py-2 hover:bg-[#FF6E4E] font-[Lexa-Deca] text-white">
                  <img
                    src="/assets/images/Navbar/buttonlogo.png"
                    alt="Consultation Icon"
                  />
                  <span className="mx-4">Let's Talk</span>
                  <img
                    src="/assets/images/Navbar/Vector.png"
                    alt="Consultation Icon"
                  />
                </div>
              </Link>
            </li>
            <li>
              <div
                onClick={toggleAboutModal}
                className="flex cursor-pointer justify-center items-center mx-12"
              >
                <img
                  src="/assets/images/Navbar/popupicon.png"
                  alt="Consultation Icon"
                />
              </div>
            </li>
          </div>
        </div>
        {/* Mobile menu end */}
        {/* navbar page link start  */}
        <div className="hidden z-50 w-full lg:block md:w-auto">
          <ul className="flex flex-col z-50  font-normal lg:text-[13px] h-full text-[13px] md:text-[15px] xl:13px 2xl:text-[16px] text-[#FFFFFF] font-lexend p-4 md:p-0 mt-4 md:space-x-8 xl:x-2 lg:space-x-3 xl:space-x-8 2xl:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {navbarLinks.map((link, index) => {
              const { name, href } = link;
              if (name === 'Services') {
                return (
                  <li key={index} className={`z-50 pt-6 border-[#101f35]`}>
                    <div onMouseLeave={() => setOpen(false)}>
                      <button
                        onMouseOver={() => setOpen(true)}
                        className="flex z-50 items-center justify-between w-full font-lexend"
                      >
                        Services
                        <img
                          className=" mx-1"
                          src={'/assets/images/Navbar/downarrow.png'}
                          alt="Consultation Icon"
                        />
                      </button>
                      <ServicesModal setOpen={setOpen} open={open} />
                    </div>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className={`block pt-6 hover:border-t-4 hover:mt-[-4px] hover:border-[#FF6E4E] font-lexend`}
                    aria-current={path === href ? 'page' : undefined}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}

            {path === '/staff-augmentation' && (
              <li>
                <Link
                  href="#technical-skills"
                  onClick={toggleNav}
                  className="block pt-6 hover:border-t-4 hover:mt-[-4px] hover:border-[#FF6E4E] font-lexend"
                  aria-current="page"
                >
                  Technical Skills
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="hidden md:flex flex-row z-50 pt-2 font-Inter">
          <Link href="/contact-us" onClick={toggleNav}>
            <div className="group flex cursor-pointer flex-row justify-center items-center ease-in duration-300 hover:text-black b-[1px] font-medium lg:text-[13px] xl:text-[15px] 2xl:text-[18px] border rounded-md border-[#FF6E4E] px-2 2xl:w-[210px] xl:h-[48px] h-[56px] 2xl:h-[56px] hover:bg-[#FF6E4E] font-[Lexa-Deca] text-white">
              <img
                className="group-hover:hidden w-auto xl:w-[25px] 2xl:w-auto"
                src="/assets/images/Navbar/buttonlogo.png"
                alt="Consultation Icon"
              />
              <img
                className="hidden group-hover:block w-auto xl:w-[25px] 2xl:w-auto"
                src="/assets/images/Navbar/Message.png"
                alt="Consultation Icon"
              />
              <span className="mx-4">Let's Talk</span>
              <GoArrowUpRight className="icon text-[#FF6E4E] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] group-hover:text-black 2xl:group-hover:text-[17px]" />
            </div>
          </Link>
          <div
            onClick={toggleAboutModal}
            className="flex justify-center cursor-pointer items-center -mt-[10px] 2xl:mt-[-30px] ml-12"
          >
            <img
              src="/assets/images/Navbar/popupicon.png"
              alt="Consultation Icon"
            />
          </div>
        </div>
        {/* navbar page link end */}
        {nav ? (
          <div
            onClick={toggleNav}
            className="block cursor-pointer mt-4 lg:hidden text-[#FFFFFF]"
          >
            <AiOutlineClose color="white" size={30} />
          </div>
        ) : (
          <div className="mt-4 lg:hidden cursor-pointer" onClick={toggleNav}>
            <AiOutlineMenu color="white" size={30} />
          </div>
        )}
        {sideHeader && (
          <div className="fixed bg-[#101F34] overflow-x-hidden hidden-scroll  transition-all duration-700 ease-in-out z-[50]  h-full w-full right-0 top-0">
            <div className="w-full text-white p-6 2xl:px-0 px-[30px] sm:px-[50px]">
              <div className="flex justify-between  items-center">
                <div></div>
                <div
                  className="cursor-pointer mt-5"
                  onClick={() => {
                    setSideHeader(false);
                    setNav(true);
                  }}
                >
                  <IoMdClose fontSize={'30px'} />
                </div>
              </div>
              <div className="flex justify-center flex-wrap items-center gap-10 mt-16">
                <div className="w-[300px] text-center h-[543px] p-6 shadow-lg shadow-slate-50">
                  <div className="m-auto">
                    <img
                      src={'/assets/images/Navbar/dev.png'}
                      className="m-auto"
                      alt="dev icon"
                    />
                  </div>
                  <h5 className="font-bold text-xl my-4">Development</h5>
                  <div className="flex flex-col gap-2">
                    {ServicesData['webDevelopment'].map((data, index) => {
                      const { name, href } = data;
                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => {
                            setSideHeader(!sideHeader);
                          }}
                        >
                          <p className="text-lg">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="m-auto">
                    <img
                      src={'/assets/images/Navbar/dev6.png'}
                      className="m-auto"
                      alt="dev icon"
                    />
                  </div>
                  <h5 className="font-bold text-xl my-4">App Development</h5>
                  <div className="flex flex-col gap-2">
                    {ServicesData['appDevelopment'].map((data, index) => {
                      const { name, href } = data;

                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => {
                            setSideHeader(!sideHeader);
                          }}
                        >
                          <p className="text-lg">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[300px] text-center h-[543px] p-6 shadow-lg shadow-slate-50">
                  <div className="m-auto">
                    <img
                      src={'/assets/images/Navbar/dev1.png'}
                      className="m-auto"
                      alt="dev icon"
                    />
                  </div>
                  <h5 className="font-bold text-xl my-4">Designing</h5>
                  <div className="flex flex-col gap-2">
                    {ServicesData['designing'].map((data, index) => {
                      const { name, href } = data;
                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => {
                            setSideHeader(!sideHeader);
                          }}
                        >
                          <p className="text-lg">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[300px] text-center h-[543px] p-6 shadow-lg shadow-slate-50">
                  <div className="m-auto">
                    <img
                      src={'/assets/images/Navbar/dev2.png'}
                      className="m-auto"
                      alt="dev icon"
                    />
                  </div>
                  <h5 className="font-bold text-xl my-4">Content Marketing</h5>
                  <div className="flex flex-col gap-2">
                    {ServicesData['contentMarketing'].map((data, index) => {
                      const { name, href } = data;
                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => {
                            setSideHeader(!sideHeader);
                          }}
                        >
                          <p className="text-lg">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[300px] text-center h-[543px] p-6 shadow-lg shadow-slate-50">
                  <div className="m-auto">
                    <img
                      src={'/assets/images/Navbar/dev3.png'}
                      className="m-auto"
                      alt="dev icon"
                    />
                  </div>
                  <h5 className="font-bold text-xl my-4">
                    Search Engine Marketing
                  </h5>
                  <div className="flex flex-col gap-2">
                    {ServicesData['seoMarketing'].map((data, index) => {
                      const { name, href } = data;
                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => {
                            setSideHeader(!sideHeader);
                          }}
                        >
                          <p className="text-lg">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`transition-all duration-300 bg-[#5e5b5b1f] h-full fixed right-0 top-0  z-[1000] ${
            aboutModel
              ? 'opacity-100 w-full'
              : 'opacity-0 pointer-events-none w-0'
          }`}
        >
          <AboutUsModal setNav={setNav} setAboutModel={setAboutModel} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
