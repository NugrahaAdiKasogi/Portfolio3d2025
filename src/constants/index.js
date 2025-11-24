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
  {
    id: 1,
        name: "Jannah Quest",
    description:
      "An islamic gamification platform for tracking ibadah.",
    href: "https://jannah-quest.vercel.app/",
    image: "/assets/projects/jannah.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Vite" },
    ],
    category: "it", 
  },
  {
    id: 2,
    name: "My Creative Portfolio",
    description:
      "A showcase of my creative work, including graphic design, web development, and more.",
    href: "https://www.behance.net/gallery/228214801/Creative-Portfolio-2025",
    image: "/assets/projects/portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Behance" },
      { id: 2, name: "Adobe Photoshop" },
      { id: 3, name: "Figma" },
      { id: 4, name: "Adobe Illustrator" },
    ],
    category: "design", 

  },
  {
    id: 3,
    name: "Kitchen Code an Edugame",
    description:
      "An edugame that teaches cooking skills through interactive lessons and cooking simulations",
    href: "https://kitchen-code.vercel.app",
    image: "/assets/projects/kitchen.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Unity3d" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "WebGL" },
      { id: 5, name: "Tailwind CSS" },
    ],
    category: "guru", 
  },
  {
    id: 4,
    name: "Falah Period Page Landing",
    description:
      "A landing page for a period tracking app with a focus on user engagement and conversion.",
    href: "https://ukdm-upi.netlify.app/",
    image: "/assets/projects/Falah.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Netlify" },
    ],
    category: "it", 
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
