"use client";

import { motion } from "framer-motion";
import {
  Layout, ShoppingBag, ArrowRight, Download,
  Map, Briefcase, Wallet,
} from "lucide-react";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
};

/* ─── DATA ───────────────────────────────────────────────── */
const TECH_TEMPLATES = [
  {
    title: "E-commerce Base",
    category: "Marketplace",
    desc: "Infraestructura con integración de Mercado Pago y gestión de inventario. Lista para escalar desde el día uno.",
    icon: ShoppingBag,
    accent: C.teal,  accentA: C.tA,
  },
  {
    title: "SaaS Boilerplate",
    category: "Tech Stack",
    desc: "Dashboard modular con Next.js 14, autenticación y microservicios. Base sólida para cualquier producto digital.",
    icon: Layout,
    accent: C.pink,  accentA: C.pkA,
  },
];

const LIFE_TEMPLATES = [
  {
    title: "Travel Planner Pro",
    category: "Lifestyle",
    desc: "Organizador de itinerarios, presupuestos de vuelo y diario de viaje inteligente.",
    icon: Map,
    accent: C.indigo, accentA: C.iA,
  },
  {
    title: "Job Hunt Tracker",
    category: "Career",
    desc: "Sistema para gestionar vacantes, seguimiento de entrevistas y optimización de CV.",
    icon: Briefcase,
    accent: C.purple, accentA: C.pA,
  },
  {
    title: "Personal Finance",
    category: "Wealth",
    desc: "Control de ingresos, gastos y metas de ahorro con visualización de datos.",
    icon: Wallet,
    accent: C.teal,  accentA: C.tA,
  },
];

/* ─── HELPERS ────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] },
});

/* ─── CARD ───────────────────────────────────────────────── */
function TemplateCard({
  tpl,
  index,
}: {
  tpl: (typeof TECH_TEMPLATES)[0];
  index: number;
}) {
  const Icon = tpl.icon;

  return (
    <motion.div
      {...fadeUp(0.08 * index)}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-400"
      style={{
        background: `${tpl.accentA}.016)`,
        border: `1px solid ${tpl.accentA}.12)`,
        backdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 16px 48px rgba(0,0,0,.25)",
      }}
    >
      {/* top stripe — subtle, only on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg,transparent,${tpl.accent} 40%,transparent)`,
        }}
      />
      {/* always-on faint stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg,transparent,${tpl.accent} 40%,transparent)`,
          opacity: .3,
        }}
      />

      {/* corners */}
      <div className="absolute top-[9px] left-[9px] w-3 h-3 pointer-events-none transition-opacity duration-400 opacity-40 group-hover:opacity-100"
        style={{ borderTop: `1px solid ${tpl.accent}`, borderLeft: `1px solid ${tpl.accent}` }} />
      <div className="absolute top-[9px] right-[9px] w-3 h-3 pointer-events-none transition-opacity duration-400 opacity-40 group-hover:opacity-100"
        style={{ borderTop: `1px solid ${tpl.accent}`, borderRight: `1px solid ${tpl.accent}` }} />
      <div className="absolute bottom-[9px] left-[9px] w-3 h-3 pointer-events-none transition-opacity duration-400 opacity-40 group-hover:opacity-100"
        style={{ borderBottom: `1px solid ${tpl.accent}`, borderLeft: `1px solid ${tpl.accent}` }} />
      <div className="absolute bottom-[9px] right-[9px] w-3 h-3 pointer-events-none transition-opacity duration-400 opacity-40 group-hover:opacity-100"
        style={{ borderBottom: `1px solid ${tpl.accent}`, borderRight: `1px solid ${tpl.accent}` }} />

      <div className="p-7 flex flex-col flex-1">
        {/* icon + category */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="p-3 rounded-xl transition-all duration-300"
            style={{
              background: `${tpl.accentA}.07)`,
              border: `1px solid ${tpl.accentA}.2)`,
            }}
          >
            <Icon size={20} style={{ color: tpl.accent }} />
          </div>
          <span
            className="font-mono text-[9px] tracking-[.12em] uppercase px-3 py-1.5"
            style={{
              border: `1px solid ${tpl.accentA}.18)`,
              color: `${tpl.accent}99`,
              background: `${tpl.accentA}.05)`,
              clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
            }}
          >
            {tpl.category}
          </span>
        </div>

        {/* title */}
        <h3
          className="text-white font-bold mb-3 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.35rem",
            letterSpacing: "-.01em",
          }}
        >
          {tpl.title}
        </h3>

        {/* desc */}
        <p className="text-white/40 text-sm leading-[1.8] font-light flex-grow mb-6">
          {tpl.desc}
        </p>

        {/* footer */}
        <div
          className="flex items-center justify-between pt-5"
          style={{ borderTop: `1px solid ${tpl.accentA}.1)` }}
        >
          <button
            className="flex items-center gap-2 font-mono text-[10px] tracking-[.1em] uppercase transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: `${tpl.accent}88` }}
          >
            <Download size={12} /> Descargar
          </button>
          <ArrowRight
            size={14}
            className="transition-all duration-300 group-hover:translate-x-1"
            style={{ color: `${tpl.accentA}.3)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── SECTION DIVIDER ────────────────────────────────────── */
function SectionLabel({
  num,
  label,
  accent,
  accentA,
}: {
  num: string;
  label: string;
  accent: string;
  accentA: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="font-mono text-[9px] tracking-[.15em] uppercase"
        style={{ color: `${accent}55` }}
      >
        {num}
      </span>
      <div className="w-6 h-px" style={{ background: `${accent}44` }} />
      <span
        className="font-mono text-[10px] tracking-[.13em] uppercase"
        style={{ color: `${accent}88` }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg,${accentA}.2),transparent)` }} />
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function PlantillasPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes stripeAnim { 0%,100%{opacity:.55} 50%{opacity:.2} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
      `}</style>

      <main className="min-h-screen pt-8 pb-24 px-6 md:px-16 md:mr-20">
        <div className="max-w-5xl mx-auto">

          {/* ── Top bar ── */}
          <motion.div
            {...fadeUp(0)}
            className="flex items-center gap-3 mb-14"
          >
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">
              Wendy Nieto
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: C.purple, opacity: .7, animation: "blink 1.8s infinite" }}
            />
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">
              Digital Assets
            </span>
          </motion.div>

          
          {/* ── Sección 1: Business & Tech ── */}
          <motion.div {...fadeUp(0.1)} className="mb-16">
            <SectionLabel
              num="01"
              label="Business & Tech"
              accent={C.purple}
              accentA={C.pA}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TECH_TEMPLATES.map((tpl, i) => (
                <TemplateCard key={i} tpl={tpl} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── Sección 2: Life OS ── */}
          <motion.div {...fadeUp(0.15)}>
            <SectionLabel
              num="02"
              label="Life OS"
              accent={C.indigo}
              accentA={C.iA}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {LIFE_TEMPLATES.map((tpl, i) => (
                <TemplateCard key={i} tpl={tpl} index={i + 2} />
              ))}
            </div>
          </motion.div>

          {/* ── Scroll indicator ── */}
          <div className="flex items-center gap-3 mt-14 font-mono text-[9px] tracking-widest uppercase text-white/20">
            <div
              className="relative w-10 h-px overflow-hidden"
              style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }}
            >
              <div
                className="absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400"
                style={{ animation: "trackSlide 2s ease-in-out infinite" }}
              />
            </div>
            <span>End of assets</span>
          </div>

        </div>
      </main>
    </>
  );
}