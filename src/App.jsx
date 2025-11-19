import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg" />
          <span className="text-white font-semibold tracking-wide">Solea</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Programs />
        <CTA />

        {/* Footer */}
        <footer className="py-10 text-center text-white/60 text-sm bg-slate-950 border-t border-white/10">
          <p>© {new Date().getFullYear()} Solea — Voice of the Future • #SoleaVoices</p>
        </footer>
      </main>
    </div>
  )
}

export default App
