"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  ChartSpline,
  ChevronRight,
  Code,
  Database,
  ExternalLink,
  FolderGit2,
  FolderGit2Icon,
  GraduationCap,
  Mail,
  MapPin,
  ScanLine,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// Custom GitHub Icon Component
const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

// --- PROJECT DATA ---
const projectsData = [
  {
    id: 1,
    title: "Core Banking DevOps Platform",
    shortDesc:
      "Deployed a Core Banking DevOps Platform using Docker, GitLab CI/CD, Kubernetes, Kustomize, and GitOps across DEV, UAT, and Production environments, with monitoring through Prometheus and Grafana..",
    fullDesc:
      "Deployed a Core Banking DevOps Platform to Kubernetes-based servers using Docker, GitLab CI/CD, Kustomize, and GitOps practices. The deployment covered DEV, UAT, and Production environments, with support for scalability and reliability through HPA and PDB, as well as monitoring using Prometheus and Grafana.",
    tech: ["Kubernetes", "Docker", "Kustomize", "GitLab CI/CD"],
    icon: FolderGit2Icon,
    color: "oklch(75% 0.183 55.934)",
    images: [
      "/project/cbs/satu.jpg",
      "/project/cbs/dua.jpg",
      "/project/cbs/tiga.jpg",
      "/project/cbs/empat.jpg",
    ],
  },
  {
    id: 2,
    title: "Product Management System",
    shortDesc:
      "streamlined manufacturing and logistics workflows by centralizing product information, inventory management, warehouse operations, and product asset management.",
    fullDesc:
      "Developed a Product Management System that streamlined manufacturing and logistics workflows by centralizing product information, inventory management, warehouse operations, and product asset management. The solution improved data accessibility, operational efficiency, and process visibility across business functions.",
    tech: ["PHP", "JavaScript", "MySQL"],
    icon: Database,
    color: "oklch(70.7% 0.165 254.624)",
    images: [
      "/project/product-management/satu.png",
      "/project/product-management/dua.png",
      "/project/product-management/tiga.png",
    ],
  },
  {
    id: 3,
    title: "Product Monitoring Dashboard",
    shortDesc:
      "centralize and visualize product-related data, improving operational visibility and supporting efficient monitoring.",
    fullDesc:
      "The Product Monitoring Dashboard is a web-based application developed to provide real-time visibility into product operations across manufacturing and logistics processes. The platform enables users to monitor product status, track key operational metrics, and gain actionable insights through an intuitive and visually driven dashboard interface.",
    tech: ["PHP", "JavaScript", "MySQL"],
    icon: ChartSpline,
    color: "oklch(87.1% 0.15 154.449)",
    images: [
      "/project/product-monitoring/satu.png",
      "/project/product-monitoring/dua.png",
      "/project/product-monitoring/tiga.png",
    ],
  },
  {
    id: 4,
    title: "Product Reconcile Application",
    shortDesc:
      "inventory verification application that ensures physical stock matches system records by utilizing barcode scanner to streamline and improve the accuracy of stock reconciliation processes.",
    fullDesc:
      "Reconcile Product System is a web-based application designed to improve inventory accuracy by validating physical stock against data recorded in the system. The solution integrates barcode scanner to simplify the stock reconciliation process, reducing manual effort and minimizing human error. By providing real-time verification and discrepancy tracking, the system helps organizations maintain accurate inventory records, improve operational efficiency, and enhance overall inventory control.",
    tech: ["Hardware Integration", "PHP", "JavaScript", "MySQL"],
    icon: ScanLine,
    color: "oklch(74% 0.238 322.16)",
    images: ["/project/reconcile/satu.png", "/project/reconcile/dua.png"],
  },
];

