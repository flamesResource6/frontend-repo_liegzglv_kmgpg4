import { Quote, MapPin } from 'lucide-react'

function About() {
  return (
    <section id="about" className="relative py-20" style={{ background: 'linear-gradient(180deg, rgba(12,14,18,1) 0%, rgba(12,14,18,0.96) 60%, rgba(12,14,18,1) 100%)' }}>
      {/* Watercolor blobs + wave divider */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <style>{`
          @keyframes floatSoft { 0% { transform: translateY(0) } 50% { transform: translateY(-14px) } 100% { transform: translateY(0) } }
        `}</style>
        <div className="absolute -top-10 left-8 h-56 w-56 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-beige)', opacity: 0.22, animation: 'floatSoft 9s ease-in-out infinite' }} />
        <div className="absolute -bottom-10 right-10 h-64 w-64 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-sage)', opacity: 0.22, animation: 'floatSoft 10s ease-in-out infinite' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">Where confidence meets expression</h2>
            <p className="mt-4 text-white/85 text-lg leading-relaxed font-serif-clean">
              At Soléa, every voice matters. We are a gentle space where children learn to speak with clarity, emotional intelligence, and presence. Through storytelling, speech technique, and confidence-building practice, students find their voice and own their story.
            </p>

            <div className="flex items-center gap-3 mt-6 text-white/85">
              <MapPin className="w-5 h-5 text-sage" />
              <span className="font-serif-clean">Chișinău • Rooted in softness, intention, and transformation</span>
            </div>
          </div>
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur paper-texture">
            <Quote className="w-8 h-8 text-terracotta" />
            <p className="mt-3 text-white/90 font-hand text-xl">
              “Our mission is to cultivate confident communicators who speak not just to be heard — but to be felt.”
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}

export default About
