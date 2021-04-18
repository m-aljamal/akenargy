import React from "react";

export const SiteMapInfo = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={data.icon} alt={data.text} className="w-10" />
      <div className="w-0.5 bg-lightRed h-5 mr-3"></div>
      <div className="text-white mr-3  ">
        <h2 className="font-bold mb-1">{data.title}</h2>
        <p className="d-ltr">{data.text}</p>
      </div>
    </div>
  );
};
