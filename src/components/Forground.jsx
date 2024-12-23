/* eslint-disable react/jsx-key */
import React from "react";
import Card from "./Card";

const Forground = () => {
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div>
      <div className="fixed z-[3] top-0 left-0 w-full h-full ">
        {data.map((item, index)=>(
            <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default Forground;
