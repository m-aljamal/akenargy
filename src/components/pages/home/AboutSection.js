import React from "react";
import { boxes } from "../../constant/aboutBoxes";
import { Box } from "./Box";
import { SetupRequest } from "./SetupRequest";

export const AboutSection = () => {
  return (
    <div className="bg-black py-10">
      <div className="container  flex flex-col-reverse md:flex-row	">
        <div className="text-white xl:w-3/4 lg:w-3/5 md:w-2/4 md:ml-16 md:-mt-0 -mt-20 ">
          <h3 className="text-red">شركة الطاقة والكهرباء</h3>
          <h2 className="text-2xl font-bold mt-3">رؤيا الشركة</h2>
          <p className="mt-2 text-justify tracking-wide leading-7">
            نحن نؤمن بأهمية التميز في قطاع الكهرباء، حيث أن شركة الطاقة
            والكهرباء"AK energy" هي الشركة الأولى في المنطقة التي تميزت بامتلاك
            جميع الرخص للقيام بتوليد الطاقة الكهربائية والنقل والتوزيع والتزويد
            إلى المشتركين في مناطق الشمال السوري وذلك وفقاً للترخيص الممنوح لها
            من قبل الحكومة التركية والمجالس المحلية، مما يشكل تحديًا ويخلق فرصًا
            لنا كفريق للإبداع والتطوير وبذل المزيد من الجهد للوصول بالشركة إلى
            قمم النجاح ومستويات التميز في الأداء والإنتاج.
            <br />
            بدأت الشركة أعمالها في 1 يونيو 2017 الذي صدر طبقاً لقانون تنظيم
            وتخصيص قطاع الكهرباء وفقًا لترخيص رقم 9123455 الممنوح من غرفة
            الصناعة والتجارة في ولاية غازي عنتاب التركية.
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10  gap-4 mt-4">
            {boxes.map((b) => (
              <Box data={b} />
            ))}
          </div>
        </div>

        <div className="xl:w-1/4 lg:w-2/5 md:w-2/4 transform -translate-y-32">
          <SetupRequest />
        </div>
      </div>
    </div>
  );
};
