// index.js
export const servicesData = [
  {
    title: "Frontend Development & UI/UX",
    description:
      "My core passion. I specialize in building responsive, user-centric web applications. I bridge the crucial gap between high-fidelity UI/UX design in Figma and clean, functional code in React and Next.js.",
    items: [
      {
        title: "Frontend Development",
        description: "(React.js, Next.js, Tailwind, Responsive Design)",
      },
      {
        title: "UI/UX Design",
        description: "(Figma Prototyping, Wireframing, User Flow Analysis)",
      },
      {
        title: "API & Backend Integration",
        description: "(REST APIs, Supabase/Firebase, Auth, Data Fetching)",
      },
    ],
  },
  {
    title: "Informatics & Education",
    description:
      "My degree in Computer Science Education taught me how to communicate complex technical concepts with clarity. I have practical experience delivering 20+ class periods on algorithms and building full-scale lesson plans.",
    items: [
      {
        title: "Technical Communication",
        description: "(Breaking down complex code for diverse audiences)",
      },
      {
        title: "Curriculum & Media Design",
        description: "(Designing lesson plans, modules, and LKPD)",
      },
      {
        title: "EdTech Development",
        description: "(Built an LMS prototype in Next.js & an educational game in Unity)",
      },
    ],
  },
  {
    title: "Visual & Graphic Design",
    description:
      "I translate complex ideas into clear, engaging visuals. My experience ranges from creating complete brand identities for organizations to producing 25+ social media assets during my internship.",
    items: [
      {
        title: "Branding & Identity",
        description: "(Logo Design, Merchandise, Visual Guidelines)",
      },
      {
        title: "Digital Content Creation",
        description: "(Social Media Assets, Presentation Decks, Posters)",
      },
      {
        title: "Primary Tools",
        description: "(Figma, Adobe Photoshop, Illustrator, Canva)",
      },
    ],
  },
  {
    title: "Game Development",
    description:
      "I have hands-on experience developing educational games from concept to deployment. My work, 'Kitchen Code,' was tested in a classroom and improved student engagement by +25%.",
    items: [
      {
        title: "Primary Tool",
        description: "(Unity, C#)",
      },
      {
        title: "Core Loops & Logic",
        description: "(Gameplay Mechanics, Scoring Systems, UI Integration)",
      },
      {
        title: "Project: EduGame Kitchen Code",
        description: "(Deployed serious game for learning programming logic)",
      },
    ],
  },
];

export const cvLinks = {
  default: "/CV.pdf", // CV Umum (yang sekarang ada)
  guru: "/cv/cv-guru.pdf",
  it: "/cv/cv-it.pdf",
  design: "/cv/cv-design.pdf",
};

