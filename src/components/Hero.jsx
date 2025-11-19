function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(1200px 600px at 50% -10%, var(--solea-blush-20), transparent 60%)' }}></div>

      {/* Soft, kid-friendly animated shapes (brand palette) */}
      <div className="absolute inset-0 -z-10">
        <style>{`
          @keyframes floatSlow { 0% { transform: translateY(0px) } 50% { transform: translateY(-18px) } 100% { transform: translateY(0px) } }
          @keyframes drift { 0% { transform: translateX(0px) rotate(0deg) } 50% { transform: translateX(15px) rotate(4deg) } 100% { transform: translateX(0px) rotate(0deg) } }
        `}</style>
        {/* Big pastel blobs in Soléa colors */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl watercolor-blob" style={{ backgroundColor: 'var(--solea-blush)', opacity: 0.28, animation: 'floatSlow 8s ease-in-out infinite' }} />
        <div className="absolute top-10 -right-16 h-64 w-64 rounded-full blur-3xl watercolor-blob" style={{ backgroundColor: 'var(--solea-terracotta)', opacity: 0.25, animation: 'floatSlow 9s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl watercolor-blob" style={{ backgroundColor: 'var(--solea-sage)', opacity: 0.25, animation: 'floatSlow 10s ease-in-out infinite' }} />

        {/* Friendly floating shapes (stars/hearts/notes) */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute left-10 top-20 text-3xl" style={{ color: 'var(--solea-sage)', filter: 'drop-shadow(0 6px 20px rgba(125,170,149,0.4))', animation: 'drift 6s ease-in-out infinite' }}>⭐</span>
          <span className="absolute right-12 top-32 text-3xl" style={{ color: 'var(--solea-terracotta)', filter: 'drop-shadow(0 6px 20px rgba(210,122,91,0.4))', animation: 'drift 7s ease-in-out infinite' }}>💜</span>
          <span className="absolute left-1/2 bottom-24 -translate-x-1/2 text-3xl" style={{ color: 'var(--solea-beige)', filter: 'drop-shadow(0 6px 20px rgba(233,215,191,0.35))', animation: 'drift 8s ease-in-out infinite' }}>🎈</span>
          <span className="absolute left-20 bottom-16 text-3xl" style={{ color: 'var(--solea-blush)', filter: 'drop-shadow(0 6px 20px rgba(242,195,204,0.35))', animation: 'drift 6.5s ease-in-out infinite' }}>🎵</span>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-6 sm:px-10 max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs tracking-widest uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur rounded-full px-3 py-1 mb-4">Chișinău • Moldova</span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight" style={{ textShadow: '0 8px 40px rgba(210,122,91,0.35)' }}>
          Let your child’s voice bloom
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-serif-clean">
          Confidence • Expression • Emotional Balance
        </p>
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-3xl mx-auto">
          At Soléa, we help children find their natural voice — not by teaching them to speak louder, but by helping them speak from the heart. Inspired by the Cambridge Primary Pathway, our method blends structure with soul.
        </p>
        <p className="mt-2 text-white/80 font-hand">“Let’s start in Chișinău — but the goal is beyond.”</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#courses" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-colors" style={{ backgroundColor: 'var(--solea-terracotta)' }}>
            Explore Courses
          </a>
          <a href="#method" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold backdrop-blur border transition-colors" style={{ borderColor: 'rgba(255,255,255,0.25)', backgroundColor: 'rgba(255,255,255,0.10)' }}>
            Meet Soléa’s Method
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold backdrop-blur border transition-colors" style={{ borderColor: 'rgba(255,255,255,0.25)', backgroundColor: 'rgba(255,255,255,0.10)' }}>
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
