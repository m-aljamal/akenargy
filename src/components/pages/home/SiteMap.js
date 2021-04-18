import React from "react";
import { siteMap } from "../../constant/links";
import { SiteMapInfo } from "./SiteMapInfo";
import { SiteMapLinks } from "./SiteMapLinks";
export const SiteMap = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="grid grid-cols-3 bg-lightGray py-4">
          {siteMap.map((s, i) => (
            <SiteMapInfo data={s} key={i} />
          ))}
        </div>
        <SiteMapLinks />
      </div>
      <div className="bg-lightGray w-full">
        <div className="container flex">
          <div>
            <h2>تابعونا عبر</h2>
            <p>صفحات التواصل الاجتماعي</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
