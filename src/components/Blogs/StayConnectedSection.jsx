"use client";
import wixClient from "@/config/wixConfig";
import { useState } from "react";

function StayConnectedSection() {
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
    <section className="w-[100%] mt-4 pt-12 flex justify-center items-center pb-16 bg-[#0A141F] text-center py-10">
      <div className="w-full max-w-[772px] px-4 m-auto">
        <h6 className=" text-[white] text-[18px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-poppins font-bold  ">
          Stay <span className="text-[#FB724C]">Connected</span> Stay{" "}
          <span className="relative italic w-fit">
            <span className="relative w-full z-10">Informed</span>
            <span className="absolute w-full h-1 lg:h-1.5 bg-[#FB724C] bottom-1  lg:bottom-[12px] 2xl:bottom-[12px] right-0" />
          </span>
        </h6>
        <div className=" my-3 m-auto">
          <p className=" font-poppins font-thin text-[12px] sm:text-[14px] text-white">
            Join our community and receive exclusive updates, latest news, and
            exciting content straight to your inbox
          </p>
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex bg-white justify-between rounded-xl  pl-2  mt-4 w-full    items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@strugbits.com"
                className="bg-transparent border-none py-3 w-full lg:text-[14px] font-Inter text-[12px] pl-3 outline-none p-2"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-xl bg-[#FB724C] font-DM lg:text-[14px] text-[12px] px-2 sm:px-3 md:px-4 lg:px-12 py-3 ml-[-23px] text-[white] cursor-pointer "
              >
                Subscribe
              </button>
            </form>
            {message && (
              <p className="font-poppins font-thin text-[12px] sm:text-[14px] text-left text-[#FB724C] pt-3">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayConnectedSection;
