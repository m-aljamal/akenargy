import React from "react";
import Img from "gatsby-image";
import LinkIcon from "../../../icons/link_icon.svg";

export const Image = ({ image, text, link, options, textStyle, linkStyle }) => {
  return (
    <div className={`relative ${options} `}>
      <Img fluid={image} className="block h-full" />
      <div
        className="absolute w-full top-0 left-0 h-full bg-red opacity-0 hover:opacity-75 text-white 
            transition-opacity
            duration-500"
      >
        <div className="flex flex-col items-center justify-center h-full image-tr">
          <p className={`font-bold ${textStyle} `}>{text}</p>
          <a href={link}>
            <img src={LinkIcon} alt="link" className={` ${linkStyle} mt-3`} />
          </a>
        </div>
      </div>
    </div>
  );
};
