import React, { useState } from 'react';
import './index.css';

function App() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projects = [
    {
      title: "Dating App",
      desc: "React + Tailwind card UI, UPI payment Razorpay integration",
      tech: "React | Tailwind | Razorpay",
      liveLink: "https://your-dating-app.netlify.app",
      githubLink: "https://github.com/codex-priyanshu/dating-app"
    },
    {
      title: "Portfolio",
      desc: "Modern responsive portfolio with animations",
      tech: "React | Tailwind CSS | Vite",
      liveLink: "https://codex-priyanshu.github.io/Portfolio/",
      githubLink: "https://github.com/codex-priyanshu/portfolio"
    },
    {
      title: "Payment Gateway",
      desc: "UPI QR integration + payment flow",
      tech: "Razorpay | React | Node.js",
      liveLink: "https://your-payment-app.vercel.app",
      githubLink: "https://github.com/codex-priyanshu/payment-gateway"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Priyanshu
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer | React.js | Node.js | BCA Student | Jaunpur
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setIsProjectsOpen(true)}
              className="px-10 py-5 bg-white text-purple-600 font-bold rounded-full text-xl hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
            >
              View My Projects
            </button>
            <a href="#contact" className="px-10 py-5 border-3 border-white text-white font-bold rounded-full text-xl hover:bg-white hover:text-purple-600 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110">
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Modal */}
      {isProjectsOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-8">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 backdrop-blur-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 shadow-2xl">
            <div className="p-8 border-b border-white/10 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  My Projects
                </h2>
                <button
                  onClick={() => setIsProjectsOpen(false)}
                  className="text-4xl hover:text-purple-400 transition-all duration-300 p-3 rounded-2xl hover:bg-white/10 hover:scale-110"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-purple-500/20 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(' | ').map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-6 rounded-xl text-center hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      📂 GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* बाकी sections same रखें (About, Projects, Contact) */}
      {/* Your existing About, Projects, Contact sections */}

      {/* About Section */}
      <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-lg">
              BCA student from Jaunpur. Learning React.js, Node.js, Javascript, Tailwind CSS.
              Built dating website with Razorpay payment integration. Daily coding practice + projects.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-purple-500/40 transition-all duration-500 cursor-pointer">
                <div className="text-3xl font-bold text-purple-400 group-hover:text-white mb-2">React</div>
                <div className="text-lg font-semibold text-gray-300">Intermediate</div>
              </div>
              <div className="group bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-emerald-500/40 transition-all duration-500 cursor-pointer">
                <div className="text-3xl font-bold text-emerald-400 group-hover:text-white mb-2">Node.js</div>
                <div className="text-lg font-semibold text-gray-300">Beginner</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/me2.jpeg"
              alt="Priyanshu"
              className="w-96 h-96 rounded-3xl mx-auto shadow-2xl object-cover border-8 border-white/30 hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 rounded-3xl shadow-2xl animate-ping opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-slate-800/30 backdrop-blur-sm">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Dating App", desc: "React + Tailwind card UI, UPI payment Razorpay integration", tech: "React | Tailwind | Razorpay" },
            { title: "Portfolio", desc: "Modern responsive portfolio with animations", tech: "React | Tailwind CSS | Vite" },
            { title: "Payment Gateway", desc: "UPI QR integration + payment flow", tech: "Razorpay | React | Node.js" }
          ].map((project, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-10 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-purple-500/20 transition-all duration-700 hover:scale-105 hover:-translate-y-6 cursor-pointer shadow-2xl hover:shadow-purple-500/25">
              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {project.tech.split(' | ').map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all">
                    {t}
                  </span>
                ))}
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</h2>
        <p className="text-2xl mb-16 text-gray-300 max-w-2xl mx-auto">Contact for projects, freelance work or learning collaboration</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
          <a href="mailto:codexpriyanshu65@gmail.com" className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-3xl text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            📧 Email Me
          </a>
          <a href="https://github.com/codex-priyanshu" target="_blank" className="px-12 py-6 border-3 border-purple-400 text-purple-400 font-bold rounded-3xl text-xl hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            💻 GitHub
          </a>
        </div>
        <p className="text-lg text-gray-400">Made with ❤️ using React + Tailwind CSS</p>
      </section>
    </div>
  );
}

export default App;
