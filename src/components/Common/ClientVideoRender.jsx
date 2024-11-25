"use client";
import { useState } from "react";
import VideoModal from "./VideoModal";

const ClientVideoRender = ({ source }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        style={{
          background: `url(${source.thumbnail})`,
          backgroundSize: `100% 100%`,
        }}
        onClick={openModal}
        className="max-w-[306px] cursor-pointer  mx-auto md:max-w-[380px] h-[270px]  hover:border-white"
      ></div>
      <VideoModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        videoSrc={source.videoSrc}
      />
    </>
  );
};

export default ClientVideoRender;
