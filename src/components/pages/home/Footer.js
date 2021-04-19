import React from "react";
import back from "../../../icons/back_icon.svg";
export const Footer = () => {
  return (
    <div className="bg-black" id="test">
      <div className="container py-5 flex items-center font-bold justify-between">
        <div className="flex items-center">
          <h2 className="text-white">
            جميع الحقوق محفوظة لصالح شركة{" "}
            <span className="text-lightRed italic">AK ENERGY </span>
            للطاقة والكهرباء
          </h2>
          <h2 className="text-lightRed text-2xl mx-1 mt-1 ">&#169;</h2>
          <h2 className="text-lightRed text-xl">{new Date().getFullYear()}</h2>
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => window["scrollTo"]({ top: 0, behavior: "smooth" })}
        >
          <p className="text-white">الرجوع للأعلى</p>
          <img src={back} alt="back" className="w-6 mr-2" />
        </div>
      </div>
    </div>
  );
};
