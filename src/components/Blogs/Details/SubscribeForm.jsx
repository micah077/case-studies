"use client";

import wixClient from "@/config/wixConfig";
import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const finalData = {
      email_ea0d: email,
    };

    try {
      const response = await wixClient.submissions.createSubmission({
        formId: process.env.SUBSCRIBE_FORM_ID,
        status: "CONFIRMED",
        submissions: finalData,
      });

      if (response) {
        setMessage("Subscribed successfully.");
        setEmail("");
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
    <div className=" w-full   m-auto  xl:-mt-10 2xl:m-0    ">
      <div className=" w-full  m-auto  mt-14 ">
        <div className="w-[90%] xl:w-[100%] py-10 xl:py-5  2xl:py-10    rounded-2xl  px-4 m-auto bg-[#122337]">
          <div className=" w-[100%]  text-center m-auto">
            <h6 className="font-poppins font-[600] text-[14px] md:text-[16px]  2xl:text-[22px]  text-[white] ">
              Stay <span className="text-[#FB724C] ">Connected</span>
              <br className="hidden xl:block" />
              Stay Informed
            </h6>
          </div>
          <p className="text-[white] text-center font-poppins text-[12px] 2xl:text-[12px] my-4">
            Join our community and receive exclusive updates, latest news, and
            exciting content straight to your inbox
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mt-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@strugbits.com"
                className="border-none text-[11px] xl:text-[13px] font-Inter font-normal py-2 rounded-3xl pl-3 outline-none w-full"
              />
            </div>
            <div className="text-center">
              {message && (
                <p className="font-poppins text-[12px] sm:text-[14px] text-left text-[#FB724C] pt-3">
                  {message}
                </p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 text-[12px] 2xl:text-[14px] text-[white] bg-[#FB724C] rounded-3xl px-2 md:px-8 py-2 md:py-3 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
