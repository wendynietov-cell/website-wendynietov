"use client";

import { motion } from "framer-motion";
import { INSIGHTS, PUBLICATIONS } from "@/lib/constants";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
};

const ACCENTS = [C.purple, C.pink, C.teal, C.indigo];
const ACCENT_A = [C.pA, C.pkA, C.tA, C.iA];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

/* ─── INSIGHT CARD MEJORADA ──────────────────────────────── */
function InsightCard({ insight, index, featured = false }: { insight: any; index: number; featured?: boolean }) {
  const acc  = ACCENTS[index % 4];
  const accA = ACCENT_A[index % 4];

  return (
    <motion.article
      {...fadeUp(index * 0.07)}
      className={`group relative rounded-[2rem] overflow-hidden flex flex-col ${
        featured ? "md:flex-row md:col-span-2" : "md:flex-col"
      } cursor-pointer transition-all duration-500`}
      style={{
        background: `${accA}.015)`,
        border: `1px solid ${accA}.12)`,
        backdropFilter: "blur(30px) saturate(1.2)",
      }}
    >
      {/* Luz ambiental en hover */}
      <div className="absolute -inset-20 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${acc}, transparent 70%)` }} />

      {/* Imagen */}
      <div className={`relative overflow-hidden shrink-0 ${
        featured ? "w-full md:w-[45%] h-64 md:h-auto" : "w-full h-52"
      }`}>
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          style={{ mixBlendMode: "luminosity" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-transparent to-transparent opacity-60" />
        
        <span className="absolute top-5 left-5 z-10 font-mono text-[9px] tracking-[.15em] uppercase px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70">
          {insight.category}
        </span>
      </div>

      {/* Contenido */}
      <div className={`flex flex-col flex-1 p-7 md:p-9 gap-4 relative z-10 ${featured ? "justify-center" : ""}`}>
        <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-white/20">
          <span>{insight.date}</span>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <span style={{ color: acc }}>4 min read</span>
        </div>

        <h2 className="text-white/90 font-bold leading-[1.2] group-hover:text-white transition-colors"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: featured ? "2.2rem" : "1.5rem", 
            letterSpacing: "-.02em" 
          }}>
          {insight.title}
        </h2>

        <p className="text-white/40 text-[0.92rem] leading-relaxed font-light line-clamp-3">
          {insight.excerpt}
        </p>

        {/* Footer Card */}
        <div className="flex items-center gap-3 pt-4 mt-auto">
          <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
          <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-all">
            <span className="font-mono text-[9px] tracking-widest uppercase text-white">Leer análisis</span>
            <ArrowUpRight size={14} style={{ color: acc }} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function InsightsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
      `}</style>

      {/* Laser line background */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.07]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 8s linear infinite" }} />

      <main className="relative min-h-screen pt-12 pb-24 px-6 md:px-16 md:mr-20 z-10">
        <div className="max-w-6xl mx-auto">

          {/* Top Bar */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-white/20">Wendy Nieto</span>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 via-transparent to-transparent" />
            <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[.2em] uppercase text-white/20">Insights</span>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div {...fadeUp(0.05)} className="mb-16">
            <h1 className="leading-[0.9] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, letterSpacing: "-.03em" }}>
              <span className="text-white">Pensamiento & </span>
              <span className="font-light italic"
                style={{ 
                  background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink})`, 
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", 
                  backgroundSize: "200%", animation: "shimmer 6s ease infinite" 
                }}>
                Estrategia
              </span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl leading-relaxed font-light">
              Análisis sobre la intersección del arte, la logística digital y el desarrollo de plataformas en mercados emergentes.
            </p>
          </motion.div>

          {/* ── GRID INSIGHTS (Mezcla de Destacado + Columnas) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {INSIGHTS.map((insight, i) => (
              <InsightCard 
                key={insight.id} 
                insight={insight} 
                index={i} 
                featured={i === 0} // El primero es el grande
              />
            ))}
          </div>

          {/* ── PUBLICACIONES EXTERNAS ── */}
          <section>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[.2em] uppercase text-purple-400/50">
                Media & Press
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PUBLICATIONS.map((pub, i) => (
                <motion.a
                  key={i}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(0.1 + (i * 0.05))}
                  className="group relative flex items-center justify-between rounded-2xl p-6 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all"
                >
                  <div className="relative z-10">
                    <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">
                      {pub.publisher} • {pub.date}
                    </p>
                    <h3 className="text-white/80 font-medium text-lg group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {pub.title}
                    </h3>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-purple-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              ))}
            </div>
          </section>

          {/* Footer decorative */}
          <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
             <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-white/10">
                <div className="w-10 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                <span>End of archive</span>
             </div>
             <span className="font-mono text-[9px] text-white/5 uppercase">BuscArt © 2026</span>
          </div>

        </div>
      </main>
    </>
  );
}