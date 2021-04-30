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
          className="grid md:grid-cols-3 bg-lightGray py-4"
          data-sal="flip-up"
          data-sal-easing="easeOutQuad"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          {siteMap.map((s, i) => (
            <SiteMapInfo data={s} key={i} index={i} />
          ))}
        </div>
        <SiteMapLinks />
      </div>
      <div className="bg-lightGray w-full py-5">
        <div className="container flex text-white items-center justify-between">
          <div>
            <h2 className="font-bold md:text-2xl text-xl">تابعونا عبر</h2>
            <p className="md:text-xl text-lg ">صفحات التواصل الاجتماعي</p>
          </div>
          <div className="flex mr-8 items-center flex-wrap ">
            {socialLink.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className={`${
                  i !== socialLink.length - 1 && "ml-8"
                }  bg-black p-3 md:w-12  w-10 mt-2`}
              >
                <img src={s.icon} alt={s.link} className="w-full" />
              </a>
            ))}
          </div>
          <div className="mr-auto xl:flex items-center hidden lg:block">
            <div className="ml-8 lg:mb-2">
              <p className="text-xl font-bold">اشترك عبر</p>
              <p className="text-lg">القائمة البريدية</p>
            </div>
            <div className="flex ">
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
