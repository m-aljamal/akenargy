import React from "react";

export const Title = ({title, text}) => {
  return (
    <div className="text-white text-center ">
      <p className="text-lg">{title}</p>
      <h2 className="font-bold text-2xl">
        {text}<span className="text-red">.</span>
      </h2>
      <div className="absolute w-16 h-24 top-6 right border-2 border-red opacity-80"></div>
    </div>
  );
};
