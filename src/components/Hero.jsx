function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.25),transparent_60%)]"></div>

      {/* Soft, kid-friendly animated shapes (replaces complex 3D scene) */}
      <div className="absolute inset-0 -z-10">
        <style>{`
          @keyframes floatSlow { 0% { transform: translateY(0px) } 50% { transform: translateY(-18px) } 100% { transform: translateY(0px) } }
          @keyframes drift { 0% { transform: translateX(0px) rotate(0deg) } 50% { transform: translateX(15px) rotate(4deg) } 100% { transform: translateX(0px) rotate(0deg) } }
        `}</style>
        {/* Big pastel blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" style={{ animation: 'floatSlow 8s ease-in-out infinite' }} />
        <div className="absolute top-10 -right-16 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" style={{ animation: 'floatSlow 9s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" style={{ animation: 'floatSlow 10s ease-in-out infinite' }} />

        {/* Friendly floating shapes (stars/hearts/notes styled shapes) */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute left-10 top-20 text-3xl" style={{ filter: 'drop-shadow(0 6px 20px rgba(99,102,241,0.4))', animation: 'drift 6s ease-in-out infinite' }}>⭐</span>
          <span className="absolute right-12 top-32 text-3xl" style={{ filter: 'drop-shadow(0 6px 20px rgba(236,72,153,0.4))', animation: 'drift 7s ease-in-out infinite' }}>💜</span>
          <span className="absolute left-1/2 bottom-24 -translate-x-1/2 text-3xl" style={{ filter: 'drop-shadow(0 6px 20px rgba(14,165,233,0.35))', animation: 'drift 8s ease-in-out infinite' }}>🎈</span>
          <span className="absolute left-20 bottom-16 text-3xl" style={{ filter: 'drop-shadow(0 6px 20px rgba(251,191,36,0.35))', animation: 'drift 6.5s ease-in-out infinite' }}>🎵</span>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-6 sm:px-10 max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs tracking-widest uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur rounded-full px-3 py-1 mb-4">Chișinău • Moldova</span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_8px_40px_rgba(79,70,229,0.35)]">
          Let your child’s voice bloom
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
          Confidence • Expression • Emotional Balance
        </p>
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-3xl mx-auto">
          At Soléa, we help children find their natural voice — not by teaching them to speak louder, but by helping them speak from the heart. Inspired by the Cambridge Primary Pathway, our method blends structure with soul.
        </p>
        <p className="mt-2 text-white/75">“Let’s start in Chișinău — but the goal is beyond.”</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#courses" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-colors">
            Explore Courses
          </a>
          <a href="#method" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition-colors">
            Meet Soléa’s Method
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition-colors">
            Book a Trial Class
          </a>
        </div>
      </div>

      {/* Top gradient veil to ensure readable contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/20 to-slate-900/80"></div>
    </section>
  )
}

export default Hero
