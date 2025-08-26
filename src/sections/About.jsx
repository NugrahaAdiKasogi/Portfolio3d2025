import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Fresh graduate with a passion for learning
    Exploring design, development, and game projects
    Always curious to build and experiment`;
  const aboutText = `As a computer science education student, I enjoy combining creativity and technology.
During my studies, I explored graphic design, front-end development, and even simple game projects—each one teaching me new ways to solve problems and tell stories.

Beyond classes:
📚 Active in student organizations, leading projects in multimedia and communication
🏆 National-level achievements in digital innovation and programming competitions
🎨 Designing visuals and content for events and branding
💻 Experimenting with React, Unity, and design tools to sharpen my skills

I may just be starting out, but I bring enthusiasm, adaptability, and a strong will to grow in every opportunity I take.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Learning with passion, Growing with purpose"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-lg font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.png"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-2xl"} />
      </div>
    </section>
  );
};

export default About;
