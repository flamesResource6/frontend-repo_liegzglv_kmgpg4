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
    <section id="programs" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What we offer</h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mt-3">
          Whether preparing for a school presentation, a competition, or simply speaking up with courage — we guide each student with care, creativity, and structure.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {programs.map((p) => (
            <div key={p.title} className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/20 text-indigo-300">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
