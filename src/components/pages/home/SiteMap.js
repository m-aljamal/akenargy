import React from "react";
import { siteMap } from "../../constant/links";
import { SiteMapInfo } from "./SiteMapInfo";
import { SiteMapLinks } from "./SiteMapLinks";
import { socialLink } from "../../constant/links";
export const SiteMap = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div
          className="grid grid-cols-3 bg-lightGray py-4"
          data-sal="flip-up"
          data-sal-easing="easeOutQuad"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          {siteMap.map((s, i) => (
            <SiteMapInfo data={s} key={i} />
          ))}
        </div>
        <SiteMapLinks />
      </div>
      <div className="bg-lightGray w-full py-5">
        <div className="container flex text-white">
          <div>
            <h2 className="font-bold text-2xl">تابعونا عبر</h2>
            <p className="text-xl">صفحات التواصل الاجتماعي</p>
          </div>
          <div className="flex mr-8 items-center ">
            {socialLink.map((s, i) => (
              <a href={s.link} className="ml-8 bg-black p-3">
                <img src={s.icon} alt={s.link} className="w-8" />
              </a>
            ))}
          </div>
          <div className="mr-auto flex items-center">
            <div className="ml-8 ">
              <p className="text-xl font-bold">اشترك عبر</p>
              <p className="text-lg">القائمة البريدية</p>
            </div>
            <div>
              <input
                placeholder="ادخل اﻹيميل"
                className=" bg-black text-white p-1 focus:outline-none border-2 rounded-r-lg border-red"
              />
              <button className=" font-bold border-2 border-red p-1 bg-red rounded-l-lg focus:outline-none">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
