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
    <section id="courses" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Soléa Pathway — Inspired by Cambridge, Guided by Heart</h2>
          <p className="mt-3 text-white/80">Our learning path follows 3 poetic stages — similar to Cambridge progression, yet uniquely emotional.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <s.icon className="w-6 h-6 text-pink-300" />
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-white/80 text-sm">Focus: {s.focus}</p>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-3 text-white/80 text-sm space-y-1 list-disc list-inside">
                {s.skills.map((k) => <li key={k}>{k}</li>)}
              </ul>
              <p className="mt-3 text-white font-medium">✨ Goal: “{s.goal}”</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl p-4 bg-white/5 border border-white/10 flex items-center gap-3"><Theater className="w-5 h-5 text-indigo-300"/>Weekend Masterclasses: Storytelling, Theatre, Voice on Stage</div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10 flex items-center gap-3"><User className="w-5 h-5 text-indigo-300"/>Private Coaching: For sensitive or bilingual children</div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10 flex items-center gap-3"><Rainbow className="w-5 h-5 text-indigo-300"/>Parent Workshops: “How to support your child’s voice at home”</div>
        </div>
      </div>
    </section>
  )
}
