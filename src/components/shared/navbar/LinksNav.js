import React from "react";
import { Link } from "gatsby";
import { links } from "../../constant/links";
import logo from "../../../icons/logo4.png";
export const LinksNav = () => {
  return (
    <div className=" w-full absolute z-30 bg-gray bg-opacity-75 py-3  ">
      <div className="flex md:justify-between justify-center text-white container items-center">
        <img src={logo} alt="logo" className="md:w-1/4 w-64" />
        <div className="hidden md:flex">
          {links.map((l, i) => (
            <Link
              className={`${i !== links.length - 1 && "px-3"}`}
              to={l.link}
              key={i}
            >
              {l.arText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
