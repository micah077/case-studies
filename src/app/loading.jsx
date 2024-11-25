import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="bg-slate-800 w-full min-h-[100dvh] flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col ">
        <Image
          src={"/assets/images/Home/logo-2.png"}
          alt="Logo"
          height={250}
          width={250}
          quality={100}
        />
        <div class="flex space-x-2 justify-center items-center mt-4">
          <span class="sr-only">Loading...</span>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
