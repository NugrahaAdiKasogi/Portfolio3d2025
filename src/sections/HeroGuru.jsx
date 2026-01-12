import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { styles } from "../styles";
import { Icon } from "@iconify/react/dist/iconify.js";
// Import gambar dokumentasi kamu disini
// Sementara saya pakai placeholder dari assets yang ada
// --- GANTI BAGIAN IMPORT GAMBAR DENGAN INI ---
const teaching1 = "/assets/teaching1.jpeg"; // Ganti dengan foto dokumentasi mengajarmu nanti
const teaching2 = "/assets/teaching2.jpeg";
const teaching3 = "/assets/teaching3.jpeg";
const teaching4 = "/assets/teaching4.jpeg";

const HeroGuru = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Animasi Teks Masuk
      tl.from(".hero-text-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // 2. Animasi Grid Gambar Masuk (Pop Up)
      tl.from(
        ".bento-item",
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)", // Efek membal sedikit
        },
        "-=0.5"
      ); // Mulai lebih awal (overlap dengan teks)
    },
    { scope: containerRef }
  );

  // 3. Efek Parallax Mouse Move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
    const yPos = (clientY / window.innerHeight - 0.5) * 2;

    // Gerakkan gambar dengan kecepatan berbeda agar terasa 3D
    imagesRef.current.forEach((img, i) => {
      if (!img) return;
      const speed = (i + 1) * 10; // Speed dinamis
      gsap.to(img, {
        x: xPos * speed,
        y: yPos * speed,
        duration: 1,
        ease: "power2.out",
      });
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen mx-auto flex items-center bg-primary overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient Halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#1a1a2e] to-primary opacity-50 z-0" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 w-full`}
      >
        {/* --- BAGIAN KIRI: TEXT --- */}
        <div className="flex-1 space-y-6 text-center lg:text-left mt-10 lg:mt-0">
          <div className="overflow-hidden">
            <h1 className={`${styles.heroHeadText} text-white hero-text-item`}>
              Teaching with <br />
              <span className="text-[#ffcd35]">Heart & Technology</span>
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 hero-text-item max-w-lg mx-auto lg:mx-0`}
            >
              Integrating adaptive teaching methods with modern technology to
              create meaningful learning experiences.
            </p>
          </div>

          <div className="hero-text-item pt-4">
            {/* --- AREA TOMBOL --- */}
            <div className="hero-text-item pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* 1. Tombol Utama (Existing) */}
              <button
                onClick={() =>
                  document
                    .getElementById("work")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-[#915eff] hover:text-white transition-all duration-300 shadow-lg shadow-[#915eff]/20 flex items-center gap-2"
              >
                See My Work
                <Icon icon="lucide:arrow-right-circle" className="size-5" />
              </button>

              {/* 2. Tombol Download CV (Baru) */}
              <a
                href="/cv/cv-guru.pdf" // Ganti sesuai lokasi file kamu
                download="CV_Nugraha_Guru_2026.pdf" // Nama file saat didownload user
                className="group"
              >
                <button className="border-2 border-white/30 text-black font-medium py-3 px-8 rounded-full hover:bg-[#915eff] hover:text-primary transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                  <Icon
                    icon="lucide:download"
                    className="size-5 group-hover:animate-bounce"
                  />
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* --- BAGIAN KANAN: BENTO GRID DOKUMENTASI --- */}
        <div className="flex-1 w-full max-w-[800px] h-[600px] relative p-4">
          {/* Grid Layout Container */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
            {/* Item 1: Besar Kiri Atas (Foto Utama) */}
            <div
              ref={(el) => (imagesRef.current[0] = el)}
              className="bento-item col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group"
            >
              <img
                src={teaching1}
                alt="Teaching 1"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>

            {/* Item 2: Kanan Atas (Landscape Kecil) */}
            <div
              ref={(el) => (imagesRef.current[1] = el)}
              className="bento-item col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-xl border border-white/10 mt-8 group"
            >
              <img
                src={teaching2}
                alt="Teaching 2"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Item 3: Kanan Tengah (Portrait) */}
            <div
              ref={(el) => (imagesRef.current[2] = el)}
              className="bento-item col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group"
            >
              <img
                src={teaching3}
                alt="Teaching 3"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Item 4: Bawah Kiri (Landscape) */}
            <div
              ref={(el) => (imagesRef.current[3] = el)}
              className="bento-item col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group"
            >
              <img
                src={teaching4}
                alt="Teaching 4"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Dekorasi Tambahan (Blur Glow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ffcd35] blur-[100px] opacity-20 -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroGuru;