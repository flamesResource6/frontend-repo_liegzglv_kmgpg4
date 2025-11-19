import { Sparkles, Mic2, BookOpen, HeartHandshake } from 'lucide-react'

const programs = [
  {
    icon: Mic2,
    title: 'Public Speaking for Kids & Teens',
    desc: 'Personalized programs designed to build clarity, confidence, and presence in young speakers.',
  },
  {
    icon: BookOpen,
    title: 'Storytelling & Expression',
    desc: 'Creative workshops that blend voice, narrative, and performance to unlock authentic expression.',
  },
  {
    icon: Sparkles,
    title: 'Voice & Stage Coaching',
    desc: 'Practical tools for emotion, breath, movement, and audience connection — from classroom to competitions.',
  },
  {
    icon: HeartHandshake,
    title: 'Soft Skills & Emotional IQ',
    desc: 'Nurturing spaces that foster self-awareness, empathy, and communication agility.',
  },
]

function Programs() {
  return (
    <section id="programs" className="py-20 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-10 right-8 h-60 w-60 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-terracotta)', opacity: 0.2 }} />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-beige)', opacity: 0.18 }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center font-serif-clean">What we offer</h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mt-3 font-serif-clean">
          Whether preparing for a school presentation, a competition, or simply speaking up with courage — we guide each student with care, creativity, and structure.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-2xl p-6 border backdrop-blur paper-texture transition" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--solea-sage-20)', color: 'var(--solea-sage)' }}>
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white font-serif-clean">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm leading-relaxed font-serif-clean">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}

export default Programs
