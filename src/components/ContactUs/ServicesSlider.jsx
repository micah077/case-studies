'use client';
import React from 'react';

import ContactUsSlider from './ContactUsSlider';

const ContactUsServicesSlider = () => {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto lg:text-center ">
        <h6
          className="font-poppins text-[22px] sm:text-[28px] md:text-[32px] 
lg:text-[35px] xl:text-[38px] 2xl:text-[40px] text-center text-[#0A141F]  font-extrabold capitalize"
        >
          Explore Range of Our
          <span className="text-[#FB724C]"> Services</span>
        </h6>
        <p className="mt-6 w-full lg:w-1/2 font-poppins text-[16px] text-center leading-8 text-[#292929] mx-auto px-0 ">
          Explore all our quality solutions at Strugbits, and discover how we
          can transform your digital presence into a powerful, engaging, and
          memorable experience.
        </p>
      </div>
      {/* SLIDER */}
      <div className="mx-auto">
        <ContactUsSlider />
      </div>
    </div>
  );
};

export default ContactUsServicesSlider;
