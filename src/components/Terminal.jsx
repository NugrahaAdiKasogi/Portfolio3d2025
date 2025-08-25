import React from "react";
import { ReactTyped } from "react-typed";

const Terminal = () => {
  return (
    <div className="bg-black text-green-400 font-mono p-10 rounded-lg shadow-lg w-[80%] max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <div className="text-2xl">
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
