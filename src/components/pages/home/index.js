import React from "react";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { ImagesSection } from "./ImagesSection";
export const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ImagesSection />
    </div>
  );
};
