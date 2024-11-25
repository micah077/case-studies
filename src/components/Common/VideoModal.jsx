"use client";
import { useEffect } from "react";
import Modal from "react-modal";

// Adjust if you use a different root element

const VideoModal = ({ isOpen, onRequestClose, videoSrc }) => {
  useEffect(() => {
    const dots = document.querySelector(".slick-dots");
    if (isOpen) {
      dots.style.zIndex = -2;
    } else {
      dots.style.zIndex = 2;
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex items-center justify-center z-50 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div className="relative bg-white rounded-lg z-50 shadow-lg w-full max-w-4xl p-4">
        <button
          className="absolute -top-2 z-10 right-0 text-gray-700 text-2xl"
          onClick={onRequestClose}
        >
          &times;
        </button>
        <div className="relative w-full pb-9/16  z-50 ">
          <video src={videoSrc} autoPlay controls></video>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
