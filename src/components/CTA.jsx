function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_10%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s speak with Solea</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Ready to begin? Tell us about your goals and we’ll recommend a path. We’ll reply within one business day.
        </p>
        <a
          href="mailto:hello@solea.school?subject=I%20want%20to%20find%20my%20voice%20with%20Solea"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-colors"
        >
          Email us: hello@solea.school
        </a>
        <p className="mt-4 text-white/60 text-sm">
          Or call us at +373 000 000 — Chișinău, Moldova
        </p>
      </div>
    </section>
  )
}

export default CTA
