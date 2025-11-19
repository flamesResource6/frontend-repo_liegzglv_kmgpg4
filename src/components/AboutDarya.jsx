export default function AboutDarya() {
  return (
    <section id="about-darya" className="py-20 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-12 right-10 h-56 w-56 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-beige)', opacity: 0.22 }} />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-terracotta)', opacity: 0.18 }} />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl p-8 border paper-texture" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">Where Heart Meets Structure — the Story Behind Soléa</h2>
          <p className="mt-4 text-white/85 font-serif-clean">
            Darya Karaush is the founder and educator behind Soléa Mini School, a space born from her love for communication, childhood creativity, and emotional growth.
          </p>
          <p className="mt-3 text-white/85 font-serif-clean">
            With a background in Economics, Finance, and Project Management, Darya brings a rare balance of structure and sensitivity into every lesson. Before creating Soléa, she worked in business process management and education, including at Heritage International School, where she supports young learners on the Cambridge Primary Pathway.
          </p>
          <p className="mt-3 text-white/85 font-serif-clean">
            Her approach combines the precision of planning with the softness of presence — each class is designed not only to teach, but to help children feel seen, understood, and confident.
          </p>
          <p className="mt-3 font-hand text-white text-xl">“Education should feel like music — structured, but full of emotion.”</p>
          <p className="mt-3 text-white/85 font-serif-clean">
            In Soléa, children learn to express their voices, build confidence, and connect to themselves through creative storytelling, speech, and emotional literacy — all in a space guided by care, clarity, and beauty.
          </p>
        </div>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}
