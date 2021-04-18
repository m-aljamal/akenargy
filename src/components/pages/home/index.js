import React from "react";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { ImagesSection } from "./ImagesSection";
import { Feedback } from "./Feedback";
export const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ImagesSection />
      <Feedback />
      <div className='mt-5 bg-red'>f</div>
    </div>
  );
};
