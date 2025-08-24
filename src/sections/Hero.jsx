import { Canvas } from "@react-three/fiber";
import { GraduationHat } from "../components/GraduationHat";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Error404FreshGrad"}
        title={"Nugraha adi"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 15 }}>
          {/* Kontrol */}
          <OrbitControls enablePan={true} />

          {/* Ambient Light */}
          <ambientLight intensity={0.7} />

          {/* Directional Light untuk shadow */}
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* Light tambahan biar lebih bercahaya */}
          <pointLight position={[-5, 5, -5]} intensity={0.8} />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={0.5}
            intensity={1}
            castShadow
          />

          {/* Model kamu */}
          <Float speed={0.5}>
            <GraduationHat
              scale={isMobile ? 0.7 : 1}
              castShadow
              receiveShadow
            />
          </Float>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
