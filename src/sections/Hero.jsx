import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import { GraduationHat } from "../components/GraduationHat";
import { useMediaQuery } from "react-responsive";
import { Typewriter } from "react-simple-typewriter";
import { useRef, useEffect, Suspense } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { EffectComposer, Glitch } from "@react-three/postprocessing";

function OverlayText() {
  return (
    <Html fullscreen>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100vw",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none", // biar gak ganggu klik OrbitControls
        }}
      >
        <h1
          style={{
            color: "#39FF14",
            fontSize: "5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <Typewriter
            words={["Error404FreshGrad"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </h1>
      </div>
    </Html>
  );
}

// Hero Section
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `🌍 Just graduated, always learning
✨ Designing with curiosity & clarity
🔥 Creating results that inspire growth`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Fresh Graduate Loading…"}
        title={"Nugraha adi"}
        text={text}
        textColor={"text-black"}
      />

      <figure className="absolute inset-0 -z-50 w-screen h-screen">
        <Canvas shadows camera={{ position: [0, 6, 10], fov: 20 }}>
          <OrbitControls enablePan />
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
          <pointLight position={[-5, 5, -5]} intensity={0.9} />

          {/* Model 3D */}
          <Suspense fallback={null}>
            <Float speed={0.5}>
              <GraduationHat scale={isMobile ? 0.7 : 1} castShadow receiveShadow />
              <OverlayText />
            </Float>
          </Suspense>
          {/* Post Processing Effects (selalu taruh terakhir) */}
          <EffectComposer>
            <Glitch
              delay={[1.5, 3.5]}
              duration={[0.3, 1.0]}
              strength={[0.3, 1.0]}
              ratio={0.9}
            />
          </EffectComposer>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
