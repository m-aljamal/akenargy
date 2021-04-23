import React, { useState } from "react";
import electric from "../../../icons/electric.svg";
import { Input } from "./Input";
import { Button } from "../../shared/Button";
export const SetupRequest = () => {
  return (
    <div className="">
      <div className="flex gr text-white text-center justify-around px-4 py-3 rounded-t-lg">
        <div>
          <h2 className="font-bold text-2xl">طلب تركيب</h2>
          <p>عداد كهربائي جديد</p>
        </div>
        <div className="bg-white w-0.5 h-10 mt-2"></div>
        <img src={electric} alt="electric" className="w-14" />
      </div>
      <div className="bg-white">
        <form action="https://formspree.io/f/xknkgebk" method="POST">
          <Input text="الاسم والكنية" name="name" />
          <Input text="رقم الهاتف" name="phoneNumber" />
          <Input text="المنطقة" name="city" />
          <Input text="العنوان بالتفصيل" name="address" />
          <div className="px-8 mb-4">
            <textarea
              type="text"
              name="notes"
              placeholder="ملاحظة"
              className=" w-full focus:outline-none p-4 border-b-2 border-gray border-opacity-70"
            />
          </div>
          <div className="px-8">
            <Button text="ارسل الطلب" otherStyles="w-full mb-8" />
          </div>
        </form>
      </div>
    </div>
  );
};
