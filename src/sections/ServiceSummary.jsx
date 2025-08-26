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
      gsap.to("#error-text", {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: "#error-text",
          start: "top+=900 bottom",
          end: "+=800", // range scroll sejauh 1000px
          scrub: true,
          pin: true,
        },
      });

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
      className="min-h-screen mt-[100px] mb-[300px] overflow-hidden font-light leading-snug text-center contact-text-responsive"
    >
      
      {/* Error 404 */}
      <div id="error-text">
        <Terminal />
      </div>

      {/* Skills muncul setelah scroll */}
      <div id="skills-container" className=" space-y-12 text-8xl">
        <div id="title-service-1" className="skill-text">
          <p>Graphic Design</p>
        </div>
        <div
          id="title-service-2"
          className="skill-text flex items-center justify-center gap-3"
        >
          <p className="font-normal">Development</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Deployment</p>
        </div>
        <div
          id="title-service-3"
          className="skill-text flex items-center justify-center gap-3"
        >
          <p>APIs</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="italic">Frontends</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>UI/UX</p>
        </div>
        <div id="title-service-4" className="skill-text">
          <p>Game Development</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
