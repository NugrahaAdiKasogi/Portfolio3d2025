import React from "react";
import NavbarPage from "../components/NavbarPage";
import Works from "../sections/Works";
import Contact from "../sections/Contact";
import { Database, FileText } from 'lucide-react';
import { cvLinks } from "../constants"; 

const DataPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavbarPage />
        
        {/* HERO SECTION KHUSUS DATA */}
        <section className="max-w-7xl mx-auto pt-32 pb-16 px-6 sm:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 min-h-[70vh]">
          <div className="flex-1">
            <span className="px-3 py-1 bg-[#915EFF]/10 text-[#915EFF] border border-[#915EFF]/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              Data Engineering & Analytics
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Building Pipelines to Uncover <span className="text-[#915EFF]">Educational Insights</span>
            </h1>
            <p className="text-secondary mt-6 text-lg leading-relaxed max-w-2xl">
              Mengkombinasikan pengalaman empiris di ruang kelas dengan keahlian teknis arsitektur data. Saya merancang pipeline ETL, membangun data warehouse berskema bintang, dan menyajikannya ke dalam dashboard interaktif level enterprise.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href={cvLinks.data} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4ee8] text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-[#915EFF]/20"
              >
                <FileText size={18} /> Download Data CV
              </a>
            </div>
          </div>
          
          {/* ORNAMEN VISUAL DATA */}
          <div className="flex-1 w-full max-w-[400px] aspect-square bg-tertiary border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#915EFF]/20 to-transparent"></div>
            <Database size={120} className="text-[#915EFF] animate-pulse relative z-10" />
          </div>
        </section>
      </div>
      
      {/* SECTION 2: PROJECTS (Memanggil komponen Works yang sudah terhubung ke Modal) */}
      <Works category="data" showCategories={false} />
      
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default DataPage;