import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `A developer with a designer's eye.
A communicator with a teacher's clarity.
A problem-solver who delivers results.`;

  const aboutText = `My passion lies at the intersection of technology, design, and communication.
With a background in Computer Science Education, I combine technical logic with human-centered thinking to turn complex ideas into intuitive digital experiences.
I’ve built full-stack applications, designed UI/UX systems in Figma, and led teams to win a 1st Place National Digital Innovation Competition.
Now, I’m looking to contribute in a role where I can blend development, design, and creative problem-solving to build impactful, user-focused products.`;
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
        subTitle={"My Background & Philosophy"}
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
        {/* Bungkus AnimatedTextLines dan Tombol dalam div 
          agar rapi di mobile dan desktop
        */}
        <div className="w-full flex flex-col items-start gap-8">
          <AnimatedTextLines text={aboutText} className={"w-full text-2xl"} />

          {/* === TAMBAHKAN TOMBOL INI DI BAWAH TEKS === */}
          {/* 'w-full sm:w-auto' membuatnya full-width di mobile, dan auto di desktop */}
          <a
            href="/cv/cv-general.pdf"
            download="Nugraha_Adiputra_CV.pdf"
            className="w-full sm:w-auto px-6 py-3 mt-4 text-lg font-bold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-all text-center"
          >
            Download My CV
          </a>
          {/* === AKHIR BLOK TOMBOL === */}
        </div>
      </div>
    </section>
  );
};

export default About;
