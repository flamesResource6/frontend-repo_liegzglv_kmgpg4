import { Quote, MapPin } from 'lucide-react'

function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_300px_at_20%_10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Where confidence meets expression</h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              At Solea, every voice matters. We are a transformative space where children and young adults learn to speak with clarity, emotional intelligence, and presence. Through storytelling, speech technique, and confidence-building practice, students find their voice and own their story.
            </p>

            <div className="flex items-center gap-3 mt-6 text-indigo-300">
              <MapPin className="w-5 h-5" />
              <span>Based in Chișinău • Rooted in softness, intention, and transformation</span>
            </div>
          </div>
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <Quote className="w-8 h-8 text-indigo-300" />
            <p className="mt-3 text-white/90 italic">
              Our mission is to cultivate confident communicators who speak not just to be heard — but to be felt. We equip future leaders to articulate ideas, navigate emotions, and inspire change through words.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
