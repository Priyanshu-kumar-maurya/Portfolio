import React, { useState, useEffect } from 'react';
import './index.css';
import { 
  Zap, 
  Users, 
  BookOpen, 
  Gem, 
  Car, 
  Coffee, 
  Utensils, 
  Calculator, 
  ExternalLink, 
  User, 
  BarChart3, 
  Code, 
  Database, 
  Cpu, 
  GraduationCap, 
  School, 
  Layers, 
  Folder, 
  Mail, 
  Heart 
} from 'lucide-react';

const words = ["Technical Solutions", "Frontend Interfaces", "Full-Stack Development", "React Applications"];

// Inline SVG component for GitHub icon (matching Lucide style)
const GithubIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function App() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Typewriter effect state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect loop
  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting deletion
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Cursor tracking loop (Optimized using Event Delegation & combined state updates)
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (!e.target) return;
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, .project, .nav-item');
      if (interactive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (!e.target) return;
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, .project, .nav-item');
      if (interactive) {
        const related = e.relatedTarget;
        if (!related || !related.closest('a, button, [role="button"], input, textarea, .project, .nav-item')) {
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const projects = [
    {
      title: "Companion App",
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      category: "Web",
      desc: "A full-stack companion booking app with real-time chat functionality. Built with modern JavaScript technologies.",
      tech: "JavaScript | Full-Stack | Real-Time",
      liveLink: "https://rentgf-app.vercel.app/",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/companion-app"
    },
    {
      title: "Library Management System",
      icon: <BookOpen className="w-10 h-10 text-purple-400" />,
      category: "Database",
      desc: "Role-based Library Management System with Admin & Student dashboards, book reservations and report generation.",
      tech: "HTML | JavaScript | SQLite | Node.js",
      liveLink: "https://library-m.vercel.app",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/library-project"
    },
    {
      title: "Earrings Shop",
      icon: <Gem className="w-10 h-10 text-pink-400" />,
      category: "Web",
      desc: "A beautiful e-commerce website to discover and shop for elegant earrings with a modern UI design.",
      tech: "JavaScript | E-Commerce | CSS",
      liveLink: "https://earrings-shop.vercel.app/",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/Earrings-shop"
    },
    {
      title: "BMW Shop",
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      category: "Web",
      desc: "A sleek and premium BMW car showcase website with elegant product display and modern styling.",
      tech: "HTML | CSS | UI/UX",
      liveLink: "https://bmw-shop-kappa.vercel.app",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/BMW-SHOP"
    },
    {
      title: "Coffee Shop",
      icon: <Coffee className="w-10 h-10 text-amber-500" />,
      category: "Web",
      desc: "A warm and inviting coffee shop landing page with responsive layout, menu showcase and attractive design.",
      tech: "HTML | CSS | Responsive",
      liveLink: "https://priyanshu-kumar-maurya.github.io/Coffee-shop/",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/Coffee-shop"
    },
    {
      title: "Fast Foods Website",
      icon: <Utensils className="w-10 h-10 text-orange-400" />,
      category: "Web",
      desc: "A vibrant fast food ordering website with mouth-watering visuals, menu sections and modern UI layout.",
      tech: "HTML | CSS | JavaScript",
      liveLink: "https://github.com/Priyanshu-kumar-maurya/fast-foods",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/fast-foods"
    },
    {
      title: "Calculator",
      icon: <Calculator className="w-10 h-10 text-emerald-400" />,
      category: "Web",
      desc: "A clean and functional calculator app built with pure HTML, CSS and JavaScript with smooth interactions.",
      tech: "HTML | CSS | JavaScript",
      liveLink: "https://github.com/Priyanshu-kumar-maurya/Calculator",
      githubLink: "https://github.com/Priyanshu-kumar-maurya/Calculator"
    }
  ];

  return (
    <div className="min-h-[100dvh] text-white relative font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Background canvas, floating blobs and grid */}
      <div className="fixed inset-0 z-0 bg-[#05050b] pointer-events-none">
        <div className="bg-blob-container">
          <div className="bg-blob blob1"></div>
          <div className="bg-blob blob2"></div>
          <div className="bg-blob blob3"></div>
        </div>
        <div className="cyber-grid"></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className={`custom-cursor hidden lg:block ${isHovered ? 'cursor-hover' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div 
        className="custom-cursor-dot hidden lg:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#05050b99] backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-black tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          P.MAURYA
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`nav-item text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </nav>

        <div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-bold rounded-full text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(189,0,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
          >
            HIRE ME
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-24">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100dvh-96px)] flex items-center justify-center relative px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 font-mono text-sm tracking-wider uppercase">
                <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
                Welcome to my space
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white">
                Hi, I'm <span className="gradient-text">Priyanshu</span>
              </h1>

              <div className="text-2xl md:text-4xl font-extrabold text-cyan-400 font-mono flex items-center min-h-[48px]">
                <span>&gt;&nbsp;</span>
                <span>{currentText}</span>
                <span className="w-3 h-8 bg-cyan-400 ml-1 animate-pulse" />
              </div>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                I am a final-year BCA student building structural software systems and robust database models. 
                Grounded in mathematical accuracy and high integrity, I create optimized solutions for real-world operations.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => setIsProjectsOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-bold rounded-full text-md tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transform hover:-translate-y-1 cursor-pointer"
                >
                  EXPLORE PROJECTS
                </button>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-cyan-500/10 text-white font-bold rounded-full text-md tracking-wider transition-all duration-300 transform hover:-translate-y-1"
                >
                  LET'S CONNECT
                </a>
              </div>
            </div>

            {/* Right Terminal Column */}
            <div className="lg:col-span-5 w-full space-y-6">
              
              {/* Terminal Mockup */}
              <div className="glass-panel border border-white/10 shadow-2xl overflow-hidden rounded-2xl">
                <div className="bg-slate-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-xs font-mono text-gray-500">system_online.sh</div>
                </div>
                
                <div className="p-6 font-mono text-left space-y-4 text-sm md:text-base min-h-[180px] bg-black/40">
                  <div className="text-gray-500">&gt; priyanshu@jaunpur:~$ <span className="text-white">npm run dev</span></div>
                  <div className="text-green-400">✔ Loading portfolio components...</div>
                  <div className="text-purple-400">✔ Initialized 3D background canvas</div>
                  <div className="text-cyan-400">✔ Secure tunnel active (localhost:3000)</div>
                  <div className="text-yellow-400 animate-pulse">&gt;_ system running at full performance</div>
                </div>
              </div>

              {/* Stats Badge Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-6 border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-cyan-400 mb-1">10+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Completed Projects</div>
                </div>
                <div className="glass-panel p-6 border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-purple-400 mb-1">99.9%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Aesthetics Rating</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Projects Modal */}
        {isProjectsOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8">
            <div className="glass-panel max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl relative">
              
              <div className="p-8 border-b border-white/10 sticky top-0 bg-[#0c0c1ecc]/90 backdrop-blur-md z-10 flex justify-between items-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text uppercase">
                  My Creations
                </h2>
                <button
                  onClick={() => setIsProjectsOpen(false)}
                  className="text-4xl text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-xl hover:bg-white/10 hover:scale-110 font-light"
                >
                  &times;
                </button>
              </div>

              <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="glass-panel p-6 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4">{project.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 text-white font-heading">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.split(' | ').map((t, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm hover:brightness-110 transition-all transform hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-500/10 font-bold rounded-xl flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
                      >
                        <GithubIcon className="w-4 h-4" /> GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          <h2 className="text-5xl font-extrabold text-center mb-20 gradient-text uppercase tracking-wider">About Me</h2>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Card: Summary */}
            <div className="lg:col-span-6 glass-panel p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Professional Summary</h3>
              </div>

              <p className="leading-relaxed text-gray-300 font-light text-base md:text-lg">
                I am a final-year **Bachelor of Computer Applications (BCA)** student at **VBSP University, Uttar Pradesh**. 
                Driven by strong mathematical aptitude and a disciplined approach, I specialize in application logic, structured database management (MySQL/SQLite), and modern interactive web interfaces.
              </p>
              
              <p className="leading-relaxed text-gray-300 font-light text-base md:text-lg">
                My foundation bridges core programming paradigms like Java and C++ with frontend framework mechanics. 
                I pride myself on being highly disciplined, detail-oriented, and focused on clean interface designs.
              </p>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Personal Profile</h4>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-400">FullName:</span>
                  <span className="text-white font-semibold">Priyanshu Kumar Maurya</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white font-semibold">Jaunpur, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Card: Skills Progress Bars */}
            <div className="lg:col-span-6 glass-panel p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-purple-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Technical & Core Skills</h3>
              </div>

              <div className="space-y-5 pt-2">
                {[
                  { name: "React.js & Frontend Libraries", percent: 88, color: "from-cyan-400 to-purple-500" },
                  { name: "HTML5, CSS3 & Modern JavaScript", percent: 90, color: "from-purple-500 to-pink-500" },
                  { name: "MySQL, SQLite & Database Design", percent: 85, color: "from-cyan-400 to-pink-500" },
                  { name: "Node.js & Restful APIs", percent: 75, color: "from-purple-500 to-cyan-400" },
                  { name: "Version Control (Git & GitHub)", percent: 82, color: "from-pink-500 to-purple-500" },
                  { name: "UI/UX Basics & Figma Styling", percent: 80, color: "from-cyan-400 to-purple-600" }
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="font-mono text-cyan-400 font-bold">{skill.percent}%</span>
                    </div>
                    {/* Outer Bar */}
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      {/* Inner Fill */}
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`} 
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Tag Badges */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-xs font-semibold text-gray-300">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/25 transition-all flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" /> Frontend Development
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-purple-400/25 transition-all flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" /> Database Management
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-pink-400/25 transition-all flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-pink-400" /> Web API Integrations
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Experience / Journey Section */}
        <section id="experience" className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative">
          <h2 className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent uppercase tracking-wider">
            My Journey
          </h2>
          
          <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-amber-400 md:before:via-orange-500 md:before:to-red-500 md:before:transform md:before:-translate-x-1/2 ml-4 md:ml-0 space-y-12">
            
            {/* Item 1: Left card (BCA) */}
            <div className="relative md:w-1/2 md:pr-12 md:mr-auto text-left md:text-right flex flex-col items-start md:items-end">
              {/* Timeline dot */}
              <div className="absolute -left-6 md:left-auto md:right-0 top-6 md:translate-x-1/2 w-12 h-12 rounded-full bg-[#0c0c1e] border-2 border-amber-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div className="glass-panel p-6 border border-white/10 hover:border-amber-400/40 w-full relative text-left md:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-amber-955/20 text-amber-400 border border-amber-500/20 mb-3">
                  Expected 2026
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">Bachelor of Computer Applications (BCA)</h3>
                <h4 className="text-amber-400 text-sm font-mono mt-1">VBSP University, Uttar Pradesh | 6th Sem (Final Year)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 font-light">
                  Rigorous coursework in computational systems, database structures, web programming interfaces, and algorithmic logic.
                </p>
              </div>
            </div>

            {/* Item 2: Right card (12th Grade) */}
            <div className="relative md:w-1/2 md:pl-12 md:ml-auto text-left flex flex-col items-start">
              {/* Timeline dot */}
              <div className="absolute -left-6 md:left-0 top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#0c0c1e] border-2 border-orange-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <BookOpen className="w-5 h-5 text-orange-400" />
              </div>
              <div className="glass-panel p-6 border border-white/10 hover:border-orange-500/40 w-full relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-orange-950/20 text-orange-400 border border-orange-500/20 mb-3">
                  Completed 2023
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">Intermediate (12th Grade)</h3>
                <h4 className="text-orange-400 text-sm font-mono mt-1">UP Board, Uttar Pradesh</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 font-light">
                  Focused academic training in science and mathematics, building a solid foundation of analytical thinking and logical problem-solving.
                </p>
              </div>
            </div>

            {/* Item 3: Left card (10th Grade) */}
            <div className="relative md:w-1/2 md:pr-12 md:mr-auto text-left md:text-right flex flex-col items-start md:items-end">
              {/* Timeline dot */}
              <div className="absolute -left-6 md:left-auto md:right-0 top-6 md:translate-x-1/2 w-12 h-12 rounded-full bg-[#0c0c1e] border-2 border-red-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <School className="w-5 h-5 text-red-500" />
              </div>
              <div className="glass-panel p-6 border border-white/10 hover:border-red-500/40 w-full relative text-left md:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-red-950/20 text-red-400 border border-red-500/20 mb-3">
                  Completed 2021
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">High School (10th Grade)</h3>
                <h4 className="text-red-400 text-sm font-mono mt-1">UP Board, Uttar Pradesh</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 font-light">
                  Core scientific principles, primary mathematical models, and foundational computer literacy with a focus on academic discipline.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="py-32 px-6 md:px-12 bg-black/20 backdrop-blur-[2px] relative border-y border-white/5">
          <h2 className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider">
            Selected Projects
          </h2>

          {/* Project Filters */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex gap-4 flex-wrap justify-center">
              {['All', 'Database', 'Web'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`nav-item px-6 py-2.5 rounded-full border transition-all text-xs font-bold uppercase tracking-widest cursor-pointer ${
                    selectedCategory === cat 
                      ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.25)]' 
                      : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Active Indicator dot */}
            <div className="w-6 h-6 rounded-full border border-cyan-500/30 flex items-center justify-center mt-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#bd00ff]" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects
              .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
              .map((project, index) => (
                <a 
                  key={index} 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`glass-panel p-8 flex flex-col justify-between hover:border-cyan-500/30 group no-underline block ${
                    project.category === 'Database' 
                      ? 'border-t-4 border-t-purple-500 hover:shadow-[0_-8px_25px_rgba(189,0,255,0.25)]' 
                      : 'border-t-4 border-t-cyan-400 hover:shadow-[0_-8px_25px_rgba(0,240,255,0.25)]'
                  }`}
                >
                  <div>
                    {/* Header: Tag + Stack icon */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                        {project.category}
                      </span>
                      <Layers className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    
                    <h3 className="text-2xl font-extrabold mb-3 text-white font-heading">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.split(' | ').map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full w-0 group-hover:w-full transition-all duration-500 mt-4"></div>
                    <div className="mt-4 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group-hover:text-white transition-colors pt-2">
                      <Folder className="w-4 h-4" />
                      <span>View Repository</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl font-extrabold mb-8 gradient-text uppercase tracking-wider">Let's Connect</h2>
          <p className="text-xl md:text-2xl mb-16 text-gray-400 font-light max-w-2xl mx-auto">
            Have a project in mind, looking for a developer, or just want to discuss learning opportunities? Drop me a message!
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <a 
              href="mailto:codexpriyanshu65@gmail.com" 
              className="px-12 py-6 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-bold rounded-full text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Mail className="w-6 h-6" /> Email Me
            </a>
            <a 
              href="https://github.com/Priyanshu-kumar-maurya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-purple-500/30 hover:border-cyan-400/50 bg-white/5 hover:bg-cyan-500/10 text-white font-bold rounded-full text-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <GithubIcon className="w-6 h-6" /> GitHub Profile
            </a>
          </div>

          <p className="text-sm text-gray-500 font-mono tracking-widest uppercase flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
        </section>

      </div>
    </div>
  );
}

export default App;
