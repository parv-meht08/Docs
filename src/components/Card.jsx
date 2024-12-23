import React from "react";
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <div>
      <div className="relative w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
        <FiFileText />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <MdOutlineFileDownload size="0.8em" color="#fff" />
              )}
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold text-white">Download Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
