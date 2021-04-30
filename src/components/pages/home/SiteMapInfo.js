import React from "react";

export const SiteMapInfo = ({ data, index }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        index !== 0 && "hidden md:flex"
      }`}
    >
      <img src={data.icon} alt={data.text} className="w-10" />
      <div className="w-0.5 bg-lightRed h-5 mr-3"></div>
      <div className="text-white mr-3  ">
        <h2 className="font-bold mb-1 text-sm lg:text-lg">{data.title}</h2>
        <p className="d-ltr text-xs lg:text-lg">{data.text}</p>
      </div>
    </div>
  );
};
