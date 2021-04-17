import React from "react";
import electric from "../../../icons/electric.svg";
export const SetupRequest = () => {
  return (
    <div className="">
      <div className="flex bg-red text-white text-center justify-around px-4 py-3 rounded-t-lg">
        <div>
          <h2 className="font-bold text-2xl">طلب تركيب</h2>
          <p>عداد كهربائي جديد</p>
        </div>
        <div className="bg-white w-0.5 h-10 mt-2"></div>
        <img src={electric} alt="electric" className="w-14" />
      </div>
      <div className="bg-white">
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
        <p>ffdfd</p>
      </div>
    </div>
  );
};
