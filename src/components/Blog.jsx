import { NotebookPen, Sparkles } from 'lucide-react'

const samplePosts = [
  { title: 'How one shy girl found her “sun voice” in 3 weeks', tag: 'Inside Soléa' },
  { title: 'Why we teach children to pause before speaking', tag: 'Teacher Notes' },
  { title: 'The art of listening: what kids teach us every week', tag: 'Parent Voices' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Stories from the classroom. Voices from the heart.</h2>
          <p className="mt-3 text-white/80">Reflections, mini-guides, and moments from Soléa. Categories: Inside Soléa · Parent Voices · Teacher Notes · Mini Guides</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {samplePosts.map((p) => (
            <article key={p.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <NotebookPen className="w-4 h-4" />
                <span>{p.tag}</span>
              </div>
              <h3 className="mt-3 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">Coming soon — a glimpse into how we help voices bloom with confidence and care.</p>
              <button className="mt-4 text-indigo-300 text-sm hover:text-indigo-200">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
