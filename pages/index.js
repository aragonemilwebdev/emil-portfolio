import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Skills />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
