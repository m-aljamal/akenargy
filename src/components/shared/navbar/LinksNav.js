import React from "react";
import { Link } from "gatsby";
import { links } from "../../constant/links";
import logo from "../../../icons/Logo-01.svg";
export const LinksNav = () => {
  return (
    <div className="w-screen absolute z-30 bg-gray bg-opacity-75 py-3 ">
      <div className="flex justify-between text-white container items-center">
        <div className="w-64">
          <img src={logo} alt="logo" />
        </div>
        <div>
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
