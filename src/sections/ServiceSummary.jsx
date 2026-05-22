import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Terminal from "../components/Terminal";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#skills-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".skill-text", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
        });
    },
    { scope: container }
  );


  return (
    <section
      ref={container}
      className="min-h-screen mt-[100px] mb-[200px] font-light leading-snug text-center"
      style={{ overflowX: "hidden", overflowY: "visible" }}
    >
      <div
        id="skills-container"
        className="space-y-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-64 px-4 sm:px-8"
        style={{ wordBreak: "break-word", whiteSpace: "normal" }}
      >
        <div className="skill-text">
          <p>Graphic Design</p>
        </div>
        <div className="skill-text flex flex-wrap items-center justify-center gap-3">
          <p className="font-normal">Informatics</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Education</p>
        </div>
        <div className="skill-text flex flex-wrap items-center justify-center gap-3">
          <p>Data Engineer</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="italic">Frontends</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>UI/UX</p>
        </div>
        <div className="skill-text">
          <p>Game Development</p>
        </div>
      </div>
    </section>

  );
};

export default ServiceSummary;
