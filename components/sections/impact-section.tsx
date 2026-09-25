const disciplines = [
  { value: "MEDIA", label: "Brand & Communication" },
  { value: "TECHNOLOGY", label: "Platforms & Infrastructure" },
  { value: "AUTOMATION", label: "Systems & Operations" },
  { value: "VENTURES", label: "Build & Operate" },
]

export function ImpactSection() {
  return <section className="px-6 py-24 bg-zinc-900/20"><div className="max-w-5xl mx-auto"><div className="text-center mb-12"><p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Our Foundation</p><h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Built Across Four Disciplines.</h2><p className="text-zinc-500 max-w-lg mx-auto text-balance">IVT Media Group combines creative, technical, operational, and venture capabilities under one operating company.</p></div><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{disciplines.map((discipline) => <div key={discipline.value} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/80 transition-all duration-300 group text-center relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-t from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><div className="relative"><p className="font-display text-xl md:text-2xl font-bold text-zinc-100 mb-2">{discipline.value}</p><p className="text-xs text-zinc-500">{discipline.label}</p></div></div>)}</div></div></section>
}
