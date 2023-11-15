import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditVideoDialog({ open, setOpen, update }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateVideo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(`api/display/video/${open?._id}`, {
        url: videoUrl,
      });
      alert(response.data?.message);
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      update();
      setOpen(false);
    }
  };

  useEffect(() => {
    setVideoUrl(open?.url);
  }, [open]);

  return (
    <>
      <div
        className={`fixed bg-[#000000af] overflow-hidden backdrop-blur-md w-full h-screen top-0 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="fixed z-10 m-auto inset-x-0 inset-y-0 w-fit h-fit p-4 bg-gray-900 rounded-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-300 text-2xl font-semibold "
          >
            X
          </button>
          <h1 className="text-xl font-semibold mb-8 text-center">Edit Video</h1>
          <iframe
            width="400px"
            height="300px"
            src={`https://www.youtube.com/embed/${open?.url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="flex items-center gap-4 mt-4">
            <label htmlFor="">Enter video id:</label>
            <input
              type="text"
              className="bg-gray-800 p-2 rounded-lg"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <button
            disabled={videoUrl === "" || isLoading}
            onClick={handleUpdateVideo}
            className="bg-green-700 px-4 py-2 my-4 w-full rounded-lg hover:bg-green-600 font-semibold"
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}
