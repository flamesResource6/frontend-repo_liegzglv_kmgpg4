import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.25),transparent_60%)]"></div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-6 sm:px-10 max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs tracking-widest uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur rounded-full px-3 py-1 mb-4">Chișinău • Moldova</span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_8px_40px_rgba(79,70,229,0.35)]">
          Solea — Where Confidence Meets Expression
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
          Every voice deserves to be heard — clearly, confidently, and authentically. We help children and young adults find their voice through storytelling, speech techniques, and confidence-building.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-colors">
            Explore Programs
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Top gradient veil to ensure readable contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/20 to-slate-900/80"></div>
    </section>
  )
}

export default Hero
