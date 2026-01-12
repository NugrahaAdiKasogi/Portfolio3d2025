import React, { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation"; // Install dulu: npm i react-type-animation

const HeroIT = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animasi Pop Up Terminal
      gsap.from(".terminal-window", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      // Animasi Background Grid bergerak
      gsap.to(".bg-grid", {
        backgroundPosition: "100px 100px",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-[#0d1117] overflow-hidden"
    >
      {/* 1. Tech Grid Background */}
      <div
        className="absolute inset-0 bg-grid opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#30363d 1px, transparent 1px), linear-gradient(90deg, #30363d 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

      {/* 2. Terminal Window */}
      <div className="terminal-window relative w-[90%] max-w-3xl bg-[#0d1117]/90 border border-[#30363d] rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Header Terminal */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs text-gray-500 font-mono">
            portfolio-v1.tsx
          </div>
          <div className="w-10"></div>
        </div>

        {/* Body Terminal */}
        <div className="p-6 md:p-10 font-mono text-sm md:text-base h-[400px] text-gray-300">
          <div className="mb-4">
            <span className="text-green-400">➜</span>{" "}
            <span className="text-blue-400">~</span>{" "}
            <span className="text-purple-400">whoami</span>
          </div>
          <div className="mb-6 text-white">
            <p>Name: Nugraha Adikasogi</p>
            <p>Role: Frontend Engineer & Creative Developer</p>
            <p>Location: Indonesia</p>
          </div>

          <div className="mb-4">
            <span className="text-green-400">➜</span>{" "}
            <span className="text-blue-400">~</span>{" "}
            <span className="text-purple-400">npm run start-skills</span>
          </div>

          {/* Typing Effect */}
          <div className="text-green-400">
            <span>{">"} Loading modules...</span>
            <br />
            <span>{">"} </span>
            <TypeAnimation
              sequence={[
                "Installing React.js...",
                1000,
                "Installing Next.js 14...",
                1000,
                "Installing Tailwind CSS...",
                1000,
                "Installing Three.js / R3F...",
                1000,
                "Dependencies installed successfully! 🚀",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-white"
            />
          </div>

          {/* Cursor Blinking */}
          <div className="mt-4 animate-pulse">
            <span className="text-green-400">➜</span>{" "}
            <span className="inline-block w-2 h-4 bg-gray-500 align-middle ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIT;
