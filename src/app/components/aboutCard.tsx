import React from "react";

export default function AboutCard() {
  return (
    <div className="rounded bg-[#F9A8D4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center p-3 ">
      <div className="bg-[#FBCFE8] rounded p-3">
        <p>Location</p>
        <p className="font-bold  text-[#e879f9] ">
          F71 Street 113k, Phnom Penh
        </p>
      </div>
      <div className="bg-[#FBCFE8] rounded p-3">
        {" "}
        <p>Website</p>
        <p className="font-bold  bg-clip-text bg-gradient-to-r text-[#e879f9]">
          www.hornchhany.com.kh
        </p>
      </div>
      <div className="bg-[#FBCFE8]  rounded p-3">
        <p>Portfolio</p>
        <p className="font-bold bg-clip-text bg-gradient-to-r text-[#e879f9] ">
          #hornchhany
        </p>
      </div>
      <div className="bg-[#FBCFE8]  rounded p-3">
        {" "}
        <p>Email</p>{" "}
        <p className="font-bold bg-clip-text bg-gradient-to-r text-[#e879f9] ">
          hornchhanny@gmail.com
        </p>
      </div>
    </div>
  );
}