export const projects = [
  // --- 1. JANNAH QUEST (IT) ---
  {
    id: 1,
    name: "Jannah Quest",
    description: "An islamic gamification platform for tracking ibadah.",
    href: "https://jannah-quest.vercel.app/",
    image: "/assets/projects/jannah.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Vite" },
    ],
    category: ["it"], 
    
    // Config untuk Pop Up
    modalConfig: {
      type: "web",
      description: "Jannah Quest helps users track their daily worship activities with gamification elements to keep them motivated.",
      mainButtonText: "Live Demo",
      mainButtonLink: "https://jannah-quest.vercel.app/",
    },
  },

  // --- 2. CREATIVE PORTFOLIO (DESIGN) ---
  {
    id: 2,
    name: "My Creative Portfolio",
    description: "A showcase of my creative work, including graphic design, web development, and more.",
    href: "https://www.behance.net/gallery/228214801/Creative-Portfolio-2025",
    image: "/assets/projects/portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Behance" },
      { id: 2, name: "Photoshop" },
      { id: 3, name: "Figma" },
      { id: 4, name: "Illustrator" },
    ],
    category: ["design"],

    modalConfig: {
      type: "web", // Link ke Behance
      description: "A comprehensive collection of my visual works, branding, and UI/UX explorations.",
      mainButtonText: "View on Behance",
      mainButtonLink: "https://www.behance.net/gallery/228214801/Creative-Portfolio-2025",
    },
  },

  // --- 3. KITCHEN CODE (GURU & IT) - Hybrid ---
  {
    id: 3,
    name: "Kitchen Code",
    description: "An edugame that teaches cooking skills through interactive lessons.",
    href: "https://kitchen-code.vercel.app",
    image: "/assets/projects/kitchen.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Unity3d" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "WebGL" },
    ],
    category: ["guru", "it"], // 🔥 Masuk Dua Kategori

    modalConfig: {
      type: "web",
      description: "Kitchen Code combines gaming and education to make learning cooking logic fun and interactive. Built with Unity WebGL embedded in Next.js.",
      mainButtonText: "Play Demo",
      mainButtonLink: "https://kitchen-code.vercel.app",
      // 👇 Request kamu: Button Pitch Deck UX
      secondaryButtonText: "Pitch Deck (UX)",
      secondaryButtonLink: "#", // Masukkan link PDF/Drive di sini nanti
    },
  },

  // --- 4. FALAH PERIOD PAGE (IT) ---
  {
    id: 4,
    name: "Falah Period Page",
    description: "A landing page for a period tracking app focused on user engagement.",
    href: "https://ukdm-upi.netlify.app/",
    image: "/assets/projects/Falah.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
    category: ["it"],

    modalConfig: {
      type: "web",
      description: "A responsive landing page designed to introduce the Falah application features to new users.",
      mainButtonText: "Visit Site",
      mainButtonLink: "https://ukdm-upi.netlify.app/",
    },
  },

  // --- 5. LMS ADAPTIVE LEARNING (GURU & IT) - On Going ---
  {
    id: 5,
    name: "LMS Adaptive Learning",
    description: "AI-powered learning management system (Work In Progress).",
    href: "#",
    image: "/assets/projects/portfolio.png", // Placeholder image
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "OpenAI API" },
      { id: 3, name: "PostgreSQL" },
    ],
    category: ["guru", "it"], // 🔥 Masuk Dua Kategori

    modalConfig: {
      type: "coming_soon", // Tipe khusus coming soon
      description: "Project ini sedang dikembangkan untuk menciptakan pengalaman belajar yang personal menggunakan AI.",
      // Tidak ada button link karena coming soon
    },
  },

  // --- 6. KURIKULUM IT (GURU) - PDF ---
  {
    id: 6,
    name: "Kurikulum IT Sekolah",
    description: "Rancangan silabus dan ATP TIK untuk jenjang SMP/SMA.",
    href: "#",
    image: "/assets/projects/portfolio.png", // Placeholder image document
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Curriculum Dev" },
      { id: 2, name: "Education" },
    ],
    category: ["guru"],

    modalConfig: {
      type: "pdf",
      description: "Dokumen restrukturisasi kurikulum IT yang disesuaikan dengan kebutuhan industri.",
      mainButtonText: "Download PDF",
      mainButtonLink: "#", // Link Download PDF
    },
  },

  // --- 7. MODUL AJAR (GURU) - PDF ---
  {
    id: 7,
    name: "Modul Ajar Informatika",
    description: "E-Book dan modul praktikum interaktif kelas 10.",
    href: "#",
    image: "/assets/projects/portfolio.png", // Placeholder
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Canva" },
      { id: 2, name: "Writing" },
    ],
    category: ["guru"],

    modalConfig: {
      type: "pdf",
      description: "Modul ajar berbasis Project Based Learning (PjBL) untuk materi Algoritma.",
      mainButtonText: "Baca Modul",
      mainButtonLink: "#",
    },
  },

  // --- 8. PPT KUMPULAN (GURU) - SLIDE ---
  {
    id: 8,
    name: "Interactive Slides",
    description: "Kumpulan slide presentasi materi ajar yang interaktif.",
    href: "#",
    image: "/assets/projects/portfolio.png", 
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Google Slides" },
      { id: 2, name: "Design" },
    ],
    category: ["guru"],

    modalConfig: {
      type: "slide",
      description: "Kumpulan materi ajar visual yang digunakan di kelas.",
      embedUrl: "https://docs.google.com/presentation/d/e/2PACX-1vRz.../embed", // Ganti link embed nanti
      mainButtonText: "Open Fullscreen",
      mainButtonLink: "#",

      // 🔥 TOMBOL KEDUA (See More / Link Drive)
      secondaryButtonText: "Lihat PPT (Drive)",
      secondaryButtonLink: "#", // Link Folder Drive Kamu
    },
  },

  // --- 9. ANIMASI 2D (GURU) - VIDEO ---
  {
    id: 9,
    name: "Motion Graphic Edu",
    description: "Video animasi penjelasan cara kerja komputer (CPU & RAM).",
    href: "#",
    image: "/assets/projects/portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "After Effects" },
      { id: 2, name: "Illustrator" },
    ],
    category: ["guru"], // Bisa ditambah "design" jika mau

    modalConfig: {
      type: "video",
      description: "Visualisasi konsep abstrak komputer menjadi animasi 2D yang mudah dipahami siswa.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti ID video youtube nanti
      mainButtonText: "Watch on YouTube",
      mainButtonLink: "#",

      // 🔥 TOMBOL KEDUA (See More / Link Playlist)
      secondaryButtonText: "Lihat Playlist Lengkap",
      secondaryButtonLink: "#", // Link Playlist/Channel
    },
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/nugrahaadiputranap?utm_source=ig_web_button_share_sheet&igsh=NmlzZm8zdmxocTNk" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@AgamMovement",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nugraha-adiputra-aa98ba237/" },
  { name: "GitHub", href: "https://github.com/NugrahaAdiKasogi" },
];
