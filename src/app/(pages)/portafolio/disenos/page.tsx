"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Search } from "lucide-react";
import Image from "next/image";

/* ─── PALETA ─────────────────────────────────────────────── */
const C = {
  purple: "#b44fdf", pA: "rgba(180,79,223,",
  pink:   "#e040a0", pkA: "rgba(224,64,160,",
  teal:   "#5effd8", tA: "rgba(94,255,216,",
  indigo: "#a5b4fc", iA: "rgba(165,180,252,",
  bg:     "#06060f",
};

/* ─── DATA ───────────────────────────────────────────────── */
const DESIGNS = [
  { title: "Startup Branding Kit",  client: "BuscArt",      type: "Brand Identity", accent: C.purple, accentA: C.pA  },
  { title: "Social Media Campaign", client: "Tech Event",   type: "Marketing",      accent: C.teal,   accentA: C.tA  },
  { title: "Pitch Deck UI/UX",      client: "Fintech App",  type: "Presentation",   accent: C.pink,   accentA: C.pkA },
  { title: "Abstract Art Series",   client: "Personal",     type: "Digital Art",    accent: C.indigo, accentA: C.iA  },
  { title: "E-commerce Rebrand",    client: "Retail Co.",   type: "Brand Identity", accent: C.pink,   accentA: C.pkA },
  { title: "Event Visual Identity", client: "MedellínTech", type: "Marketing",      accent: C.teal,   accentA: C.tA  },
  { title: "App Onboarding Flow",   client: "SaaS Client",  type: "UI Design",      accent: C.indigo, accentA: C.iA  },
  { title: "Newsletter Template",   client: "BuscArt",      type: "Marketing",      accent: C.purple, accentA: C.pA  },
];

const ALL_TYPES = ["Todos", ...Array.from(new Set(DESIGNS.map(d => d.type)))];
const TOOLS = ["Canva", "Figma", "Branding", "Social Content", "Pitch Decks", "UI Design"];