// --- AWARDS DATA ---
const awardsData = [
  {
    id: 1,
    title: "MSIG Asia Awards - Innovation Awards (General Category)",
    issuer: "MSIG Asia Singapore",
    date: "2025",
    description: `Awarded for successfully delivering the "My Invoice Registration project", significantly improving business processes through digital innovation.`,

    fullDescription:
      "Awarded for successfully delivering My Invoice Registration (MIR), \
    a digital claims processing solution that invoice submission, tracking, and reconciliation through integration with the Merimen system. \
    The initiative reduced processing time by over 60%, saved more than 120 operational hours per month, \
    minimized manual errors, and improved transparency and efficiency for both internal teams and business partners.",

    images: ["/awards/mir2.jpg", "/awards/mir1.jpg", "/awards/mir5.jpeg"],

    link: "https://www.linkedin.com/posts/msigindonesia_msigindonesia-goldenjourneywithgratitude-activity-7406630784595431427-teHE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC5kymIBet04QERKfORriC9f4O2OemS0qL8",
  },
  {
    id: 2,
    title: "Grand Winner - Best Idea Innovation",
    issuer: "Asuransi MSIG Indonesia",
    date: "2024",

    description:
      "Awarded for successfully delivering Kizuna Link, \
    a digital transformation initiative that consolidated multiple insurance systems into a single platform",

    fullDescription:
      "Kizuna Link is a centralized platform designed to integrate core insurance systems, \
    including EEMA, DORA, E-Clauses, Artemis, and DELTA, into a single, unified solution. \
    By consolidating these systems into one interface, users will be able to generate, manage, and track quotations seamlessly without the need to switch between multiple applications, \
    resulting in a more efficient and streamlined workflow. Kizuna Link will also provide a centralized dashboard that offers real-time visibility into quotation activities and statuses. \
    Users will be able to monitor the entire quotation lifecycle—from creation and review to approval and issuance—through a comprehensive tracking system, improving transparency and operational control.",

    images: ["/awards/kizuna1.jfif"],

    link: "https://www.linkedin.com/posts/msigindonesia_great-ideas-and-innovations-drive-progress-activity-7297132672915513345-R9UJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC5kymIBet04QERKfORriC9f4O2OemS0qL8",
  },
];

