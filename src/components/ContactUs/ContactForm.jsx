"use client";

import wixClient from "@/config/wixConfig";
import { phoneCountryCodes } from "@/utils/ContactUsPageData";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const ContactForm = () => {
  const [selectedItem, setSelectedItem] = useState(phoneCountryCodes[0]);
  const [openDropdown, setOpenDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const phoneNumber = selectedItem.countryCode + " " + data.phone;

    const finalData = {
      full_name: data.name,
      email_a784: data.email,
      phone_e353: phoneNumber,
      service: data.service,
      message: data.message,
    };
    try {
      const response = await wixClient.submissions.createSubmission({
        formId: process.env.CONTACT_US_FORM_ID,
        status: "CONFIRMED",
        submissions: finalData,
      });

      if (response) {
        setMessage("Form submitted successfully.");
        setData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="  relative md:w-[90%] xl:w-[85%] md:pt-[80px] bg-center rounded-[40px] bg-cover bg-[image:--bgImageSection4Home] px-6 pt-6 pb-[60px] mx-auto h-auto border-[2px] border-gray-200">
      <div className="hidden xl:block">
        <img
          src={"/assets/images/Home/NToch.png"}
          className=" absolute lg:200px xl:w-[300px] 2xl:600px top-[-50px] right-[-60px] "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/notchLeftM.png"}
          className="absolute  top-[-80px] "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/topsmall.png"}
          className="absolute bottom-[120px]  left-[-60px]"
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/bottomRightMid.png"}
          className="absolute  w-[140px]  xl:w-[170px] xl:block bottom-[-40px] xl:bottom-[-70px] right-[-60px]  "
          alt="Consultation Icon"
        />
        <img
          src={"/assets/images/Home/bottomMid.png"}
          width={"120px"}
          className="absolute top-[370px]    right-[-60px]"
          alt="Consultation Icon"
        />
      </div>
      <div className="flex items-center lg:flex-nowrap md:flex-wrap flex-wrap px-0 lg:px-16">
        <div className="flex-2 w-full md:w-full lg:w-[60%]">
          <h1
            className="font-DM text-[22px] sm:text-[30px] md:text-[35px] 
lg:text-[42px] xl:text-[48px] 2xl:text-[55px] text-center lg:text-left font-extrabold text-white"
          >
            Let's Start a
          </h1>
          <h1
            className="font-DM text-[22px] sm:text-[30px] md:text-[35px] 
lg:text-[42px] xl:text-[48px] 2xl:text-[55px] text-center lg:text-left font-extrabold text-white"
          >
            Project <span className="w-fit text-[#FF6E4E]">Together</span>
          </h1>
          <div className="lg:pr-24">
            <p className="mt-4 text-[#8A90A2] text-center lg:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.41px] font-normal">
              Contact us and we'll respond right away. We work closely with our
              clients to understand their objectives and unique needs. We use
              our skills to translate these requirements and practical
              solutions.{" "}
            </p>
            <div className="flex lg:block justify-between items-center flex-wrap ">
              <div className="w-fit my-5">
                <h6 className="text-[#FF6E4E] font-bold">Give us a call:</h6>
                <p className="text-white">+1 628-488-7538</p>
              </div>
              <div className="w-fit my-3">
                <h6 className="text-[#FF6E4E] font-bold">Send us an email:</h6>
                <p className="text-white">info@strugbits.com</p>
              </div>
              <div className="w-fit mt-6 flex">
                <Link
                  href={"https://www.instagram.com/strugbits.co/"}
                  target="_blank"
                >
                  <img
                    className="cursor-pointer"
                    src={"/assets/images/contactUs/instagram-logo.png"}
                    alt="instagram logo"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/strugbits.co"}
                >
                  <img
                    src={"/assets/images/contactUs/facebook-logo.png"}
                    className="mx-2 cursor-pointer"
                    alt="facebook logo"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/strugbits/"}
                >
                  <img
                    className="cursor-pointer"
                    src={"/assets/images/contactUs/linkedIn-logo.png"}
                    alt="linkedin logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-full lg:w-3/5 z-10">
          <div className="flex justify-center items-center w-full">
            <form
              onSubmit={handleSubmit}
              className="font-poppins w-full p-0 lg:p-8 my-4"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 mt-5">
                <div className="my-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-[400] text-white"
                  >
                    Full Name*
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.name}
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 "
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-[400] text-white"
                  >
                    Email Address*
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.email}
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 "
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="my-3">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-[400] text-white"
                  >
                    Phone Number*
                  </label>
                  <div className="flex items-center relative">
                    <button
                      onClick={() => setOpenDropDown(!openDropdown)}
                      className="flex-shrink-0 z-10 inline-flex items-center px-2 py-3 text-sm font-[400] text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
                      type="button"
                    >
                      {selectedItem?.icon}
                      {selectedItem?.countryCode}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {openDropdown && (
                      <div className="z-10 absolute top-12  bg-white divide-y divide-gray-100 rounded-lg shadow w-56">
                        <ul
                          className="py-2 text-sm text-gray-900"
                          aria-labelledby="dropdown-phone-button"
                        >
                          {phoneCountryCodes.map((data, index) => {
                            const { countryName, countryCode, icon } = data;
                            return (
                              <li
                                key={index}
                                onClick={() => {
                                  setSelectedItem(data);
                                  setOpenDropDown(false);
                                }}
                              >
                                <button
                                  type="button"
                                  className="inline-flex w-full px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  <div className="inline-flex items-center">
                                    {icon}
                                    {countryName} ({countryCode})
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    <label
                      htmlFor="phone-input"
                      className="mb-2 text-sm font-[400] text-gray-900 sr-only"
                    >
                      Phone number:
                    </label>
                    <div className="relative w-full">
                      <input
                        onChange={handleChange}
                        value={data.phone}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block px-4 py-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="my-3">
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-[400] text-white"
                  >
                    Service*
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.service}
                    type="text"
                    id="service"
                    name="service"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 "
                    placeholder="Enter Service"
                    required
                  />

                  {/* <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-[400] text-white"
                  >
                    Service
                  </label>
                  <select
                    onChange={handleChange}
                    id="service"
                    name="service"
                    className="block w-full px-4 py-2.5 text-base border border-gray-300 text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  >
                    <option>Select Service</option>
                    <option value="Service 1">Service 1</option>
                    <option value="Service 2">Service 2</option>
                    <option value="Service 3">Service 3</option>
                  </select> */}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-[400] text-white"
                >
                  Tell us about your project*
                </label>
                <textarea
                  onChange={handleChange}
                  value={data.message}
                  id="message"
                  name="message"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="mx-auto">
                {message && (
                  <p className="font-poppins text-[12px] sm:text-[14px] text-left text-[#FB724C] pt-3">
                    {message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className=" flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-8"
                >
                  <div className="flex group z-[5] flex-row justify-center items-center ease-in duration-300  font-semibold text-[12px] lg:text-[14.95px]  border rounded-full border-[#FF6E4E] lg:px-8 px-14 py-3 lg:py-3 bg-[#FF6E4E] font-poppins text-white overflow-hidden relative">
                    <span className="">
                      {isLoading ? "Sending..." : "Send Message"}
                    </span>
                    <span className=" text-[12px] mx-1">
                      <FaChevronRight />
                    </span>
                    <span className="absolute  w-[186px] rounded-full mt-[120px] ml-[240px] group-hover:ml-[-260px] bg-white h-[186px] duration-500 opacity-[20%] "></span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
