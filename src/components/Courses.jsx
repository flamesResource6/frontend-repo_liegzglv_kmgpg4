import { Sprout, Leaf, Flower2, Theater, Rainbow, User } from 'lucide-react'

const stages = [
  {
    icon: Sprout,
    title: 'Voice Seed (5–7 years)',
    focus: 'Foundations of confidence & expression',
    desc: 'Children learn to use their voice through play, rhythm, and creative storytelling.',
    skills: [
      'Speaking in small groups',
      'Breathing & body awareness',
      'Naming emotions',
      'Listening to others',
    ],
    goal: 'I can say what I feel.'
  },
  {
    icon: Leaf,
    title: 'Growing Voice (8–10 years)',
    focus: 'Storytelling & self-expression',
    desc: 'Students explore imagination, teamwork, and clear communication.',
    skills: [
      'Story presentation',
      'Empathy and group dialogue',
      'Vocabulary of emotions',
      'First mini-presentations',
    ],
    goal: 'I can share my thoughts and ideas confidently.'
  },
  {
    icon: Flower2,
    title: 'Flourishing Voice (11–12 years)',
    focus: 'Presence & leadership communication',
    desc: 'Children learn to express opinions, debate respectfully, and inspire others.',
    skills: [
      'Speech writing',
      'Public speaking posture & tone',
      'Self-reflection & mindfulness',
      'Emotional resilience',
    ],
    goal: 'I can speak with clarity, confidence, and kindness.'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <style>{`
          @keyframes driftX { 0% { transform: translateX(0) } 50% { transform: translateX(16px) } 100% { transform: translateX(0) } }
        `}</style>
        <div className="absolute -top-12 left-1/4 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-sage)', opacity: 0.22, animation: 'driftX 11s ease-in-out infinite' }} />
        <div className="absolute -bottom-8 right-1/4 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-blush)', opacity: 0.22, animation: 'driftX 9s ease-in-out infinite' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">The Soléa Pathway — Inspired by Cambridge, Guided by Heart</h2>
          <p className="mt-3 text-white/85 font-serif-clean">Our learning path follows 3 poetic stages — similar to Cambridge progression, yet uniquely emotional.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 border backdrop-blur paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--solea-beige-20)' }}>
                  <s.icon className="w-5 h-5" style={{ color: 'var(--solea-terracotta)' }} />
                </div>
                <h3 className="text-white font-semibold font-serif-clean">{s.title}</h3>
              </div>
              <p className="mt-2 text-white/85 text-sm font-serif-clean">Focus: {s.focus}</p>
              <p className="mt-2 text-white/80 text-sm leading-relaxed font-serif-clean">{s.desc}</p>
              <ul className="mt-3 text-white/85 text-sm space-y-1 list-disc list-inside font-serif-clean">
                {s.skills.map((k) => <li key={k}>{k}</li>)}
              </ul>
              <p className="mt-3 text-white font-medium font-hand text-lg">✨ Goal: “{s.goal}”</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl p-4 border backdrop-blur flex items-center gap-3 paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}><Theater className="w-5 h-5" style={{ color: 'var(--solea-sage)' }}/>Weekend Masterclasses: Storytelling, Theatre, Voice on Stage</div>
          <div className="rounded-xl p-4 border backdrop-blur flex items-center gap-3 paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}><User className="w-5 h-5" style={{ color: 'var(--solea-terracotta)' }}/>Private Coaching: For sensitive or bilingual children</div>
          <div className="rounded-xl p-4 border backdrop-blur flex items-center gap-3 paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}><Rainbow className="w-5 h-5" style={{ color: 'var(--solea-blush)' }}/>Parent Workshops: “How to support your child’s voice at home”</div>
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}
