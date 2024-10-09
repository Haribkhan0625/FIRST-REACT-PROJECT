import React from "react";
import Card from "./card";
import { FaToriiGate } from "react-icons/fa";
import { useRef } from "react";


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      description: "This is a test description F112G7",
      filesize: "1.04 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "This is a test description R112V7",
      filesize: "1.0 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
    {
      description: "This is a test description W134D7",
      filesize: "0.8 mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "This is a test description G412K7",
      filesize: "1.44 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "This is a test description F152M7",
      filesize: "2.24 mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
