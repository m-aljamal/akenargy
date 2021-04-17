import React from "react";

export const Box = ({ data }) => {
  return (
    <div className="bg-white text-black flex justify-around items-center px-2 py-4">
      <img src={data.icon} alt={data.text} className='w-14' />
      <p className='font-bold'>{data.text}</p>
    </div>
  );
};
