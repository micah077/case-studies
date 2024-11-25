import { FAQs } from "@/utils/HomePageData/Faqs";

function FAQSection() {
  return (
    <div className="max-w-[1320px] mx-auto my-16">
      <div className="max-w-[880px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <p className="text-[#FF6E4E] font-poppins font-semibold text-[16px] leading-[30px]">
            Frequently Asked Questions
          </p>
        </div>

        <p className="font-DM text-center text-[46px] my-2 md:my-1 font-bold px-14">
          <span className="text-[#FF6E4E]">Any Questions?</span> We Got you.
        </p>
      </div>
      <div className="divide-y-2  ">
        {FAQs.map((data, index) => {
          const { question, answer } = data;
          return (
            <details key={index} className="p-6 group" open={false}>
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="font-poppins text-[20px] leading-[30px] font-medium text-[#0A141F]">
                  {question}
                </h5>

                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF6E4E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>

                  <svg
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF6E4E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 font-poppins text-[20px] leading-[28px] font-[400] text-[#8A90A2]">
                {answer}
              </p>
            </details>
          );
        })}
      </div>
    </div>
  );
}

export default FAQSection;