/* ─── CARD ───────────────────────────────────────────────── */
function DesignCard({ item, index }: { item: typeof DESIGNS[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: .97 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className="group"
      style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}
    >
      {/* Espejo visual — efecto de gradiente animado */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <div 
          className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, ${item.accentA}.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${item.accentA}.08) 0%, transparent 50%),
              linear-gradient(135deg, ${item.accentA}.05 0%, transparent 70%)
            `,
            animation: "shimmer 8s ease-in-out infinite"
          }}
        />
        {/* Patrón geométrico */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-4 left-4 w-16 h-16 border-2 rounded-full"
            style={{ borderColor: `${item.accent}30`, transform: "rotate(15deg)" }}
          />
          <div 
            className="absolute bottom-4 right-4 w-12 h-12 border-2"
            style={{ borderColor: `${item.accent}25`, transform: "rotate(-10deg)" }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-20 h-20 border-2 rounded-lg"
            style={{ 
              borderColor: `${item.accent}20`, 
              transform: "translate(-50%, -50%) rotate(25deg)",
              animation: "float 6s ease-in-out infinite"
            }}
          />
        </div>
        {/* Overlay sutil en hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(135deg, ${item.accentA}.18) 0%, transparent 60%)` }}
        />
        {/* Badge tipo */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] tracking-[.1em] uppercase px-2.5 py-1"
            style={{
              background: "rgba(6,6,15,.75)", backdropFilter: "blur(8px)",
              border: `1px solid ${item.accentA}.3)`, color: `${item.accent}`,
              borderRadius: 4,
            }}>
            {item.type}
          </span>
        </div>
        {/* Botón externo en hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="p-2 transition-all hover:-translate-y-0.5"
            style={{ background: "rgba(6,6,15,.8)", backdropFilter: "blur(8px)", borderRadius: 8, border: `1px solid ${item.accentA}.25)` }}>
            <ExternalLink size={11} style={{ color: item.accent }} />
          </button>
        </div>
      </div>

      {/* Info — siempre visible */}
      <div className="px-4 py-3 flex items-center justify-between gap-2">
        <div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", fontWeight: 500, color: "rgba(255,255,255,.88)", margin: 0, lineHeight: 1.3 }}>
            {item.title}
          </p>
          <p className="font-mono text-[9px] tracking-[.08em] uppercase mt-1" style={{ color: "rgba(255,255,255,.35)", margin: 0 }}>
            {item.client}
          </p>
        </div>
        {/* Dot de color */}
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.accent, flexShrink: 0, opacity: 0.7 }} />
      </div>
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function DisenoPage() {
  const [query, setQuery]           = useState("");
  const [activeType, setActiveType] = useState("Todos");

  const filtered = useMemo(() =>
    DESIGNS.filter(d => {
      const matchType = activeType === "Todos" || d.type === activeType;
      const q = query.toLowerCase();
      const matchQ = q === "" || d.title.toLowerCase().includes(q)
        || d.client.toLowerCase().includes(q) || d.type.toLowerCase().includes(q);
      return matchType && matchQ;
    }),
  [query, activeType]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@300;400;500&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        @keyframes scanDown { from{top:0} to{top:100vh} }
        @keyframes stripeAnim { 0%,100%{opacity:.45} 50%{opacity:.15} }
        @keyframes shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes float { 0%,100%{transform:translate(-50%, -50%) rotate(25deg) translateY(0px)} 50%{transform:translate(-50%, -50%) rotate(25deg) translateY(-10px)} }
      `}</style>

      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.07]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 7s linear infinite" }} />

      <main className="relative min-h-screen pt-8 pb-24 px-6 md:px-16 md:mr-20 z-10">
        <div className="max-w-5xl mx-auto">

          {/* top bar */}
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Wendy Nieto</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.purple, opacity: .7, animation: "blink 1.8s infinite" }} />
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Diseño & Branding</span>
          </div>

          {/* ── Filtros ── */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Buscador */}
            <div className="relative flex-1 max-w-xs">
              <Search size={12} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,.35)" }} />
              <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full font-mono text-[11px] tracking-[.04em] placeholder:text-white/20 text-white/70 bg-transparent outline-none pl-9 pr-8 py-2.5"
                style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 10, background: "rgba(255,255,255,.025)" }}
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-80 transition-opacity">
                  <X size={11} style={{ color: "rgba(255,255,255,.85)" }} />
                </button>
              )}
            </div>

            {/* Chips de tipo */}
            <div className="flex gap-2 flex-wrap items-center">
              {ALL_TYPES.map(type => {
                const active = activeType === type;
                return (
                  <button key={type} onClick={() => setActiveType(type)}
                    className="font-mono text-[9px] tracking-[.1em] uppercase px-3 py-2 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      borderRadius: 6,
                      border: `1px solid ${active ? "rgba(180,79,223,.5)" : "rgba(255,255,255,.1)"}`,
                      background: active ? "rgba(180,79,223,.12)" : "transparent",
                      color: active ? C.purple : "rgba(255,255,255,.4)",
                    }}>
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* contador */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] tracking-[.1em] uppercase text-white/22">
              {filtered.length} pieza{filtered.length !== 1 ? "s" : ""}
              {activeType !== "Todos" && ` · ${activeType}`}
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,.06)" }} />
          </div>

          {/* ── Grid 3 columnas ── */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <DesignCard key={item.title} item={item} index={i} />
                ))
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="col-span-full py-20 text-center">
                  <p className="font-mono text-[10px] tracking-[.12em] uppercase text-white/18">
                    Sin resultados{query ? ` para "${query}"` : ""}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Tools panel ── */}
          <div className="relative rounded-2xl overflow-hidden px-8 py-7"
            style={{ background: "rgba(255,255,255,.025)", border: "1px solid rgba(255,255,255,.08)" }}>
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg,transparent,#b44fdf 35%,#e040a0 65%,transparent)", animation: "stripeAnim 4s ease-in-out infinite" }} />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-2 text-white/30">Herramientas</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-.01em", margin: 0 }}>
                  Stack Creativo
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map(skill => (
                  <span key={skill} className="font-mono text-[9px] tracking-[.09em] uppercase px-3 py-1.5"
                    style={{
                      borderRadius: 6,
                      border: "1px solid rgba(180,79,223,.2)",
                      color: "rgba(180,79,223,.7)",
                      background: "rgba(180,79,223,.05)",
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="flex items-center gap-3 mt-10 font-mono text-[9px] tracking-widest uppercase text-white/18">
            <div className="relative w-10 h-px overflow-hidden" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400"
                style={{ animation: "trackSlide 2s ease-in-out infinite" }} />
            </div>
            <span>End of portfolio</span>
          </div>

        </div>
      </main>
    </>
  );
}
