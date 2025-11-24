import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero"; 
import Works from "../sections/Works";
import Contact from "../sections/Contact";


const DesignPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* Nanti di sini kamu bisa ganti jadi <HeroDesign /> jika sudah bikin komponennya */}
        <Hero /> 
      </div>
      
      {/* Panggil Works dengan filter 'design' dan matikan mode kartu */}
      <Works category="design" showCategories={false} />
      
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default DesignPage;