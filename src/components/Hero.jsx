import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
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
