import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero"; 
import Works from "../sections/Works";
import Contact from "../sections/Contact";
import HeroGuru from "../sections/HeroGuru";

const GuruPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* Nanti di sini kamu bisa ganti jadi <HeroGuru /> jika sudah bikin komponennya */}
        <HeroGuru />
      </div>
      
      {/* Panggil Works dengan filter 'guru' dan matikan mode kartu */}
      <Works category="guru" showCategories={false} />
      
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default GuruPage;