// --- ANIMATION WRAPPER COMPONENT ---
const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{
        duration: 1.3,
        ease: [0.25, 0.25, 0, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [activeSection, setActiveSection] = useState("");
  const [selectedAward, setSelectedAward] = useState<
    (typeof awardsData)[0] | null
  >(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
      },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject || selectedAward)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, selectedAward]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-400 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `,
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-neutral-100">
            &lt;Rizky_E /&gt;
          </span>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a
              href="#about"
              onClick={() => setActiveSection("about")}
              className={`transition-colors duration-300 ${activeSection === "about" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setActiveSection("experience")}
              className={`transition-colors duration-300 ${activeSection === "experience" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setActiveSection("projects")}
              className={`transition-colors duration-300 ${activeSection === "projects" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setActiveSection("skills")}
              className={`transition-colors duration-300 ${activeSection === "skills" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              Skills
            </a>
            <a
              href="#awards"
              onClick={() => setActiveSection("awards")}
              className={`transition-colors duration-300 ${activeSection === "awards" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              Awards
            </a>
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className={`transition-colors duration-300 ${activeSection === "contact" ? "text-white font-bold" : "text-neutral-400 hover:text-neutral-100"}`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Updated to Split Layout) */}
      <ScrollReveal delay={0.4}>
        <section
          id="about"
          className="pt-55 pb-65 px-1 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Left Column: Text & Buttons */}
          <div className="flex-1 w-full">
            {/* <div className="inline-block px-3 py-1 mb-6 border border-neutral-800 rounded-full bg-neutral-900/50">
              <span className="font-mono text-xs text-blue-400">status: Available for new opportunities</span>
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 tracking-tight">
              Rizky Erlangga
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 font-medium">
              IT Software & Development Engineer
            </h2>
            <p className="text-base leading-relaxed mb-8 text-neutral-400">
              A Full-Stack Developer with 4+ years of experience delivering
              web-based solutions across the insurance and manufacturing
              sectors. Experienced in building scalable and maintainable
              applications, optimizing business processes, and delivering
              measurable business value. Also equipped with hands-on DevOps
              experience, including containerization with Docker, CI/CD
              pipelines, Kubernetes deployments, GitOps practices, and
              application monitoring. Passionate about bridging software
              development and operations to ensure applications are not only
              well-built, but also reliably deployed, scalable, and maintainable
              in production environments.
            </p>

            {/* Contact Links */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:rizkyerlanggacontact@gmail.com"
                className="flex items-center px-4 py-2 bg-neutral-100 text-neutral-900 font-medium rounded-md hover:bg-neutral-300 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
              <a
                href="https://github.com/Rizky905"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 border border-neutral-800 text-neutral-300 font-medium rounded-md hover:bg-neutral-800 transition-colors text-sm"
              >
                <GithubIcon className="w-4 h-4 mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative w-full max-w-[280px] md:max-w-[320px] shrink-0">
            {/* Decorative Backing Block */}
            <div className="absolute -bottom-5 -right-5 w-full h-full bg-blue-500/10 border border-blue-500/20 rounded-3xl -z-10"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              <img
                src="/profile-photo.jpg"
                alt="Profile of Rizky Erlangga"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-800 my-4"></div>

      {/* Professional Experience */}
      <section
        id="experience"
        className="py-16 px-6 max-w-7xl mx-auto overflow-hidden"
      >
        <ScrollReveal delay={0.4}>
          <h3 className="text-xl font-bold text-neutral-100 mb-16 flex items-center justify-center md:justify-start">
            <Briefcase className="mr-3 w-5 h-5 text-neutral-500" /> Professional
            Experience
          </h3>
        </ScrollReveal>

        <div className="relative">
          {/* The Center Line (Left on mobile, centered on desktop) */}
          <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-[2px] bg-neutral-800 md:-translate-x-1/2"></div>

          {/* 1st Experience: MSIG Indonesia (LEFT SIDE) */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative flex flex-col md:flex-row w-full mb-16 md:mb-24">
              {/* Left Content Container */}
              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-16 md:text-right">
                {/* Dot */}
                <div className="absolute left-[6px] md:left-1/2 top-1.5 md:top-0 w-3 h-3 bg-blue-500 rounded-full md:-translate-x-1/2 ring-4 ring-[#0a0a0a] z-10"></div>

                <h4 className="text-lg font-bold text-neutral-100">
                  IT Software and Development
                </h4>
                <div className="flex flex-wrap items-center md:justify-end text-sm font-mono text-neutral-500 mt-1 mb-4 gap-y-2 gap-x-4">
                  <span className="text-blue-400">
                    PT. Asuransi MSIG Indonesia
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Sep 2023 - Present
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Greater Jakarta
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-6 md:ml-auto">
                  As a member of the IT Software & Development team at PT
                  Asuransi MSIG Indonesia, I am responsible for developing,
                  maintaining, and enhancing web-based applications that support
                  business operations for one of the leading global general
                  insurance companies. My role involves implementing new
                  features, integrating systems, optimizing application
                  performance, and troubleshooting production issues to ensure
                  operational efficiency and system stability.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2">
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Laravel
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Livewire
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Golang
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Python
                  </span>
                </div>
              </div>

              {/* Empty Right Side (to push content left) */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          </ScrollReveal>

          {/* 2nd Experience: Sagara Xinix (RIGHT SIDE) */}
          <ScrollReveal direction="right">
            <div className="relative flex flex-col md:flex-row w-full">
              {/* Empty Left Side (to push content right) */}
              <div className="hidden md:block w-1/2"></div>

              {/* Right Content Container */}
              <div className="w-full md:w-1/2 pl-10 md:pl-16 text-left">
                {/* Dot */}
                <div className="absolute left-[6px] md:left-1/2 top-1.5 md:top-0 w-3 h-3 bg-emerald-500 rounded-full md:-translate-x-1/2 ring-4 ring-[#0a0a0a] z-10"></div>

                <h4 className="text-lg font-bold text-neutral-100">
                  Web Developer
                </h4>
                <div className="flex flex-wrap items-center text-sm font-mono text-neutral-500 mt-1 mb-4 gap-y-2 gap-x-4">
                  <span className="text-emerald-400">
                    PT. Sagara Xinix Solusitama
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Mar 2021 - Jun 2023
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Greater Jakarta
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  As a Web Developer at PT Sagara Xinix Solusitama, I was
                  responsible for designing, developing, and maintaining web
                  applications that improved operational efficiency and
                  streamlined business processes for clients in various
                  industries. I primarily worked with PHP, Laravel, JavaScript,
                  and MySQL while collaborating with stakeholders to gather
                  requirements, implement solutions, and provide technical
                  support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    PHP
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Laravel
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    MySQL
                  </span>
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-16 px-6 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.4}>
          <h3 className="text-xl font-bold text-neutral-100 mb-2 flex items-center">
            <FolderGit2 className="mr-3 w-5 h-5 text-neutral-500" /> Featured
            Projects
          </h3>
          <p className="text-sm text-neutral-500 mb-8 ml-8">
            Click on any project to view technical details and screenshots.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projectsData.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-500 hover:bg-neutral-900 cursor-pointer transition-all group flex flex-col h-full"
                >
                  <Icon
                    className={`w-6 h-6 mb-4 text-${project.color}-400 group-hover:scale-110 transition-transform duration-300`}
                    color={`${project.color}`}
                  />
                  <h4 className="text-neutral-200 font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mb-4 flex-grow leading-relaxed">
                    {project.shortDesc}
                  </p>
                  <div className="flex items-center text-xs font-mono text-neutral-400 group-hover:text-neutral-300">
                    View Details <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Skills & Education Grid */}
      <section
        id="skills"
        className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <ScrollReveal direction="right" delay={0.4}>
          <div>
            <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center">
              <Terminal className="mr-3 w-5 h-5 text-neutral-500" /> Areas of
              Expertise
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <Code className="w-4 h-4 mr-2 text-neutral-400" />
                  <h4 className="font-medium text-neutral-200">
                    Full-stack Development
                  </h4>
                </div>
                <p className="text-sm text-neutral-500">
                  PHP, Laravel, Golang, JavaScript, HTML/CSS, NextJs, Python.
                </p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <Database className="w-4 h-4 mr-2 text-neutral-400" />
                  <h4 className="font-medium text-neutral-200">
                    Database & Infrastructure
                  </h4>
                </div>
                <p className="text-sm text-neutral-500">
                  MySQL, MongoDB, PostgreSQL, Linux, NGINX, Apache
                </p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <Workflow className="w-4 h-4 mr-2 text-neutral-400" />
                  <h4 className="font-medium text-neutral-200">DevOps</h4>
                </div>
                <p className="text-sm text-neutral-500">
                  Docker, Kubernetes, Kustomize, GitLab CI/CD, Prometheus,
                  Grafana, SonarQube
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.4}>
          <div>
            <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center">
              <GraduationCap className="mr-3 w-5 h-5 text-neutral-500" />{" "}
              Education
            </h3>
            <div className="p-5 border border-neutral-800 rounded-lg bg-[#0a0a0a]">
              <h4 className="text-lg font-bold text-neutral-100 mb-1">
                Esa Unggul University
              </h4>
              <p className="text-sm text-neutral-400 mb-4">
                Bachelor's Degree in Informatics Engineering
              </p>
              <div className="flex justify-between items-center text-sm font-mono text-neutral-500 border-t border-neutral-800 pt-4">
                <span>Period: 2016 – 2020</span>
                <span className="text-neutral-300">GPA: 3.45</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Awards & Recognitions */}
      <section
        id="awards"
        className="py-16 px-6 max-w-7xl mx-auto overflow-hidden"
      >
        <ScrollReveal>
          <h3 className="text-xl font-bold text-neutral-100 mb-2 flex items-center">
            <Award className="mr-3 w-5 h-5 text-neutral-500" /> Awards &
            Recognitions
          </h3>
          <p className="text-sm text-neutral-500 mb-8 ml-8">
            Milestones and achievements throughout my professional career.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                onClick={() => setSelectedAward(award)}
                className="cursor-pointer bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition-all hover:bg-neutral-900 group flex flex-col h-full"
              >
                {/* Upper: Photo Container */}
                <div className="w-full h-48 md:h-56 overflow-hidden bg-neutral-800 shrink-0">
                  <img
                    src={award.images[0]}
                    alt={award.title}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Lower: Short Description */}
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-neutral-100 mb-2 group-hover:text-blue-500 transition-colors">
                    {award.title}
                  </h4>
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-4">
                    <span className="truncate mr-2">{award.issuer}</span>
                    <span className="text-blue-400 shrink-0">{award.date}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed flex-grow line-clamp-3">
                    {award.description}
                  </p>

                  {/* View Details Prompt */}
                  <div className="mt-4 flex items-center text-xs font-mono text-neutral-400 group-hover:text-neutral-300">
                    View Details <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <footer id="contact" className="py-16 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                Let's Connect
              </h3>
              <p className="text-sm text-neutral-400 max-w-md">
                I'm currently open to new opportunities. Whether you have a
                question, a project proposal, or just want to say hi, feel free
                to reach out.
              </p>
            </div>

            <div className="flex flex-col space-y-4 font-mono text-sm w-full md:w-auto">
              {/* Email */}
              <a
                href="mailto:rizkyerlanggacontact@gmail.com"
                className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group"
              >
                <span className="w-24 text-neutral-600">Email</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">
                  rizkyerlanggacontact@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+6289518557336"
                className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group"
              >
                <span className="w-24 text-neutral-600">Phone</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">
                  +62 89518557336
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rizky-erlangga-342806198"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group"
              >
                <span className="w-24 text-neutral-600">LinkedIn</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">
                  Rizky Erlangga
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Rizky905"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group"
              >
                <span className="w-24 text-neutral-600">GitHub</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">
                  github.com/Rizky905
                </span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 text-center font-mono text-xs text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Rizky Erlangga</p>
          </div>
        </div>
      </footer>

      {/* SCROLLABLE PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative bg-[#0f0f0f] border border-neutral-700 rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-neutral-800 bg-[#0f0f0f] z-10 shrink-0">
              <div className="flex items-center pr-4">
                <selectedProject.icon
                  className={`w-6 h-6 mr-3 text-${selectedProject.color}-400 shrink-0`}
                />
                <h2 className="text-xl md:text-2xl font-bold text-neutral-100 truncate">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 md:p-8 overflow-y-auto custom-scrollbar">
              <div className="mb-8 space-y-4">
                {selectedProject.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group"
                  >
                    <img
                      src={imgSrc}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Project Overview
                </h3>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-md text-sm font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCROLLABLE AWARD MODAL */}
      {selectedAward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedAward(null)}
          ></div>

          <div className="relative bg-[#0f0f0f] border border-neutral-700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-neutral-800 bg-[#0f0f0f] z-10 shrink-0">
              <div className="flex items-center pr-4">
                <Award className="w-6 h-6 mr-3 text-blue-400 shrink-0" />
                <h2 className="text-xl md:text-2xl font-bold text-neutral-100 truncate">
                  {selectedAward.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedAward(null)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 md:p-8 overflow-y-auto custom-scrollbar">
              {/* Full Image/Certificate */}
              {selectedAward.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className="mb-8 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex justify-center items-center"
                >
                  <img
                    src={imgSrc}
                    alt={`${selectedAward.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              ))}

              {/* Award Details */}
              <div>
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
                  <div>
                    <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                      Issued By
                    </h3>
                    <p className="text-blue-400 font-bold">
                      {selectedAward.issuer}
                    </p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                      Year
                    </h3>
                    <p className="text-neutral-300 font-mono">
                      {selectedAward.date}
                    </p>
                  </div>
                </div>

                {selectedAward.link && (
                  <div className="mb-6">
                    <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                      Reference
                    </h3>
                    <a
                      href={selectedAward.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-neutral-900 border border-neutral-700 rounded-md text-xs font-mono text-neutral-400 hover:text-blue-400 hover:border-blue-500 transition-colors group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2 group-hover:scale-110 transition-transform" />
                      View Official Post
                    </a>
                  </div>
                )}

                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Description
                </h3>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  {selectedAward.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
