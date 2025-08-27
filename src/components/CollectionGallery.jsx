function Card({ title, subtitle, tone, motif }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60 shadow-2xl">
      <div className="relative h-64 w-full">
        <div className={`absolute inset-0 ${tone}`} />
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          {motif}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-50">{title}</h3>
              <p className="text-sm text-neutral-300">{subtitle}</p>
            </div>
            <button className="rounded-full border border-neutral-700/80 bg-black/40 px-4 py-2 text-xs font-semibold text-neutral-200 backdrop-blur hover:border-amber-300 hover:text-amber-300 transition">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchMotif() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d="M200 280c-80 0-120-60-120-120S140 40 200 40s120 60 120 120-40 120-120 120z" fill="url(#g)" />
      <path d="M200 250c-60 0-90-45-90-90s30-90 90-90 90 45 90 90-30 90-90 90z" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <path d="M200 220c-40 0-60-30-60-60s20-60 60-60 60 30 60 60-20 60-60 60z" fill="none" stroke="#fff" strokeOpacity="0.25" />
    </svg>
  );
}

function CrossMotif() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#fff" strokeOpacity="0.18">
        <path d="M200 40v220M100 150h200" />
        <circle cx="200" cy="150" r="70" fill="none" />
        <circle cx="200" cy="150" r="110" fill="none" />
      </g>
    </svg>
  );
}

function LeavesMotif() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 300">
      <g fill="#fff" fillOpacity="0.1">
        <path d="M120 220c40-10 70-40 80-80-40 10-70 40-80 80z" />
        <path d="M280 80c-40 10-70 40-80 80 40-10 70-40 80-80z" />
        <circle cx="200" cy="150" r="6" fillOpacity="0.25" />
      </g>
    </svg>
  );
}

export default function CollectionGallery() {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="font-serif text-2xl text-neutral-100 md:text-3xl">The First Fruit — Capsule</h2>
        <a href="#invite" className="text-sm font-semibold text-amber-300 hover:text-amber-200">Request Access</a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Genesis I — Tailored Coat"
          subtitle="Wool, bone buttons, hand-felled seams"
          tone="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black"
          motif={<ArchMotif />}
        />
        <Card
          title="Seraphim Dress"
          subtitle="Silk-organza, layered wing panels"
          tone="bg-gradient-to-br from-amber-900/20 via-neutral-900 to-black"
          motif={<CrossMotif />}
        />
        <Card
          title="Fig Leaf Clutch"
          subtitle="Vegetable-tanned leather, brass"
          tone="bg-gradient-to-br from-emerald-900/20 via-neutral-900 to-black"
          motif={<LeavesMotif />}
        />
        <Card
          title="Chalice Necklace"
          subtitle="Vermeil, onyx, hand-cast"
          tone="bg-gradient-to-br from-stone-800 via-neutral-900 to-black"
          motif={<ArchMotif />}
        />
        <Card
          title="Cherubim Boot"
          subtitle="Calfskin, stacked leather heel"
          tone="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black"
          motif={<CrossMotif />}
        />
        <Card
          title="Censer Knit"
          subtitle="Cashmere, incensory cable motif"
          tone="bg-gradient-to-br from-amber-800/10 via-neutral-900 to-black"
          motif={<LeavesMotif />}
        />
      </div>
    </section>
  );
}
