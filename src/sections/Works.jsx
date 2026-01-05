import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom"; 
import ProjectModal from "../components/ProjectModal"; // 👈 Import Modal Baru

const Works = ({ category = "all", showCategories = false }) => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // --- STATE MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fungsi Buka Modal
  const openModal = (e, project) => {
    e.preventDefault(); // Mencegah link utama jalan
    e.stopPropagation(); // Mencegah event bubbling ke parent
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Fungsi Tutup Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Tunggu animasi close selesai
  };

  const text = showCategories 
    ? "Choose a path to explore my specialized portfolios." 
    : "Featured projects that have been meticulously crafted with passion.";

  const title = showCategories ? "My Expertise" : "Selected Projects";

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  // Filter projects baru (Support Array Category)
  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter((project) => {
        if (Array.isArray(project.category)) {
          return project.category.includes(category);
        }
        return project.category === category;
      });

  useGSAP(() => {
    if (showCategories) return;
    moveX.current = gsap.quickTo(previewRef.current, "x", { duration: 1.5, ease: "power3.out" });
    moveY.current = gsap.quickTo(previewRef.current, "y", { duration: 2, ease: "power3.out" });
    gsap.from("#project", { y: 100, opacity: 0, delay: 0.5, duration: 1, stagger: 0.3, ease: "back.out", scrollTrigger: { trigger: "#project" } });
  }, [showCategories, category]); 

  const handleMouseEnter = (index) => {
    if (showCategories || window.innerWidth < 768) return;
    setCurrentIndex(index);
    const el = overlayRefs.current[index];
    if (el) {
        gsap.killTweensOf(el);
        gsap.fromTo(el, { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 0.15, ease: "power2.out" });
        gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = (index) => {
    if (showCategories || window.innerWidth < 768) return;
    setCurrentIndex(null);
    const el = overlayRefs.current[index];
    if (el) {
        gsap.killTweensOf(el);
        gsap.to(el, { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 0.2, ease: "power2.in" });
        gsap.to(previewRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseMove = (e) => {
    if (showCategories || window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    // Tambahkan pb-32 agar tidak mepet footer
    <section id="work" className="flex flex-col min-h-screen pt-10 pb-32">
      <AnimatedHeaderSection
        subTitle={showCategories ? "Select Role" : `Portfolio: ${category.toUpperCase()}`}
        title={title}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      {/* --- RENDER MODAL DISINI --- */}
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />

      {showCategories ? (
        // === MODE KARTU (Home) ===
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 mt-10 justify-center items-stretch min-h-[400px]">
          {/* Card Guru */}
          <Link to="/guru" className="flex-1 group relative border-2 border-black p-8 flex flex-col justify-end hover:bg-black hover:text-white transition-all duration-500 cursor-pointer min-h-[300px] rounded-xl">
             <div className="mb-auto"><Icon icon="ph:chalkboard-teacher-light" className="size-12 mb-4"/></div>
             <h3 className="text-3xl font-bold mb-2">Teacher<br/>Edutech</h3>
             <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">See educational projects, teaching modules, and teaching experience.</p>
             <div className="absolute top-6 right-6"><Icon icon="lucide:arrow-right" className="size-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500"/></div>
          </Link>
          {/* Card IT */}
          <Link to="/web-dev" className="flex-1 group relative border-2 border-black p-8 flex flex-col justify-end hover:bg-black hover:text-white transition-all duration-500 cursor-pointer min-h-[300px] rounded-xl">
             <div className="mb-auto"><Icon icon="ph:code-bold" className="size-12 mb-4"/></div>
             <h3 className="text-3xl font-bold mb-2">Web<br/>Developer</h3>
             <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">See website projects, applications, and coding explorations.</p>
             <div className="absolute top-6 right-6"><Icon icon="lucide:arrow-right" className="size-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500"/></div>
          </Link>
          {/* Card Design */}
          <Link to="/graphic-design" className="flex-1 group relative border-2 border-black p-8 flex flex-col justify-end hover:bg-black hover:text-white transition-all duration-500 cursor-pointer min-h-[300px] rounded-xl">
             <div className="mb-auto"><Icon icon="ph:paint-brush-broad" className="size-12 mb-4"/></div>
             <h3 className="text-3xl font-bold mb-2">Graphic<br/>Design</h3>
             <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">See creative works, poster designs, and visual art.</p>
             <div className="absolute top-6 right-6"><Icon icon="lucide:arrow-right" className="size-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500"/></div>
          </Link>
        </div>

      ) : ( 
        // === MODE LIST (Page Khusus) ===
        <div className="relative flex flex-col font-light mt-10" onMouseMove={handleMouseMove}>
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col gap-1 py-8 border-t border-black/10 cursor-pointer group md:gap-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              id="project"
            >
              <div ref={(el) => { overlayRefs.current[index] = el; }} className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path" />
              
              <div className="flex justify-between items-start md:items-center px-4 md:px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                <h2 className="lg:text-[40px] text-[28px] font-medium leading-none">{project.name}</h2>
                
                {/* --- TOMBOL INFO & PANAH --- */}
                <div className="flex items-center gap-4">
                    {/* Tombol Info (Hanya muncul jika ada modalConfig) */}
                    {project.modalConfig && (
                        <button 
                            onClick={(e) => openModal(e, project)}
                            className="z-20 p-2 rounded-full border border-black/20 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 md:group-hover:border-white/50 md:group-hover:text-white md:group-hover:hover:bg-white md:group-hover:hover:text-black"
                            title="View Details"
                        >
                            <Icon icon="lucide:info" className="size-5 md:size-6" />
                        </button>
                    )}
                    <Icon icon="lucide:arrow-up-right" className="md:size-8 size-6" />
                </div>
              </div>

              <div className="flex px-4 md:px-10 mt-2 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                {project.frameworks && project.frameworks.map((fw, i) => (
                  <p key={i} className="text-black/60 transition-colors duration-500 md:group-hover:text-white/80">#{fw.name}</p>
                ))}
              </div>

              <div className="relative flex items-center justify-center px-4 md:hidden h-[250px] mt-4">
                <img src={project.image} alt={project.name} className="object-cover w-full h-full rounded-md brightness-75" />
              </div>
            </a>
          ))}

          <div ref={previewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-4 border-black pointer-events-none w-[400px] h-[250px] md:block hidden opacity-0 bg-white">
             {currentIndex !== null && filteredProjects[currentIndex] && (
               <img src={filteredProjects[currentIndex].image} alt="preview" className="object-cover w-full h-full" />
             )}
          </div>
          
          <div className="w-full flex justify-center mt-20">
            <Link to="/" className="text-lg underline hover:text-gray-500">← Back to All Categories</Link>
          </div>
        </div>
      )} 
    </section>
  );
};

export default Works;