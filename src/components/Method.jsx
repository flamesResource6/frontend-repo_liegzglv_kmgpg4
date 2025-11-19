import { Heart, BookOpenCheck, ClipboardList, Globe2, BookText, Quote } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium border text-white/85" style={{ backgroundColor: 'var(--solea-beige-20)', borderColor: 'rgba(255,255,255,0.12)' }}>
      {children}
    </span>
  )
}

export default function Method() {
  return (
    <section id="method" className="relative py-20">
      {/* watercolor background */}
      <div className="absolute inset-0 -z-10">
        <style>{`
          @keyframes floatSoft { 0% { transform: translateY(0) } 50% { transform: translateY(-12px) } 100% { transform: translateY(0) } }
        `}</style>
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-blush)', opacity: 0.22, animation: 'floatSoft 9s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-terracotta)', opacity: 0.20, animation: 'floatSoft 10s ease-in-out infinite' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">Where education meets emotion</h2>
          <p className="mt-3 text-white/85 font-serif-clean">
            We teach public speaking and emotional communication through games, stories, and reflection. Each child is encouraged to feel before they speak, finding calm confidence in front of others.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Pill>Philosophy</Pill>
            <Pill>Reflection</Pill>
            <Pill>Presence</Pill>
            <Pill>Cambridge-inspired</Pill>
          </div>
        </div>

        {/* Cambridge alignment */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border backdrop-blur paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
            <div className="flex items-center gap-3">
              <BookOpenCheck className="w-5 h-5 text-sage" />
              <h3 className="text-white font-semibold font-serif-clean">Inspired by Cambridge</h3>
            </div>
            <ul className="mt-4 space-y-3 text-white/85 text-sm">
              <li className="flex items-start gap-2"><ClipboardList className="w-4 h-4 mt-0.5 text-terracotta"/>Structure & Progress</li>
              <li className="flex items-start gap-2"><BookText className="w-4 h-4 mt-0.5 text-terracotta"/>Reflection</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-0.5 text-terracotta"/>Global Skills</li>
              <li className="flex items-start gap-2"><Heart className="w-4 h-4 mt-0.5 text-terracotta"/>Assessment with purpose</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border backdrop-blur paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-terracotta" />
              <h3 className="text-white font-semibold font-serif-clean">Soléa Essence</h3>
            </div>
            <ul className="mt-4 space-y-3 text-white/85 text-sm">
              <li className="flex items-start gap-2"><ClipboardList className="w-4 h-4 mt-0.5 text-sage"/>Soft, poetic learning stages</li>
              <li className="flex items-start gap-2"><BookText className="w-4 h-4 mt-0.5 text-sage"/>Emotional journaling & voice rituals</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-0.5 text-sage"/>Heart-centered communication</li>
              <li className="flex items-start gap-2"><Heart className="w-4 h-4 mt-0.5 text-sage"/>Growth reflections, not grades</li>
            </ul>
          </div>
        </div>

        {/* Meet Darya */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
            <h3 className="text-xl font-semibold text-white font-serif-clean">Meet Darya</h3>
            <p className="mt-2 text-white/85 font-serif-clean">
              Founder & Voice Educator. Trained in communication, education, and emotional intelligence — Darya blends her background in HR, linguistics, and holistic teaching into every Soléa class.
            </p>
            <p className="mt-2 text-white/85 font-serif-clean">
              Her mission: to help children express themselves with truth, tenderness, and trust.
            </p>
            <div className="mt-4 p-4 rounded-xl border" style={{ background: 'linear-gradient(135deg, var(--solea-sage-20), var(--solea-blush-20))', borderColor: 'rgba(255,255,255,0.10)' }}>
              <Quote className="w-6 h-6 text-terracotta" />
              <p className="mt-2 font-hand text-white text-xl">“Every child carries a melody. At Soléa, we simply help them remember it.” — Darya</p>
            </div>
          </div>
          <div className="rounded-2xl p-6 border backdrop-blur paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
            <h4 className="text-white font-semibold font-serif-clean">Aligned with Cambridge</h4>
            <p className="mt-2 text-white/80 text-sm font-serif-clean">We proudly adapt the Cambridge Primary Pathway to our creative environment — bringing clarity, values, and gentle structure to every lesson.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}
