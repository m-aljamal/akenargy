import React from "react";

export const ImagesSection = () => {
  return (
    <div className="bg-gray text-white text-center py-10 relative">
      <p className="text-lg">ما الجديد...؟</p>
      <h2 className="font-bold text-2xl">
        ألبوم صور خدماتنا<span className="text-red">.</span>
      </h2>
      <div className="absolute w-16 h-24 top-6 right  border-2 border-red"></div>
    </div>
  );
};
