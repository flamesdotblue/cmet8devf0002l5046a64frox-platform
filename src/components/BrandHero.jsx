function CopticRosette() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 text-amber-300" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="2">
        <path d="M32 6v52" />
        <path d="M6 32h52" />
        <path d="M14 14l36 36" />
        <path d="M50 14L14 50" />
      </g>
      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
  );
}

export default function BrandHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[110vw] aspect-[2/1] rounded-full bg-[radial-gradient(closest-side,rgba(251,191,36,0.10),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:
          'radial-gradient(circle at 25% 15%,#fff 1px,transparent 1px),radial-gradient(circle at 75% 85%,#fff 1px,transparent 1px)',
          backgroundSize: '120px 120px, 160px 160px'}} />
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <CopticRosette />
          <span className="tracking-[0.25em] text-sm font-semibold text-amber-300">FOTTOKOGAE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a className="hover:text-amber-300 transition" href="#collection">Collection</a>
          <a className="hover:text-amber-300 transition" href="#ethos">Ethos</a>
          <a className="hover:text-amber-300 transition" href="#invite">Invitation</a>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-10 md:pb-40 md:pt-20">
        <div className="flex flex-col items-start md:items-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-neutral-800/80 bg-black/30 px-4 py-2 text-xs text-neutral-300 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-300"></span>
            AW25 Prelude — The First Fruit
          </div>
          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="block text-amber-300/90">FOTTOKOGAE</span>
            <span className="block text-neutral-200">Fruit of the Tree of Knowledge</span>
            <span className="block text-neutral-400">of Good and Evil</span>
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
            A high luxury house weaving scripture, symbol, and silhouette. Gothic and Coptic cues rendered in modern discipline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#collection" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_10px_30px_-10px_rgba(251,191,36,0.6)] transition hover:brightness-95">
              Explore Collection
            </a>
            <a href="#ethos" className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 hover:border-amber-300 hover:text-amber-300 transition">
              Read the Ethos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
