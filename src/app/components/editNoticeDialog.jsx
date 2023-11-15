import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditNoticeDialog({ open, setOpen, update }) {
  const [notice, setNotice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateNotice = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(`api/display/notice/${open?._id}`, {
        text: notice,
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
    setNotice(open?.text);
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
          <h1 className="text-xl font-semibold mb-8 text-center">Edit News</h1>
          <div className=" mt-4">
            <textarea rows="4" cols="80"
              type="text"
              className="bg-gray-800 p-2 rounded-lg"
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
            />
          </div>
          <button
            disabled={notice === "" || isLoading}
            onClick={handleUpdateNotice}
            className="bg-green-700 px-4 py-2 my-4 w-full rounded-lg hover:bg-green-600 font-semibold"
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}
