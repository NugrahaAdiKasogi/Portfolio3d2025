// index.js
export const servicesData = [
  {
    title: 'Frontend Development & UI/UX',
    description:
      'My core passion. I specialize in building responsive, user-centric web applications. I bridge the crucial gap between high-fidelity UI/UX design in Figma and clean, functional code in React and Next.js.',
    items: [
      {
        title: 'Frontend Development',
        description: '(React.js, Next.js, Tailwind, Responsive Design)',
      },
      {
        title: 'UI/UX Design',
        description: '(Figma Prototyping, Wireframing, User Flow Analysis)',
      },
      {
        title: 'API & Backend Integration',
        description: '(REST APIs, Supabase/Firebase, Auth, Data Fetching)',
      },
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    description:
      'I translate raw educational phenomena into structured, actionable insights. I design robust ETL pipelines, model data architectures, and build enterprise-grade interactive dashboards to drive informed decision-making.',
    items: [
      {
        title: 'ETL & Data Architecture',
        description: '(Python, Pandas, PostgreSQL, Star Schema Modeling)',
      },
      {
        title: 'Business Intelligence',
        description: '(Looker Studio, Data Storytelling, KPI Tracking)',
      },
      {
        title: 'Fullstack Data Apps',
        description: '(React, Recharts, Client-Side Data Aggregation)',
      },
    ],
  },
  {
    title: 'Informatics & Education',
    description:
      'My degree in Computer Science Education taught me how to communicate complex technical concepts with clarity. I have practical experience delivering 20+ class periods on algorithms and building full-scale lesson plans.',
    items: [
      {
        title: 'Technical Communication',
        description: '(Breaking down complex code for diverse audiences)',
      },
      {
        title: 'Curriculum & Media Design',
        description: '(Designing lesson plans, modules, and LKPD)',
      },
      {
        title: 'EdTech Development',
        description:
          '(Built an LMS prototype in Next.js & an educational game in Unity)',
      },
    ],
  },
  {
    title: 'Visual & Graphic Design',
    description:
      'I translate complex ideas into clear, engaging visuals. My experience ranges from creating complete brand identities for organizations to producing 25+ social media assets during my internship.',
    items: [
      {
        title: 'Branding & Identity',
        description: '(Logo Design, Merchandise, Visual Guidelines)',
      },
      {
        title: 'Digital Content Creation',
        description: '(Social Media Assets, Presentation Decks, Posters)',
      },
      {
        title: 'Primary Tools',
        description: '(Figma, Adobe Photoshop, Illustrator, Canva)',
      },
    ],
  },
  {
    title: 'Game Development',
    description:
      "I have hands-on experience developing educational games from concept to deployment. My work, 'Kitchen Code,' was tested in a classroom and improved student engagement by +25%.",
    items: [
      {
        title: 'Primary Tool',
        description: '(Unity, C#)',
      },
      {
        title: 'Core Loops & Logic',
        description: '(Gameplay Mechanics, Scoring Systems, UI Integration)',
      },
      {
        title: 'Project: EduGame Kitchen Code',
        description: '(Deployed serious game for learning programming logic)',
      },
    ],
  },
];

export const cvLinks = {
  default: '/cv/cv-general.pdf', // CV Umum (yang sekarang ada)
  guru: '/cv/cv-guru.pdf',
  web: '/cv/cv-web.pdf',
  design: '/cv/cv-design.pdf',
  data: '/cv/cv-data.pdf',
};

export const projects = [
  // --- 1. JANNAH QUEST (IT) ---
  {
    id: 1,
    name: 'Jannah Quest',
    description: 'An islamic gamification platform for tracking ibadah.',
    href: 'https://jannah-quest.vercel.app/',
    image: '/assets/projects/jannah.png',
    bgImage: '/assets/projects/jannah.png',
    frameworks: [
      {
        id: 1,
        name: 'Next.js',
      },
      {
        id: 2,
        name: 'Supabase',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
      },
      {
        id: 4,
        name: 'Vite',
      },
    ],
    category: ['it'],

    // Config untuk Pop Up
    modalConfig: {
      type: 'web',
      description:
        'Jannah Quest helps users track their daily worship activities with gamification elements to keep them motivated.',
      mainButtonText: 'Live Demo',
      mainButtonLink: 'https://jannah-quest.vercel.app/',
    },

    //tambahin button UI/UX nanti ya
  },

  // --- 2. CREATIVE PORTFOLIO (DESIGN) ---
  {
    id: 2,
    name: 'My Creative Portfolio',
    description:
      'A showcase of my creative work, including graphic design, web development, and more.',
    href: 'https://www.behance.net/gallery/228214801/Creative-Portfolio-2025',
    image: '/assets/projects/portfolio.png',
    bgImage: '/assets/projects/portfolio.png',
    frameworks: [
      {
        id: 1,
        name: 'Behance',
      },
      {
        id: 2,
        name: 'Photoshop',
      },
      {
        id: 3,
        name: 'Figma',
      },
      {
        id: 4,
        name: 'Illustrator',
      },
    ],
    category: ['design'],

    modalConfig: {
      type: 'web', // Link ke Behance
      description:
        'A comprehensive collection of my visual works, branding, and UI/UX explorations.',
      mainButtonText: 'View on Behance',
      mainButtonLink:
        'https://www.behance.net/gallery/228214801/Creative-Portfolio-2025',
    },
  },

  // --- 3. KITCHEN CODE (GURU & IT) - Hybrid ---
  {
    id: 3,
    name: 'Kitchen Code',
    description:
      'An edugame that teaches cooking skills through interactive lessons.',
    href: 'https://kitchen-code.vercel.app',
    image: '/assets/projects/kitchen.png',
    bgImage: '/assets/projects/kitchen.png',
    frameworks: [
      {
        id: 1,
        name: 'Unity3d',
      },
      {
        id: 2,
        name: 'Next.js',
      },
      {
        id: 3,
        name: 'Node.js',
      },
      {
        id: 4,
        name: 'WebGL',
      },
    ],
    category: ['guru', 'it'], // 🔥 Masuk Dua Kategori

    modalConfig: {
      type: 'web',
      description:
        'Kitchen Code combines gaming and education to make learning cooking logic fun and interactive. Built with Unity WebGL embedded in Next.js.',
      mainButtonText: 'Play Demo',
      mainButtonLink: 'https://kitchen-code.vercel.app',
      // 👇 Request kamu: Button Pitch Deck UX
      secondaryButtonText: 'Pitch Deck (UX)',
      secondaryButtonLink:
        'https://docs.google.com/presentation/d/1iAJjKsKyhDFmvqy2OB7hHJOb7ygs_XKV/edit?usp=drive_link&ouid=109481048810043474391&rtpof=true&sd=true', // Masukkan link PDF/Drive di sini nanti
    },
  },

  // --- 4. FALAH PERIOD PAGE (IT) ---
  {
    id: 4,
    name: 'Falah Period Page',
    description:
      'A landing page for a period tracking app focused on user engagement.',
    href: 'https://ukdm-upi.netlify.app/',
    image: '/assets/projects/Falah.png',
    bgImage: '/assets/projects/Falah.png',
    frameworks: [
      {
        id: 1,
        name: 'HTML',
      },
      {
        id: 2,
        name: 'CSS',
      },
      {
        id: 3,
        name: 'JavaScript',
      },
    ],
    category: ['it'],

    modalConfig: {
      type: 'web',
      description:
        'A responsive landing page designed to introduce the Falah application features to new users.',
      mainButtonText: 'Visit Site',
      mainButtonLink: 'https://ukdm-upi.netlify.app/',
    },

    //tambahin button UI/UX nanti ya
  },

  // --- 5. LMS ADAPTIVE LEARNING (GURU & IT) - On Going ---
  {
    id: 5,
    name: 'LMS Adaptive Learning',
    description: 'AI-powered learning management system (Work In Progress).',
    href: '#',
    image: '/assets/projects/LMSAdapt.png', // Placeholder image
    bgImage: '/assets/projects/LMSAdapt.png',
    frameworks: [
      {
        id: 1,
        name: 'Next.js',
      },
      {
        id: 2,
        name: 'OpenAI API',
      },
      {
        id: 3,
        name: 'PostgreSQL',
      },
    ],
    category: ['guru', 'it'], // 🔥 Masuk Dua Kategori

    modalConfig: {
      type: 'coming_soon', // Tipe khusus coming soon
      description:
        'Project ini sedang dikembangkan untuk menciptakan pengalaman belajar yang personal menggunakan AI.',
      // Tidak ada button link karena coming soon
    },

    //tambahin button UI/UX nanti ya
  },

  // --- 6. KURIKULUM IT (GURU) - PDF ---
  {
    id: 6,
    name: 'Kurikulum IT Sekolah',
    description: 'Rancangan silabus dan ATP TIK untuk jenjang SMK/SMA.',
    href: 'https://drive.google.com/file/d/1tKRqc_1W16Yg6iESnciOYBVqEVkR-rVg/view?usp=sharing',
    image: '/assets/projects/Kurikulum.png', // Placeholder image document
    bgImage: '/assets/projects/Kurikulum.png',
    frameworks: [
      {
        id: 1,
        name: 'Curriculum Dev',
      },
      {
        id: 2,
        name: 'Education',
      },
    ],
    category: ['guru'],

    modalConfig: {
      type: 'pdf',
      description:
        'Dokumen restrukturisasi kurikulum IT yang disesuaikan dengan kebutuhan industri.',
      mainButtonText: 'Download PDF',
      mainButtonLink:
        'https://drive.google.com/file/d/1tKRqc_1W16Yg6iESnciOYBVqEVkR-rVg/view?usp=sharing', // Link Download PDF
    },
  },

  // --- 7. MODUL AJAR (GURU) - PDF ---
  {
    id: 7,
    name: 'Modul Ajar Informatika',
    description: 'E-Book dan modul praktikum interaktif kelas 10.',
    href: 'https://drive.google.com/file/d/1UfX0pyu_FZNHNVjudqB37BzqGcNMzKWX/view?usp=sharing',
    image: '/assets/projects/modul.png', // Placeholder
    bgImage: '/assets/projects/modul.png',
    frameworks: [
      {
        id: 1,
        name: 'Canva',
      },
      {
        id: 2,
        name: 'Writing',
      },
    ],
    category: ['guru'],

    modalConfig: {
      type: 'pdf',
      description:
        'Modul ajar berbasis Project Based Learning (PjBL) untuk materi Algoritma.',
      mainButtonText: 'Baca Modul',
      mainButtonLink:
        'https://drive.google.com/file/d/1UfX0pyu_FZNHNVjudqB37BzqGcNMzKWX/view?usp=sharing', // Link Download PDF

      // 🔥 TOMBOL KEDUA (See More / Link Drive)
      secondaryButtonText: 'Lihat Modul Lainnya (Drive)',
      secondaryButtonLink:
        'https://drive.google.com/drive/folders/1x_Fgd2NCF-kMfw3bXAvai-eFRFqSBk45?usp=drive_link', // Link Folder Drive Kamu
    },
  },

  // --- 8. PPT KUMPULAN (GURU) - SLIDE ---
  {
    id: 8,
    name: 'Interactive Slides',
    description: 'Kumpulan slide presentasi materi ajar yang interaktif.',
    href: 'https://drive.google.com/drive/folders/1KFt22hLulzNGlnhAU3qe6XG1ssIv27xY?usp=sharing', // Link Folder Drive Kamu
    image: '/assets/projects/ppt.png',
    bgImage: '/assets/projects/ppt.png',
    frameworks: [
      {
        id: 1,
        name: 'Google Slides',
      },
      {
        id: 2,
        name: 'Design',
      },
    ],
    category: ['guru'],

    modalConfig: {
      type: 'slide',
      description: 'Kumpulan materi ajar visual yang digunakan di kelas.',
      embedUrl:
        'https://docs.google.com/presentation/d/e/2PACX-1vR4Uqy62PQyfP0yMndKwDi414EnItLQ-lwogwGQMxwFOAQAbqfdTLtXcA1lwucX4Q/pubembed?start=false&loop=false&delayms=3000', // Ganti link embed nanti
      mainButtonText: 'Open Fullscreen',
      mainButtonLink:
        'https://docs.google.com/presentation/d/e/2PACX-1vR4Uqy62PQyfP0yMndKwDi414EnItLQ-lwogwGQMxwFOAQAbqfdTLtXcA1lwucX4Q/pub?start=false&loop=false&delayms=3000',

      // 🔥 TOMBOL KEDUA (See More / Link Drive)
      secondaryButtonText: 'Lihat PPT (Drive)',
      secondaryButtonLink:
        'https://drive.google.com/drive/folders/1KFt22hLulzNGlnhAU3qe6XG1ssIv27xY?usp=sharing', // Link Folder Drive Kamu
    },
  },

  // --- 9. ANIMASI 2D (GURU) - VIDEO ---
  {
    id: 9,
    name: 'Motion Graphic Edu',
    description: 'Video animasi operasi dasar struktur pemrograman.',
    href: 'https://www.https://www.youtube.com/playlist?list=PLgO-mAWqsuSlJtdkbAU8osWJzknnQyNUm.com/embed/M5SBoAylnP4?si=ABB38WUAEKg_smR3',
    image: '/assets/projects/motion.png',
    bgImage: '/assets/projects/motion.png',
    frameworks: [
      {
        id: 1,
        name: 'After Effects',
      },
      {
        id: 2,
        name: 'Illustrator',
      },
    ],
    category: ['guru'], // Bisa ditambah "design" jika mau

    modalConfig: {
      type: 'video',
      description:
        'Visualisasi konsep abstrak komputer menjadi animasi 2D yang mudah dipahami siswa.',
      embedUrl: 'https://www.youtube.com/embed/M5SBoAylnP4?si=ABB38WUAEKg_smR3', // Ganti ID video youtube nanti
      mainButtonText: 'Watch on YouTube',
      mainButtonLink: '#',

      // 🔥 TOMBOL KEDUA (See More / Link Playlist)
      secondaryButtonText: 'Lihat Playlist Lengkap',
      secondaryButtonLink:
        'https://www.youtube.com/playlist?list=PLgO-mAWqsuSlJtdkbAU8osWJzknnQyNUm', // Link Playlist/Channel
    },
  },

  // 2. Tambahkan 2 object ini di bagian BAWAH array export const projects = [ ... ]

  // --- 10. AI STUDENT IMPACT (DATA) ---
  {
    id: 10,
    name: 'AI Student Impact',
    description:
      'Fullstack Data App menganalisis korelasi AI terhadap performa mahasiswa.',
    href: 'https://dashboard-ai-impact-to-student.vercel.app/', // Ganti link vercel-mu
    image: '/assets/projects/ai-impact.png', // Nanti sediakan gambarnya di folder assets
    bgImage: '/assets/projects/ai-impact.png',
    frameworks: [
      { id: 1, name: 'ReactJS' },
      { id: 2, name: 'Supabase' },
      { id: 3, name: 'Recharts' },
    ],
    category: ['data'],
    modalConfig: {
      type: 'web',
      description:
        'Aplikasi portofolio fullstack yang menarik data langsung dari cloud data warehouse Supabase (PostgreSQL). Memproses agregasi logika di sisi klien untuk memetakan pengaruh AI terhadap IPK mahasiswa secara real-time.',
      mainButtonText: 'Live Dashboard',
      mainButtonLink: 'https://dashboard-ai-impact-to-student.vercel.app/',
      secondaryButtonText: 'GitHub Pipeline',
      secondaryButtonLink:
        'https://github.com/NugrahaAdiKasogi/AI_Student_Impact_DataPipeline.git', // Ganti link repo GitHub-mu
    },
  },

  // --- 11. GLOBAL EDUCATION (DATA) ---
  {
    id: 11,
    name: 'Global Education Pipeline',
    description:
      'Enterprise ETL Pipeline yang memetakan kesenjangan literasi dunia.',
    href: 'https://lookerstudio.google.com/reporting/9b8135f6-5162-441e-85e5-156bc2fcb473',
    image: '/assets/projects/global-edu.png', // Nanti sediakan gambarnya
    bgImage: '/assets/projects/global-edu.png',
    frameworks: [
      { id: 1, name: 'Python' },
      { id: 2, name: 'PostgreSQL' },
      { id: 3, name: 'Looker Studio' },
    ],
    category: ['data'],
    modalConfig: {
      type: 'web',
      description:
        'Pipeline ETL tangguh yang memproses data makro pendidikan global. Menggunakan Python untuk pembersihan data, memetakan ke Star Schema, dan divisualisasikan di Looker Studio menggunakan Custom SQL JOIN.',
      mainButtonText: 'View Looker Report',
      mainButtonLink:
        'https://datastudio.google.com/reporting/9b8135f6-5162-441e-85e5-156bc2fcb473',
      secondaryButtonText: 'GitHub Pipeline',
      secondaryButtonLink:
        'https://github.com/NugrahaAdiKasogi/Data_Global_Education_ETL.git', // Ganti link repo GitHub-mu
    },
  },
];

export const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nugrahaadiputranap?utm_source=ig_web_button_share_sheet&igsh=NmlzZm8zdmxocTNk',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@AgamMovement',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nugraha-adiputra-aa98ba237/',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NugrahaAdiKasogi',
  },
];
