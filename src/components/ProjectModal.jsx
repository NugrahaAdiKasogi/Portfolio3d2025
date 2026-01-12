import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useLenis } from "lenis/react"; // 1. IMPORT INI

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  
  // 2. AMBIL INSTANCE LENIS
  const lenis = useLenis(); 

  // Animasi GSAP & Logic Scroll
  useEffect(() => {
    if (isOpen) {
      // STOP Lenis biar belakang gak gerak
      if (lenis) lenis.stop(); 
      
      gsap.set(overlayRef.current, { display: "flex" }); 
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      
      gsap.fromTo(
        modalRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" }
      );
      document.body.style.overflow = "hidden";
    } else {
      // RESUME Lenis biar bisa scroll lagi
      if (lenis) lenis.start();

      gsap.to(overlayRef.current, { 
        opacity: 0, 
        duration: 0.3, 
        onComplete: () => { gsap.set(overlayRef.current, { display: "none" }); }
      });
      
      gsap.to(modalRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        onComplete: () => { document.body.style.overflow = "auto"; }
      });
    }
  }, [isOpen, lenis]); // Tambahkan lenis ke dependency array

  if (!project) return null;

  const { modalConfig, name, frameworks } = project; 

  const renderContent = () => {
    switch (modalConfig.type) {
      case "video":
        return (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg bg-black">
            <iframe
              src={`${modalConfig.embedUrl}?autoplay=1&mute=0`}
              title={name}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "slide":
        return (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg bg-white">
            <iframe
              src={modalConfig.embedUrl}
              title={name}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "pdf":
      case "web":
      default:
        return (
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 relative group bg-zinc-900">
             <img 
               src={project.bgImage || project.image} 
               alt={name} 
               className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          </div>
        );
    }
  };

  return (
    <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[9999] bg-black/60 hidden backdrop-blur-sm items-center justify-center p-4 md:p-8"
        onClick={onClose}
    >
      <div 
        ref={modalRef}
        // Tambahkan 'overscroll-contain' biar scroll mentok gak nular ke body
        // Tambahkan 'data-lenis-prevent' sebagai pengaman tambahan
        className="bg-[#101010] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl relative shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent 
      >
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-red-500/80 text-white rounded-full transition-all duration-300 backdrop-blur-md shadow-lg border border-white/10 group"
            title="Close Modal"
        >
            <Icon icon="lucide:x" className="size-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="p-6 md:p-10">
          {renderContent()}

          {/* Header & Tags */}
          <div className="flex flex-col gap-3 mb-6">
             <h2 className="text-3xl md:text-4xl font-bold text-white">{name}</h2>
             
             <div className="flex flex-wrap gap-2">
                {frameworks && frameworks.map((fw, i) => (
                    <span key={i} className="text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        #{fw.name}
                    </span>
                ))}
             </div>
          </div>

          {/* Deskripsi & Highlights */}
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 leading-relaxed">
             <div className="md:col-span-2 space-y-4">
                 <h3 className="text-white font-semibold text-lg border-b border-white/10 pb-2 mb-2">About Project</h3>
                 <p>{modalConfig.description}</p>
                 {modalConfig.type === "coming_soon" && (
                     <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 p-4 rounded-lg mt-4 flex items-center gap-3">
                         <Icon icon="lucide:construction" className="size-6" />
                         <span>Project is currently under development. Stay tuned!</span>
                     </div>
                 )}
             </div>
             
             <div className="space-y-4">
                {modalConfig.techStack && (
                    <>
                    <h3 className="text-white font-semibold text-lg border-b border-white/10 pb-2 mb-2">Highlights</h3>
                    <ul className="space-y-2">
                        {modalConfig.techStack.map((tech, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                                <Icon icon="lucide:check-circle" className="text-green-500 size-4" /> {tech}
                            </li>
                        ))}
                    </ul>
                    </>
                )}
             </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
            {modalConfig.type !== "coming_soon" && (
                <>
                    <a href={modalConfig.mainButtonLink} target="_blank" rel="noreferrer" className="flex-1 md:flex-none">
                        <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-white/20">
                            {modalConfig.type === "pdf" && <Icon icon="lucide:download" />}
                            {modalConfig.type === "video" && <Icon icon="lucide:play-circle" />}
                            {modalConfig.type === "web" && <Icon icon="lucide:external-link" />}
                            {modalConfig.mainButtonText}
                        </button>
                    </a>

                    {modalConfig.secondaryButtonText && (
                        <a href={modalConfig.secondaryButtonLink} target="_blank" rel="noreferrer" className="flex-1 md:flex-none">
                            <button className="w-full md:w-auto px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Icon icon={modalConfig.type === 'web' ? "lucide:file-text" : "lucide:folder-open"} />
                                {modalConfig.secondaryButtonText}
                            </button>
                        </a>
                    )}
                </>
            )}

            <button 
                onClick={onClose}
                className="ml-auto px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            >
                Close
                <Icon icon="lucide:x-circle" className="size-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;