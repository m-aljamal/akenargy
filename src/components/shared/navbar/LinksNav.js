import React, { useState } from "react";
import { Link } from "gatsby";
import { links } from "../../constant/links";
import logo from "../../../icons/logo4.png";
import openMenu from "../../../icons/openMenu.svg";
import closeMenu from "../../../icons/closeMenu.svg";
export const LinksNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" w-full absolute z-30 bg-gray bg-opacity-75 py-3  ">
      <div className="flex md:justify-between justify-center text-white container items-center relative">
        <div
          className=" w-14 md:hidden block ml-2"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <img src={closeMenu} alt="openMenu" />
          ) : (
            <img src={openMenu} alt="openMenu" />
          )}
        </div>
        <img src={logo} alt="logo" className="md:w-1/4 w-56" />
        {visible && (
          <div className="absolute resNav bg-gray bg-opacity-75  w-full ">
            {links.map((l, i) => (
              <div className="container text-lg py-1 text-center hover:bg-red transition-all duration-150">
                <Link to={l.link} key={i}>
                  {l.arText}
                </Link>
              </div>
            ))}
          </div>
        )}
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
