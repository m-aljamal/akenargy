import React from "react";
import back from "../../../icons/back_icon.svg";
export const Footer = () => {
  return (
    <div className="bg-black" id="test">
      <div className="container py-5  flex items-center font-bold md:justify-between justify-center">
        <div className="md:flex items-center ">
          <h2 className="text-white ">جميع الحقوق محفوظة لصالح شركة</h2>
          <div className="flex items-center">
            <h2 className="text-white ">
              <span className="text-lightRed italic mr-2 ">AK ENERGY </span>
              للطاقة والكهرباء
            </h2>
            <div className="flex items-center">
              <h2 className="text-lightRed text-2xl mx-1 mt-1 ">&#169;</h2>
              <h2 className="text-lightRed text-xl">
                {new Date().getFullYear()}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="md:flex cursor-pointer hidden "
          onClick={() => window["scrollTo"]({ top: 0, behavior: "smooth" })}
        >
          <p className="text-white">الرجوع للأعلى</p>
          <img src={back} alt="back" className="w-6 mr-2" />
        </div>
      </div>
    </div>
  );
};
