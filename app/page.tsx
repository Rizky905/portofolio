"use client";

import { useState, useEffect } from "react";
import {
  Mail, Phone, Terminal, Server, Code, Database, Briefcase, MapPin,
  Calendar, ChevronRight, FolderGit2, X, LayoutTemplate, ScanLine
} from "lucide-react";

// Custom GitHub Icon Component
const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

// Custom LinkedIn Icon Component
const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- PROJECT DATA ---
const projectsData = [
  {
    id: 1,
    title: "Factory Ops & Dashboard System",
    shortDesc: "A tracking system and monitoring dashboard for factory operations.",
    fullDesc: "Developed a comprehensive tracking system for factory operations paired with a real-time monitoring dashboard. This system significantly improved data visibility for executives and automated the tracking of daily production metrics. It streamlined workflows that were previously manual, reducing reporting errors by ensuring seamless tracking. The dashboard was optimized to handle thousands of daily data entries without performance degradation.",
    tech: ["PHP", "JavaScript", "MySQL", "UI/UX Dashboard"],
    icon: Database,
    color: "blue",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Corporate CMS & Asset Manager",
    shortDesc: "A dual-purpose system for digital content and physical asset tracking.",
    fullDesc: "Designed and implemented a dual-purpose architecture using the Laravel framework. The CMS module enables non-technical staff to efficiently update digital content securely. Meanwhile, the Asset Management module tracks physical company assets, inventory lifecycles, and maintenance schedules across multiple departments. This unified platform eliminated the need for third-party tracking software, saving the company significant operational costs.",
    tech: ["Laravel", "PHP", "System Architecture", "MySQL"],
    icon: LayoutTemplate,
    color: "emerald",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Product Reconcile Application",
    shortDesc: "A specialized app with direct barcode scanner hardware integration.",
    fullDesc: "Built a specialized application strictly focused on inventory accuracy and warehouse logistics. It features direct hardware integration with barcode scanner tools via browser APIs, automating the reconciliation of physical products against central database records. This greatly enhanced the speed of warehouse audits, cutting down inventory check times by over 40% and virtually eliminating human data-entry errors.",
    tech: ["Hardware Integration", "JavaScript", "MySQL", "PHP"],
    icon: ScanLine,
    color: "purple",
    images: [
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-400 font-sans selection:bg-blue-500/30 selection:text-blue-200">

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}} />

      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-neutral-100">&lt;Rizky /&gt;</span>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#experience" className="hover:text-neutral-100 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neutral-100 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Updated to Split Layout) */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Column: Text & Buttons */}
        <div className="flex-1 w-full">
          <div className="inline-block px-3 py-1 mb-6 border border-neutral-800 rounded-full bg-neutral-900/50">
            <span className="font-mono text-xs text-blue-400">status: Available for new opportunities</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 tracking-tight">
            Rizky Erlangga
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 font-medium">
            IT Software & Development Engineer
          </h2>
          <p className="max-w-lg text-base leading-relaxed mb-8 text-neutral-400">
            Web Developer with 4+ years of experience building and enhancing web-based applications in the insurance and manufacturing sectors.
            Specialized in PHP, Laravel, JavaScript, Next.js, MySQL, and MongoDB, with hands-on experience in system integration, process automation, and performance optimization.
            Recognized for delivering innovative digital solutions that streamline business operations, improve user experience, and create measurable business impact.
          </p>

          {/* Contact Links */}
          <div className="flex items-center space-x-4">
            <a href="mailto:rizkyerlanggacontact@gmail.com" className="flex items-center px-4 py-2 bg-neutral-100 text-neutral-900 font-medium rounded-md hover:bg-neutral-300 transition-colors text-sm">
              <Mail className="w-4 h-4 mr-2" /> Email
            </a>
            <a href="https://github.com/Rizky905" target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 border border-neutral-800 text-neutral-300 font-medium rounded-md hover:bg-neutral-800 transition-colors text-sm">
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

      <div className="max-w-5xl mx-auto px-6 border-t border-neutral-800 my-4"></div>

      {/* Professional Experience */}
      <section id="experience" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-neutral-100 mb-10 flex items-center">
          <Briefcase className="mr-3 w-5 h-5 text-neutral-500" /> Professional Experience
        </h3>

        <div className="space-y-12 border-l border-neutral-800 ml-2 pl-6">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[30px] top-1.5 ring-4 ring-[#0a0a0a]"></div>
            <h4 className="text-lg font-bold text-neutral-100">IT Software and Development</h4>
            <div className="flex flex-wrap items-center text-sm font-mono text-neutral-500 mt-1 mb-4 gap-y-2 gap-x-4">
              <span className="text-blue-400">PT. Asuransi MSIG Indonesia</span>
              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> Sep 2023 - Present</span>
              <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Greater Jakarta</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-3xl">
              As a member of the IT Software & Development team at PT Asuransi MSIG Indonesia, I am responsible for developing, maintaining, and enhancing web-based applications that support business operations for one of the leading global general insurance companies.
              My role involves implementing new features, integrating systems, optimizing application performance, and troubleshooting production issues to ensure operational efficiency and system stability.
              In 2024, I was recognized as the Grand Winner of the Best Implemented Innovation Category for successfully delivering the My Invoice Registration project, which contributed to improving business processes through digital innovation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">Web Development</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">Troubleshooting</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">System Integration</span>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute w-3 h-3 bg-neutral-600 rounded-full -left-[30px] top-1.5 ring-4 ring-[#0a0a0a]"></div>
            <h4 className="text-lg font-bold text-neutral-100">Web Developer</h4>
            <div className="flex flex-wrap items-center text-sm font-mono text-neutral-500 mt-1 mb-4 gap-y-2 gap-x-4">
              <span className="text-neutral-300">PT. Sagara Xinix Solusitama</span>
              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> Mar 2021 - Jun 2023</span>
              <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Greater Jakarta</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-3xl">
              As a Web Developer at PT Sagara Xinix Solusitama, I was responsible for designing, developing, and maintaining web applications that improved operational efficiency and streamlined business processes for clients in various industries.
              During my tenure, I developed several business-critical systems, including Product Management Systems, Product Monitoring Dashboards, Content Management Systems (CMS),
              Product Reconciliation Applications utilizing barcode scanning technology, and Asset Management Systems. I primarily worked with PHP, Laravel, JavaScript, and MySQL while collaborating with stakeholders to gather requirements, implement solutions, and provide technical support.
              I also conducted Moodle platform training sessions for end users, helping organizations maximize the value of their digital learning platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">PHP</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">Laravel</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">JavaScript</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono">MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-neutral-100 mb-2 flex items-center">
          <FolderGit2 className="mr-3 w-5 h-5 text-neutral-500" /> Featured Projects
        </h3>
        <p className="text-sm text-neutral-500 mb-8 ml-8">Click on any project to view technical details and screenshots.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectsData.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-500 hover:bg-neutral-900 cursor-pointer transition-all group flex flex-col h-full"
              >
                <Icon className={`w-6 h-6 mb-4 text-${project.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-neutral-200 font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-xs text-neutral-500 mb-4 flex-grow leading-relaxed">{project.shortDesc}</p>
                <div className="flex items-center text-xs font-mono text-neutral-400 group-hover:text-neutral-300">
                  View Details <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills & Education Grid */}
      <section id="skills" className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center">
            <Terminal className="mr-3 w-5 h-5 text-neutral-500" /> Areas of Expertise
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="flex items-center mb-2">
                <Code className="w-4 h-4 mr-2 text-neutral-400" />
                <h4 className="font-medium text-neutral-200">Software Development</h4>
              </div>
              <p className="text-sm text-neutral-500">PHP, Laravel, JavaScript, HTML/CSS, Web Application Architecture.</p>
            </div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="flex items-center mb-2">
                <Database className="w-4 h-4 mr-2 text-neutral-400" />
                <h4 className="font-medium text-neutral-200">Data & Systems</h4>
              </div>
              <p className="text-sm text-neutral-500">MySQL, Database Design, Content Management Systems (CMS), Hardware Integration.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center">
            <Database className="mr-3 w-5 h-5 text-neutral-500" /> Education
          </h3>
          <div className="p-5 border border-neutral-800 rounded-lg bg-[#0a0a0a]">
            <h4 className="text-lg font-bold text-neutral-100 mb-1">Universitas Esa Unggul</h4>
            <p className="text-sm text-neutral-400 mb-4">Bachelor's Degree in Informatics Engineering</p>
            <div className="flex justify-between items-center text-sm font-mono text-neutral-500 border-t border-neutral-800 pt-4">
              <span>Period: 2016 – 2020</span>
              <span className="text-neutral-300">GPA: 3.45</span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">Let's Connect</h3>
              <p className="text-sm text-neutral-400 max-w-md">
                I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col space-y-4 font-mono text-sm w-full md:w-auto">
              {/* Email */}
              <a href="mailto:your.email@example.com" className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group">
                <span className="w-24 text-neutral-600">Email</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">your.email@example.com</span>
              </a>

              {/* Phone */}
              <a href="tel:+6281234567890" className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group">
                <span className="w-24 text-neutral-600">Phone</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">+62 812-3456-7890</span>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group">
                <span className="w-24 text-neutral-600">LinkedIn</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">linkedin.com/in/rizkyerlangga</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center text-neutral-400 hover:text-blue-400 transition-colors group">
                <span className="w-24 text-neutral-600">GitHub</span>
                <span className="text-neutral-300 group-hover:underline decoration-neutral-600 underline-offset-4">github.com/rizkyerlangga</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 text-center font-mono text-xs text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Rizky Erlangga. Built with Next.js & Tailwind CSS.</p>
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

          <div className="relative bg-[#0f0f0f] border border-neutral-700 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">

            <div className="flex items-center justify-between p-5 md:p-6 border-b border-neutral-800 bg-[#0f0f0f] z-10 shrink-0">
              <div className="flex items-center pr-4">
                <selectedProject.icon className={`w-6 h-6 mr-3 text-${selectedProject.color}-400 shrink-0`} />
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
                  <div key={index} className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                    <img
                      src={imgSrc}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">Project Overview</h3>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-md text-sm font-mono text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}