import React from "react";
import NavbarPage from "../components/NavbarPage";
import HeroIT from "../sections/HeroIT";
import Works from "../sections/Works";
import Contact from "../sections/Contact";

const WebDevPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavbarPage />
        {/* Nanti di sini kamu bisa ganti jadi <HeroWebDev /> jika sudah bikin komponennya */}
        <HeroIT /> 
      </div>
      
      {/* Panggil Works dengan filter 'webdev' dan matikan mode kartu */}
      <Works category="it" showCategories={false} />
      
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default WebDevPage;