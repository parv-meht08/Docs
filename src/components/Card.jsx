/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2 } className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
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
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold text-white">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
