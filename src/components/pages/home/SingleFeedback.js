import React from "react";
import noteIcon from "../../../icons/note_icon.svg";
export const SingleFeedback = ({ data }) => {
  return (
    <div>
      <div className="bg-white mt-24 p-4 border-r-2 border-l-2 border-b-2 border-red">
        <div className="flex items-end mtop">
          <img src={noteIcon} alt="note icon" className="w-10" />
          <img src={data.img} alt="feedback" className="w-20" />
        </div>
        <p className="text-justify mt-3">{data.text}</p>
        <p className="text-center  text-red font-bold text-lg mt-3">
          {data.name} <span> {data.position}</span>
        </p>
      </div>
    </div>
  );
};
