export default function Projects() {
  const projects = [
    {
      title: "InboxAI",
      category: "AI Email Assistant",
      description: "Python, Gmail API. Reduced email drafting effort by ~60% with NLP-driven generation.",
      link: "https://github.com/yuvnex"
    },
    {
      title: "InfoThiranAI",
      category: "Research Assistant",
      description: "Spring Boot, React. Chrome extension for automatic smart note generation from web content.",
      link: "https://github.com/yuvnex"
    },
    {
      title: "Recursion Visualizer",
      category: "Interactive App",
      description: "React, JS. Visualizes recursive execution through dynamic data-driven trees.",
      link: "https://github.com/yuvnex"
    },
    {
      title: "Technical Skills",
      category: "Expertise",
      description: "Java, Python, React, Spring Boot, SQL, C++, Linux. Core focus on algorithms and system design.",
      link: "#"
    }
  ];

  return (
    <section id="works" className="min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
          Selected Works.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-md"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px]">
                <div>
                  <span className="text-sm font-medium text-white/50 tracking-wider uppercase mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/70">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">View Project</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
