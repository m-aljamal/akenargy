import React from "react";
import sitelogo from "../../../icons/sitelogo.svg";

export const SiteMapLinks = () => {
  return (
    <div className="mt-20 text-white flex justify-between pb-8">
      <div className="flex">
        <img src={sitelogo} alt="logo" className="w-20 ml-3" />
        <div>
          <h2 className="font-bold text-xl">شركة الطاقة والكهرباء</h2>
          <p className="mt-3 text-lg">
            AK energy هي شركة رائدة في مشاريع
            <br />
            الطاقة من الدرجة الأولى بين سوريا وتركيا.
            <br />
            منذ تأسيسها وحتى الأن, ضاعفت الشركة
            <br />
            نفوذها على أساس سنوي, مع تضخم أعداد
            <br />
            موظفيها وفقاً لذالك.
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl">روابط هامة</h2>
        <div className="text-lg mt-3">
          <p>عن الشركة</p>
          <p className="mt-7">تواصل معنا</p>
          <p className="mt-7"> أخبارنا</p>
        </div>
      </div>
      <div className="text-lg mt-10">
        <p>الطاقة المتجددة</p>
        <p className="mt-7">الوظائف</p>
      </div>
      <div>
        <h2 className="font-bold text-xl">خدماتنا</h2>
        <div className="text-lg mt-3">
          <p>اشتراك جديد</p>
          <p className="mt-7">فحص عداد</p>
          <p className="mt-7">تعبئة البطاقة</p>
        </div>
      </div>
    </div>
  );
};
