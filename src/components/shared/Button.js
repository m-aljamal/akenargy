import React from "react";

export const Button = ({ text, otherStyles }) => {
  return (
    <button
      className={`gr text-white p-2 rounded-lg text-sm focus:outline-none ${otherStyles} `}
    >
      {text}
    </button>
  );
};
