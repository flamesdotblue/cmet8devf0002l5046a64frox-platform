function Icon({ children, label }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-black/30 text-amber-300">
        {children}
      </div>
      <p className="text-sm leading-relaxed text-neutral-300">{label}</p>
    </div>
  );
}

export default function DevotionalDetails() {
  return (
    <section id="ethos" className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-10" aria-hidden="true">
        <div className="mx-auto h-full max-w-5xl bg-[radial-gradient(closest-side,rgba(251,191,36,0.12),transparent_70%)]" />
      </div>
      <h2 className="font-serif text-2xl text-neutral-100 md:text-3xl">Ethos</h2>
      <p className="mt-6 text-neutral-300 md:text-lg">
        FOTTOKOGAE stands for Fruit of the Tree of Knowledge of Good and Evil. We look to sacred texts and liturgical forms not to copy, but to commune. The silhouette is a sanctuary; craftsmanship, a rite.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Icon label="Gothic and Coptic geometries inform our pattern-cutting — arches, rosettes, and interlace as living structure.">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8v12h2V10a6 6 0 1 1 12 0v12h2V10a8 8 0 0 0-8-8z"/></svg>
        </Icon>
        <Icon label="Noble materials, reverent finishes: hand-felled seams, bone and brass, organza and onyx.">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10l1 6-6 12L6 9l1-6zM9 5l-.5 3h7L15 5H9z"/></svg>
        </Icon>
        <Icon label="Dressed with intention — garments as devotion, not decoration. Fitted to the age, faithful to the source.">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4-4 4-4-4 4-4zm-7 9l4 4-4 4 4 4 4-4-4-4 4-4-4-4-4 4zm14 0l4 4-4 4-4-4 4-4z"/></svg>
        </Icon>
      </div>
    </section>
  );
}
