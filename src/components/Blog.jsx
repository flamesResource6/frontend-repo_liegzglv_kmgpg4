import { NotebookPen } from 'lucide-react'

const samplePosts = [
  { title: 'How one shy girl found her “sun voice” in 3 weeks', tag: 'Inside Soléa' },
  { title: 'Why we teach children to pause before speaking', tag: 'Teacher Notes' },
  { title: 'The art of listening: what kids teach us every week', tag: 'Parent Voices' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-10 left-12 h-60 w-60 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-blush)', opacity: 0.2 }} />
        <div className="absolute bottom-0 right-12 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-sage)', opacity: 0.18 }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">Stories from the classroom. Voices from the heart.</h2>
          <p className="mt-3 text-white/85 font-serif-clean">Reflections, mini-guides, and moments from Soléa. Categories: Inside Soléa · Parent Voices · Teacher Notes · Mini Guides</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {samplePosts.map((p) => (
            <article key={p.title} className="rounded-2xl p-6 border hover:bg-white/5 transition paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <NotebookPen className="w-4 h-4" style={{ color: 'var(--solea-terracotta)' }} />
                <span className="font-serif-clean">{p.tag}</span>
              </div>
              <h3 className="mt-3 text-white font-semibold font-serif-clean">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm font-serif-clean">Coming soon — a glimpse into how we help voices bloom with confidence and care.</p>
              <button className="mt-4 text-sm font-serif-clean" style={{ color: 'var(--solea-sage)' }}>Read more →</button>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}
