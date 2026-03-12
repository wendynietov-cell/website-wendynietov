"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Cpu, Trophy } from "lucide-react";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
  bg:     "#06060f",
};

/* ─── DATA ───────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "BuscArt Platform",
    type: "Fullstack Ecosystem",
    desc: "Infraestructura logística para artistas emergentes. Sistema de contratación en tiempo real, pasarela de pagos con Mercado Pago y arquitectura de microservicios escalable.",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/tu-usuario/buscart",
    demo: "https://buscart.co",
    source: "GitHub",
    SourceIcon: Code2,
    accent: C.teal, accentA: C.tA,
  },
  {
    title: "AI Business Advisor",
    type: "AI Implementation",
    desc: "Modelo de análisis de datos para identificar oportunidades de mercado Greenfield y optimización de ventas consultivas. Entrenado con datos reales del ecosistema comercial.",
    tech: ["Python", "Hugging Face", "OpenAI API"],
    github: null,
    demo: "https://huggingface.co/tu-usuario",
    source: "Hugging Face",
    SourceIcon: Cpu,
    accent: C.purple, accentA: C.pA,
  },
  {
    title: "Hackathon: Urban Art",
    type: "Award Winning Project",
    desc: "Solución tecnológica desarrollada en 48 horas para la gestión de espacios culturales urbanos. Primer lugar en innovación social entre 40 equipos participantes.",
    tech: ["React Native", "Firebase", "Maps API"],
    github: null,
    demo: "#",
    source: "Hackathon · 1er lugar",
    SourceIcon: Trophy,
    accent: C.pink, accentA: C.pkA,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] },
});

/* ─── PROJECT CARD ───────────────────────────────────────── */
function ProjectCard({ p, index }: { p: typeof PROJECTS[0]; index: number }) {
  const Icon = p.SourceIcon;
  return (
    <motion.div
      {...fadeUp(0.08 * index)}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: `${p.accentA}.014)`,
        border: `1px solid ${p.accentA}.11)`,
        backdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.03), 0 16px 48px rgba(0,0,0,.28)",
      }}
    >
      {/* stripe — muy sutil */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg,transparent,${p.accent} 40%,transparent)`, opacity: .22 }} />

      {/* corners */}
      {([["top-[9px]","left-[9px]","borderTop","borderLeft"],["top-[9px]","right-[9px]","borderTop","borderRight"],
         ["bottom-[9px]","left-[9px]","borderBottom","borderLeft"],["bottom-[9px]","right-[9px]","borderBottom","borderRight"]]
      ).map(([t, l, b1, b2], i) => (
        <div key={i} className={`absolute ${t} ${l} w-3 h-3 pointer-events-none opacity-25 group-hover:opacity-60 transition-opacity duration-400`}
          style={{ [b1]: `1px solid ${p.accent}`, [b2]: `1px solid ${p.accent}` }} />
      ))}

      <div className="flex flex-col flex-1 p-8">
        {/* source + links */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <Icon size={13} style={{ color: `${p.accent}88` }} />
            <span className="font-mono text-[9px] tracking-[.12em] uppercase" style={{ color: `${p.accent}66` }}>
              {p.source}
            </span>
          </div>

          <div className="flex gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ border: `1px solid ${p.accentA}.14)`, background: `${p.accentA}.04)`, color: `${p.accent}88` }}>
                <Github size={14} />
              </a>
            )}
            {p.demo && p.demo !== "#" && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ border: `1px solid ${p.accentA}.14)`, background: `${p.accentA}.04)`, color: `${p.accent}88` }}>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* type */}
        <p className="font-mono text-[9px] tracking-[.12em] uppercase mb-2" style={{ color: `${p.accent}55` }}>
          {p.type}
        </p>

        {/* title */}
        <h3 className="text-white font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", letterSpacing: "-.02em", fontStyle: "italic" }}>
          {p.title}
        </h3>

        {/* desc */}
        <p className="text-white/42 text-sm leading-[1.85] font-light flex-1 mb-6">
          {p.desc}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-2 pt-5"
          style={{ borderTop: `1px solid ${p.accentA}.09)` }}>
          {p.tech.map(t => (
            <span key={t} className="font-mono text-[8.5px] tracking-[.09em] uppercase px-2.5 py-1.5"
              style={{
                border: `1px solid ${p.accentA}.15)`,
                color: `${p.accent}70`,
                background: `${p.accentA}.04)`,
                clipPath: "polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)",
              }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function ProyectosPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes stripeAnim { 0%,100%{opacity:.45} 50%{opacity:.15} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
      `}</style>

      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.07]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 7s linear infinite" }} />

      <main className="relative min-h-screen pt-12 pb-24 px-6 md:px-16 md:mr-20 z-10">
        <div className="max-w-5xl mx-auto">

          {/* top bar */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-14">
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Wendy Nieto</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.purple, opacity: .65, animation: "blink 1.8s infinite" }} />
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Proyectos</span>
          </motion.div>

          {/* grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={i} p={p} index={i} />
            ))}
          </div>

          {/* CTA panel */}
          <motion.div {...fadeUp(0.25)}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(180,79,223,.015)",
              border: "1px solid rgba(180,79,223,.11)",
              backdropFilter: "blur(24px) saturate(1.4)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.03), 0 16px 40px rgba(0,0,0,.26)",
            }}>
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg,transparent,#b44fdf 35%,#e040a0 65%,transparent)", animation: "stripeAnim 4s ease-in-out infinite" }} />
            {([["top-[9px]","left-[9px]","borderTop","borderLeft"],["top-[9px]","right-[9px]","borderTop","borderRight"],
               ["bottom-[9px]","left-[9px]","borderBottom","borderLeft"],["bottom-[9px]","right-[9px]","borderBottom","borderRight"]]
            ).map(([t,l,b1,b2],i) => (
              <div key={i} className={`absolute ${t} ${l} w-3 h-3 pointer-events-none`}
                style={{ [b1]: "1px solid rgba(180,79,223,.22)", [b2]: "1px solid rgba(180,79,223,.22)" }} />
            ))}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10">
              <div>
                <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-2"
                  style={{ color: "rgba(180,79,223,.55)" }}>
                  Ecosistema técnico
                </p>
                <h2 className="text-white font-bold mb-1.5 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", letterSpacing: "-.01em" }}>
                  Explora mis repositorios
                </h2>
                <p className="text-white/35 text-sm font-light max-w-sm leading-relaxed">
                  Documentación completa, repos abiertos y contribuciones a la comunidad tech.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.1em] uppercase px-5 py-3 text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#b44fdf,#e040a0)",
                    clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                    boxShadow: "0 5px 18px rgba(180,79,223,.2)",
                  }}>
                  <Github size={13} /> GitHub
                </a>
                <a href="https://huggingface.co/tu-usuario" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.1em] uppercase px-5 py-3 transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(180,79,223,.25)",
                    color: "rgba(180,79,223,.75)",
                    background: "rgba(180,79,223,.05)",
                    clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                  }}>
                  <Cpu size={13} /> Hugging Face
                </a>
              </div>
            </div>
          </motion.div>

          {/* scroll indicator */}
          <div className="flex items-center gap-3 mt-10 font-mono text-[9px] tracking-widest uppercase text-white/18">
            <div className="relative w-10 h-px overflow-hidden" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400"
                style={{ animation: "trackSlide 2s ease-in-out infinite" }} />
            </div>
            <span>End of projects</span>
          </div>

        </div>
      </main>
    </>
  );
}