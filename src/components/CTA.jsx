function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-10 left-1/3 h-60 w-60 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-sage)', opacity: 0.2 }} />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full watercolor-blob" style={{ backgroundColor: 'var(--solea-blush)', opacity: 0.18 }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-clean">Let’s speak with Soléa</h2>
        <p className="mt-3 text-white/85 max-w-2xl mx-auto font-serif-clean">
          Ready to begin? Tell us about your goals and we’ll recommend a path. We’ll reply within one business day.
        </p>
        <a
          href="mailto:hello@solea.school?subject=I%20want%20to%20find%20my%20voice%20with%20Solea"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-colors"
          style={{ backgroundColor: 'var(--solea-terracotta)' }}
        >
          Email us: hello@solea.school
        </a>
        <p className="mt-4 text-white/70 text-sm font-serif-clean">
          Or call us at +373 000 000 — Chișinău, Moldova
        </p>
      </div>

      <div className="mt-12 w-full h-[10px] wave-line" />
    </section>
  )
}

export default CTA
