import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import { GraduationHat } from '../components/GraduationHat';
import { useMediaQuery } from 'react-responsive';
import { Typewriter } from 'react-simple-typewriter';
import { Suspense } from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import { EffectComposer, Glitch } from '@react-three/postprocessing';

function OverlayText() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <Html fullscreen>
      <div
        style={{
          position: 'fixed',
          bottom: isMobile ? '10vh' : 0,
          width: '100vw',
          height: isMobile ? '30vh' : '40vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '0 1rem' : '0',
          pointerEvents: 'none',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: '#39FF14',
            fontSize: isMobile ? '2rem' : '5rem',
            fontWeight: 'bold',
            lineHeight: isMobile ? '1.2' : '1.4',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          <Typewriter
            words={[
              'EdTech Development',
              'Frontend Developer',
              'Graphic Designer',
              'Data Practitioner',
              'Scroll To See More...',
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={isMobile ? 60 : 100}
            deleteSpeed={isMobile ? 30 : 50}
          />
        </h1>
      </div>
    </Html>
  );
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const text = `A Frontend Developer with a Designer's Eye & Data-Driven Mind.Educator at heart. Problem-solver by nature.`;

  return (
    <section
      id="home"
      className="flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <AnimatedHeaderSection
        subTitle={'STATUS: 200 OK. Ready to Deploy.'}
        title={'Nugraha'}
        text={text}
        textColor={'text-black'}
      />

      {/* === BLOK TOMBOL BARU === */}
      {/* Hapus transform dan -translate-y, ganti dengan mt-6 agar ada jarak dengan teks atas */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start justify-start gap-4 px-8 sm:px-24 pb-8 sm:pb-12 mt-6">
        <a
          href="/cv/cv-general.pdf" 
          download="Nugraha_Adiputra_CV.pdf"
          className="w-full sm:w-auto px-6 py-3 font-bold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-all text-center"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto px-6 py-3 font-bold text-white bg-black rounded-lg shadow-lg hover:bg-gray-800 transition-all text-center"
        >
          Contact Me
        </a>
      </div>
      {/* === AKHIR BLOK TOMBOL === */}

      <figure className="absolute inset-0 -z-50 w-full h-screen">
        <Canvas
          shadows
          camera={{
            position: isMobile ? [0, 4, 8] : [0, 6, 10],
            fov: isMobile ? 30 : 20,
          }}
        >
          <OrbitControls
            enablePan
            minDistance={isMobile ? 4 : 6}
            maxDistance={isMobile ? 10 : 15}
          />

          <ambientLight intensity={isMobile ? 0.7 : 0.9} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
          <pointLight position={[-5, 5, -5]} intensity={0.9} />

          {/* Model 3D */}
          <Suspense fallback={null}>
            <Float
              speed={0.5}
              rotationIntensity={isMobile ? 0.3 : 0.6}
              floatIntensity={isMobile ? 0.8 : 1.2}
            >
              <GraduationHat
                scale={isMobile ? 0.4 : 1}
                position={isMobile ? [0, 0.7, 0] : [0, -0.3, 0]}
                castShadow
                receiveShadow
              />
              <OverlayText />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
