"use client"
import React,{useState, useEffect} from "react";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import YouTube from 'react-youtube';

//http://192.168.50.201:8080/

export default function Home() {

  const [display, setDisplay] = useState([])
  const [videoIndex, setvideoIndex] = useState(0)

  const getDisplay = async () => {
    console.log("change")
    try {
      const response = await axios.get("api/display")
      setDisplay(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const playNextVideo = () => {
    if(display?.videos?.length > videoIndex+1){
      setvideoIndex(videoIndex+1)
    }
    else{
      setvideoIndex(0)
    }
  }

  useEffect(() => {
    getDisplay()
  }, [])

  return (
    <>
      <div className="p-2 h-screen">
        <div className="flex h-[77%]">
          <div className="w-3/4 h-full">
            <div className="h-full p-2 rounded-lg">
              <div className="h-full bg-gray-600 rounded-lg shadow-lg p-2">
                {/* <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${display?.videos?.[videoIndex]?.url}?autoplay=1&mute=1&controls=0&loop=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe> */}
                <YouTube onEnd={playNextVideo} videoId={display?.videos?.[videoIndex]?.url} style={{height:"100%", width:"100%"}} opts={{height: '100%', width: '100%',playerVars: {autoplay: 1,controls:0,mute:1,loop:1}}} />
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full">
            <div className="h-1/3 p-2 rounded-lg">
              <div className="h-full  rounded-lg shadow-lg p-2 flex justify-center items-center" >
                <iframe src="https://xlri.ac.in/logo.html" scrolling="no" className="overflow-hidden w-full h-full" allowfullscreen frameBorder="0"></iframe>
              </div>
            </div>
            <div className="h-2/3 p-2 rounded-lg">
              <div className="h-full w-full bg-gray-600 rounded-lg shadow-lg p-2 flex justify-center items-center">
              {display?.posts?
              <SimpleImageSlider
                width={500}
                height={500}
                images={display?.posts}
                autoPlay={true}
                showBullets={false}
                showNavs={false}
                loop={true}
                autoPlayDelay={5.0}
                style={{width:"100%",height:"100%", position:"sticky"}}
              />:""}
                      {/* <img width={800} src={display?.posts?.[postIndex]?.url} />      */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[23%] p-2 rounded-lg">
          <div className="h-full bg-[#10316a] rounded-lg shadow-lg p-2 flex items-center flex-col">
            <div className="w-full h-6 bg-[#b2d22e] rounded-t-lg"></div>
            <marquee behavior="scroll" scrollamount="20" width="100%" direction="left" height="100%" className="text-[120px] font-bold text-white flex items-center">
              <p>
              {display?.notices?.map((e)=>{
                return(
                  <>
                  {e?.text} &nbsp;|&nbsp; 
                  </>
                )
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
