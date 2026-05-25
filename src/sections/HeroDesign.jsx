import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cvLinks } from '../constants';


const HeroDesign = () => {
  const containerRef = useRef(null);

  // Fungsi Helper untuk Marquee Infinite
  const marquee = (selector, speed, direction = 1) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      const content = el.querySelector(".marquee-content");
      // Clone konten biar looping mulus
      const clone = content.cloneNode(true);
      el.appendChild(clone);

      const width = content.offsetWidth;

      gsap.to(el, {
        x: direction === 1 ? -width : 0, // Kiri atau Kanan
        duration: width / speed,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % width), // Logic looping seamless
        },
      });
    });
  };

  useGSAP(
    () => {
      // Jalankan Marquee: Selector, Speed, Direction (1 = Left, -1 = Right)
      marquee(".marquee-row-1", 50, 1);
      marquee(".marquee-row-2", 50, -1); // Arah berlawanan
      marquee(".marquee-row-3", 50, 1);

      // Animasi Entrance
      gsap.from(".marquee-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center bg-white text-black overflow-hidden"
    >
      {/* Dekorasi Gradient Mesh Abstrak */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[100px] mix-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-yellow-400/30 rounded-full blur-[100px] mix-blend-multiply" />

      <div className="marquee-container flex flex-col gap-4 md:gap-8 rotate-[-5deg] scale-110">
        {/* ROW 1 */}
        <div className="marquee-row-1 flex whitespace-nowrap overflow-hidden">
          <div className="marquee-content flex gap-8 px-4">
            <span className="text-[80px] md:text-[120px] font-black uppercase leading-none tracking-tighter text-transparent stroke-text hover:text-black transition-colors duration-300">
              Graphic Design • UI/UX • Branding •
            </span>
          </div>
        </div>

        {/* ROW 2 (Solid Black) */}
        <div className="marquee-row-2 flex whitespace-nowrap overflow-hidden">
          <div className="marquee-content flex gap-8 px-4">
            <span className="text-[80px] md:text-[120px] font-black uppercase leading-none tracking-tighter text-black">
              Visual Identity • Illustration • 3D Art •
            </span>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="marquee-row-3 flex whitespace-nowrap overflow-hidden">
          <div className="marquee-content flex gap-8 px-4">
            <span className="text-[80px] md:text-[120px] font-black uppercase leading-none tracking-tighter text-transparent stroke-text hover:text-[#915eff] transition-colors duration-300">
              Motion • Typography • Layout • Creative •
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <a
        href={cvLinks.design}
        download
        className="absolute bottom-10 right-10 flex items-center gap-4 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer z-50 group"
      >
        <div className="bg-white text-black p-2 rounded-full">
          <Icon icon="ph:file-pdf-bold" className="size-5" />
        </div>
        <span className="font-bold pr-2">Download Resume</span>
      </a>
    </section>
  );
};

export default HeroDesign;
