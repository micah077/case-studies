"use client";
import React, { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { clientSliderData } from "@/utils/HomePageData/ClientSliderData";

const loadYouTubeAPI = (retries = 5, delay = 1000) => {
  return new Promise((resolve, reject) => {
    const attemptLoad = (retriesLeft) => {
      if (window.YT && window.YT.Player) {
        resolve();
      } else if (retriesLeft === 0) {
        reject(new Error("Failed to load YouTube API"));
      } else {
        setTimeout(() => {
          attemptLoad(retriesLeft - 1);
        }, delay);
      }
    };

    attemptLoad(retries);
  });
};

const YouTubePlayer = ({ videoId, playerId, onReady, onError, styleClass }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onload = async () => {
      await loadYouTubeAPI();
      new window.YT.Player(playerId, {
        videoId,
        events: {
          onReady: onReady,
          onError: onError,
        },
      });
    };
    script.onerror = (e) => {
      console.error("Error loading YouTube API script", e);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId, playerId, onReady, onError]);

  return <div id={playerId} className={`youtube-player ${styleClass}`}></div>;
};

const ClientTestimonialsSection = () => {
  const [mainSlider, setMainSlider] = useState(null);
  const players = useRef([]);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  const handleBeforeChange = () => {
    const playerArray = players.current;
    playerArray.forEach((element) => {
      element.pauseVideo();
    });
  };

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const handlePlayerReady = (event, index) => {
    players.current[index] = event.target;
  };

  const handlePlayerError = (event) => {
    console.error("YouTube Player Error:", event.data);
  };

  const getVideoId = (url) => {
    const urlObj = new URL(url);
    if (
      urlObj.hostname === "www.youtube.com" ||
      urlObj.hostname === "youtube.com"
    ) {
      if (urlObj.pathname === "/watch") {
        return urlObj.searchParams.get("v");
      } else if (urlObj.pathname.startsWith("/embed/")) {
        return urlObj.pathname.split("/")[2];
      } else if (urlObj.pathname.startsWith("/shorts/")) {
        return urlObj.pathname.split("/")[2];
      }
    } else if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    return null;
  };

  return (
    <div className="client-slider-container my-16">
      <div className="max-w-[880px] mx-auto">
        <div className="flex justify-center items-center gap-2">
          <img
            src={"/assets/images/Home/ValuableClient/wallOfLoveIcon.png"}
            alt="stars icon"
          />
          <p className="text-[#FF6E4E] font-poppins font-semibold text-[16px] leading-[30px]">
            Wall of Love
          </p>
        </div>
        <p className="text-[30px] max-w-[917px] sm:text-[34px] md:text-[38px] lg:text-[46px] font-poppins text-center font-[600] text-[#0A141F]">
          Take A Look At Our <span className="text-[#FF6E4E]">Valuable</span>
          <br /> Client’s Testimonials
        </p>
        <div className="text-center m-auto">
          <p className="font-poppins text-[#6A6A8E] text-[16px] leading-[28px]">
            Our client's experiences and feedback are the heartbeat of our work.
            We deliver projects and build relationships with our clients, and
            their testimonials are living proof of the trust and satisfaction
            we've earned.
          </p>
        </div>
      </div>

      <Splide
        options={{
          pagination: false,
          arrows: false,
          rewind: true,
          gap: "1rem",
        }}
        ref={mainRef}
        aria-label="Testimonial Videos Main Slider"
        onMounted={(splide) => {
          setMainSlider(splide);
        }}
        onMove={handleBeforeChange}
      >
        {clientSliderData.map((data, index) => {
          const {
            sliderVideo,
            sliderHeading,
            sliderDescription,
            clientName,
            clientCompany,
          } = data;
          const videoId = getVideoId(sliderVideo);
          const playerId = `youtube-player-${index}`;

          return (
            <SplideSlide key={index}>
              <div className="flex py-8 justify-between items-center flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap">
                <YouTubePlayer
                  videoId={videoId}
                  playerId={playerId}
                  onReady={(event) => handlePlayerReady(event, index)}
                  onError={handlePlayerError}
                  styleClass="w-full lg:w-[874px] lg:h-[500px] md:h-[450px] sm:h-[450px] h-[400px] lg:mt-0 md:mt-2 sm:mt-12"
                />
                <div className="description-container w-full pl-2 lg:pl-10 xl:pl-10 pt-4 lg:pt-0 xl:pt-0 text-justify lg:max-w-[413px] lg:max-h-[492px]">
                  <img
                    className="w-[40px]"
                    src="/assets/images/Home/ValuableClient/Vector.png"
                    alt="vector image"
                  />
                  <h4 className="font-poppins text-[24px] lg:text-[20px] font-[600] py-4">
                    {sliderHeading}
                  </h4>

                  <p className="font-DM text-[#8A90A2] text-[17px] lg:text-[15px] leading-[26px]">
                    {sliderDescription}
                  </p>
                  <span>
                    <h4 className="font-poppins text-[20px] font-[600] mt-4">
                      {clientName}
                    </h4>
                    <p className="font-DM text-[16px] lg:text-[16px] leading-[26px] uppercase">
                      {clientCompany}
                    </p>
                  </span>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="flex justify-between items-center">
        <h4 className="font-poppins text-[28px] font-[500] leading-[60px]">
          Our Clients
        </h4>

        <div>
          <button onClick={() => mainSlider.go("<")} className="cursor-pointer">
            <img
              src="/assets/images/Home/backward.png"
              className="p-1"
              alt="Backward Icon"
            />
          </button>
          <button onClick={() => mainSlider.go(">")} className="cursor-pointer">
            <img
              src="/assets/images/Home/forward.png"
              className="p-1"
              alt="Forward Icon"
            />
          </button>
        </div>
      </div>

      <Splide
        options={{
          fixedWidth: 316,
          fixedHeight: 196,
          isNavigation: true,
          gap: "1rem",
          focus: "center",
          pagination: false,
          cover: true,
          arrows: false,
          rewind: true,
        }}
        aria-label="Testimonial Videos Thumbnail Slider"
        ref={thumbsRef}
      >
        {clientSliderData.map((data, index) => {
          const { thumbnail } = data;
          return (
            <SplideSlide key={index} className="thumbnail-slide">
              <img
                className="max-w-[316px] max-h-[196px] rounded-md second-slide"
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ClientTestimonialsSection;
