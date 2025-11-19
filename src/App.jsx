import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Method from './components/Method'
import Courses from './components/Courses'
import Blog from './components/Blog'
import AboutDarya from './components/AboutDarya'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, rgba(12,14,18,1) 0%, rgba(12,14,18,0.96) 30%, rgba(12,14,18,1) 100%)' }}>
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur bg-black/30 border-b border-white/10">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl shadow-lg" style={{ background: 'linear-gradient(135deg, var(--solea-terracotta), var(--solea-blush))' }} />
          <span className="text-white font-semibold tracking-wide font-serif-clean">Soléa</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-white/85">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#method" className="hover:text-white">Method</a>
          <a href="#courses" className="hover:text-white">Courses</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Method />
        <Courses />
        <Programs />
        <Blog />
        <AboutDarya />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
