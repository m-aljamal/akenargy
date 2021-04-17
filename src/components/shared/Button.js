import React from "react";

export const Button = ({ text }) => {
  return <button className={`bg-red text-white p-2 rounded-lg text-sm focus:outline-none`}>{text}</button>;
};
