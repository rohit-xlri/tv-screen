"use client";
import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//http://192.168.50.201:8080/

export default function Home() {
  const [display, setDisplay] = useState([]);
  const [videoIndex, setvideoIndex] = useState(0);
  const [view, setView] = useState("template1");
  const [showLoader, setShowLoader] = useState(false);
  const [onLoop, setOnLoop] = useState(false)

  const getDisplay = async () => {
    setShowLoader(true);
    try {
      const response = await axios.get("api/display");
      setOnLoop(response.data?.display?.onLoop);
      setDisplay(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setShowLoader(false);
    }
  };

  const playNextVideo = () => {
    if (display?.videos?.length > videoIndex + 1) {
      setvideoIndex(videoIndex + 1);
      console.log("if cond")
    } else {
      setvideoIndex(0);
      console.log("else cond")
    }
  };

  console.log(onLoop)

  useEffect(() => {
    getDisplay();
  }, []);

  return (
    <>
      <div
        className={`fixed bg-black overflow-hidden backdrop-blur-md w-full h-screen top-0 flex justify-center items-center ${
          showLoader ? "" : "hidden"
        }`}
      >
        <div role="status" className="">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="p-2 h-screen">
        <div className="flex h-[77%]">
          <div className="w-3/4 h-full">
            <div className="h-full p-2 rounded-lg">
              <div className="h-full bg-gray-600 rounded-lg shadow-lg p-2">
                {
                  display?.videos?
                display?.videos?.[videoIndex]?.isYoutube ? (
                  <YouTube
                    onEnd={playNextVideo}
                    videoId={display?.videos?.[videoIndex]?.url}
                    style={{ height: "100%", width: "100%" }}
                    opts={{
                      height: "100%",
                      width: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        mute: 1,
                        loop:onLoop
                      },
                    }}
                  />
                ) : (
                  <video
                    height={"100%"}
                    width={"100%"}
                    className="max-w-[100%] max-h-[100%]"
                    autoPlay
                    muted={true}
                    onEnded={playNextVideo}
                    loop={onLoop}
                  >
                    <source src={display?.videos?.[videoIndex]?.url} type="video/mp4"/>
                  </video>
                ):""}
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full">
            <div className="h-1/3 p-2 rounded-lg">
              <div className="h-full  rounded-lg shadow-lg p-2 flex justify-center items-center">
                <iframe
                  src="https://xlri.ac.in/logo.html"
                  scrolling="no"
                  className="overflow-hidden w-full h-full"
                  allowfullscreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="h-2/3 p-2 rounded-lg">
              <div className="h-full w-full bg-gray-600 rounded-lg shadow-lg p-2 flex justify-center items-center">
                {display?.posts ? (
                  <Swiper
                    loop
                    modules={[Autoplay]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    autoplay={{
                      delay: 7000,
                      pauseOnMouseEnter: false,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    {display?.posts?.map((e,i) => {
                      return (
                        <SwiperSlide key={i}>
                          <img
                            className="w-full h-full object-cover overflow-hidden"
                            width={800}
                            src={e?.url}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  ""
                )}
                {/* <img width={800} src={display?.posts?.[postIndex]?.url} />      */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[23%] p-2 rounded-lg">
          <div className="h-full bg-[#10316a] rounded-lg shadow-lg p-2 flex items-center flex-col">
            <div className="w-full h-6 bg-[#b2d22e] rounded-t-lg"></div>
            <marquee
              behavior="scroll"
              scrollamount="40"
              width="100%"
              direction="left"
              height="100%"
              className="text-[120px] font-bold text-white flex items-center"
            >
              <p>
                {display?.notices?.map((e,i) => {
                  return <p key={i}>{e?.text} &nbsp;|&nbsp;</p>;
                })}
              </p>
            </marquee>
            <div className="w-full h-6 bg-[#b2d22e] rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
