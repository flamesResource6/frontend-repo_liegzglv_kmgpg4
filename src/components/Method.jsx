import { Heart, BookOpenCheck, ClipboardList, Globe2, BookText, Quote } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80">
      {children}
    </span>
  )
}

export default function Method() {
  return (
    <section id="method" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_15%_10%,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where education meets emotion</h2>
          <p className="mt-3 text-white/80">
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
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <BookOpenCheck className="w-5 h-5 text-indigo-300" />
              <h3 className="text-white font-semibold">Inspired by Cambridge</h3>
            </div>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2"><ClipboardList className="w-4 h-4 mt-0.5 text-indigo-300"/>Structure & Progress</li>
              <li className="flex items-start gap-2"><BookText className="w-4 h-4 mt-0.5 text-indigo-300"/>Reflection</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-0.5 text-indigo-300"/>Global Skills</li>
              <li className="flex items-start gap-2"><Heart className="w-4 h-4 mt-0.5 text-indigo-300"/>Assessment with purpose</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-pink-300" />
              <h3 className="text-white font-semibold">Soléa Essence</h3>
            </div>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2"><ClipboardList className="w-4 h-4 mt-0.5 text-pink-300"/>Soft, poetic learning stages</li>
              <li className="flex items-start gap-2"><BookText className="w-4 h-4 mt-0.5 text-pink-300"/>Emotional journaling & voice rituals</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-0.5 text-pink-300"/>Heart-centered communication</li>
              <li className="flex items-start gap-2"><Heart className="w-4 h-4 mt-0.5 text-pink-300"/>Growth reflections, not grades</li>
            </ul>
          </div>
        </div>

        {/* Meet Darya */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white">Meet Darya</h3>
            <p className="mt-2 text-white/80">
              Founder & Voice Educator. Trained in communication, education, and emotional intelligence — Darya blends her background in HR, linguistics, and holistic teaching into every Soléa class.
            </p>
            <p className="mt-2 text-white/80">
              Her mission: to help children express themselves with truth, tenderness, and trust.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-white/10">
              <Quote className="w-6 h-6 text-indigo-300" />
              <p className="mt-2 italic text-white/90">“Every child carries a melody. At Soléa, we simply help them remember it.” — Darya</p>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 flex flex-col items-start justify-center">
            <h4 className="text-white font-semibold">Aligned with Cambridge</h4>
            <p className="mt-2 text-white/75 text-sm">We proudly adapt the Cambridge Primary Pathway to our creative environment — bringing clarity, values, and gentle structure to every lesson.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
