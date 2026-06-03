export default function Education() {
  return (
    <section id="education" className="bg-[#121212] pb-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
          Education.
        </h2>
        
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-md max-w-4xl">
          {/* Subtle hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-sm font-medium text-white/50 tracking-wider uppercase mb-4 block">
                2024 — 2028
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                V.S.B. Engineering College
              </h3>
              <p className="text-xl text-white/80 mb-4">
                B.Tech in Information Technology
              </p>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <span className="text-sm font-medium text-white/60 mr-2">CGPA:</span>
                <span className="text-sm font-bold text-white">9.0</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/5 group-hover:border-white/30 transition-colors">
              <svg className="w-10 h-10 text-white/40 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
