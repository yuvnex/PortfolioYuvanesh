export default function Contact() {
  return (
    <section id="contact" className="bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Let's create <br/> something together.
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-md">
              Feel free to reach out for collaborations, freelance projects, or just to say hello.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <a href="mailto:palanivelyuvanesh@gmail.com" className="group flex items-center text-xl md:text-3xl font-medium text-white/80 hover:text-white transition-colors">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span className="truncate">palanivelyuvanesh@gmail.com</span>
            </a>
            <a href="tel:+916379988358" className="group flex items-center text-xl md:text-3xl font-medium text-white/80 hover:text-white transition-colors">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              +91 6379988358
            </a>
            <div className="flex gap-6 mt-8 pt-8 border-t border-white/10">
              <a href="https://github.com/yuvnex" target="_blank" className="text-white/60 hover:text-white transition-colors text-lg">GitHub</a>
              <a href="https://linkedin.com/in/yuvnex" target="_blank" className="text-white/60 hover:text-white transition-colors text-lg">LinkedIn</a>
              <a href="https://yuvaneshportfolio.vercel.app" target="_blank" className="text-white/60 hover:text-white transition-colors text-lg">Website</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
