import React from "react";

export const Input = ({ text, name }) => {
  return (
    <div className="px-8">
      <input
        type="text"
        name={name}
        placeholder={text}
        className=" w-full focus:outline-none  p-4 border-b-2 border-gray border-opacity-70"
      />
    </div>
  );
};
