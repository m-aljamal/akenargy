import React from "react";
import { socialLink, contacts } from "../../constant/links";
export const UpperNav = () => {
  return (
    <div className="bg-black p-2">
      <div class="container flex md:justify-between items-center justify-center	">
        <div className=" md:flex hidden ">
          {contacts.map((c, i) => (
            <a
              className={`px-2.5 text-sm  ${
                i === 1 && "border-r-2 border-red border-opacity-75"
              } `}
              key={i}
            >
              <div className="flex">
                <p className="text-white d-ltr">{c.text}</p>
                <img className="w-6 mr-3" src={c.icon} alt={c.text} />
              </div>
            </a>
          ))}
        </div>
        <div className="flex ">
          {socialLink.map((s, i) => (
            <a
              className={`md:px-5 md:border-l-2 border-red border-opacity-75
               bg-lightRed bg-opacity-25 md:bg-black m-2 md:m-0 p-2 rounded-lg md:rounded-none md:p-0 ${
                 i === 0 && "md:border-r-2"
               }`}
              href={s.link}
              key={i}
            >
              <img className="w-5	" src={s.icon} alt={s.link} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
