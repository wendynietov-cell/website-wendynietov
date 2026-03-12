const TAGS = [
  'Sales Strategy',
  'Pipeline Development',
  'Enterprise Deals',
  'GTM Planning',
  'RevOps',
  'Sales Coaching',
  'LATAM & USA',
  'SaaS & Tech',
];

export function Marquee() {
  return (
    <section className="py-10 overflow-hidden border-t border-b border-white/5 relative z-1">
      <div className="flex gap-16 animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 shrink-0">
            {TAGS.map((label, j) => (
              <div key={j} className="flex items-center gap-3 font-semibold text-sm tracking-wider uppercase text-white/50 whitespace-nowrap">
                <div className={`w-1.5 h-1.5 rounded-full shadow-lg ${
                  j % 3 === 0 ? 'bg-emerald-400 shadow-emerald-400/50' :
                  j % 3 === 1 ? 'bg-rose-400 shadow-rose-400/50' :
                                'bg-purple-400 shadow-purple-400/50'
                }`} />
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
