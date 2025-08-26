import React from "react";
import { ReactTyped } from "react-typed";
import oldPc from "/images/old-pc.png"; // gambar komputer jadul (transparan)

const Terminal = () => {
  return (
    <div className="relative w-[700px] mx-auto ">
      {/* Gambar komputer */}
      <img src={oldPc} alt="Retro PC" className="w-full" />

      {/* Terminal tepat di layar */}
      <div
        className="
          absolute 
          top-[7%] left-[24%] 
          w-[40%] h-[41%]
          bg-black text-green-400 font-mono
          p-4 rounded-sm
          overflow-hidden
          
          flex items-center justify-center
          text-[24px]
        "
      >
        <span className="mr-2">&gt;</span>
        <ReactTyped
          strings={[
            "<404> Not Found Yet...",
            "Searching Skills...",
            "Loading Portfolio...",
            "Scroll To See More...",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          showCursor
          cursorChar="|"
        />
      </div>
    </div>
  );
};

export default Terminal;
