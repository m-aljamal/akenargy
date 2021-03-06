import React from "react";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { ImagesSection } from "./ImagesSection";
import { Feedback } from "./Feedback";
import { SiteMap } from "./SiteMap";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ImagesSection />
      <Feedback />
      <SiteMap />
      <Footer />
    </div>
  );
};
