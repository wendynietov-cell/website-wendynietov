"use client";

import { motion } from "framer-motion";
import { 
  Layout, Rocket, ShoppingBag, ArrowRight, Download, 
  Map, Briefcase, Wallet, Heart 
} from "lucide-react";

/* ─── Data de Plantillas Actualizada ─────────────────────────── */
const TECH_TEMPLATES = [
  {
    title: "E-commerce Base",
    category: "Marketplace",
    desc: "Infraestructura con integración de Mercado Pago y gestión de inventario.",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "#5effd8",
  },
  {
    title: "SaaS Boilerplate",
    category: "Tech Stack",
    desc: "Dashboard modular con Next.js 14, autenticación y microservicios.",
    icon: <Layout className="w-5 h-5" />,
    color: "#e040a0",
  },
];

const LIFE_TEMPLATES = [
  {
    title: "Travel Planner Pro",
    category: "Lifestyle",
    desc: "Organizador de itinerarios, presupuestos de vuelo y diario de viaje inteligente.",
    icon: <Map className="w-5 h-5" />,
    color: "#6366f1",
  },
  {
    title: "Job Hunt Tracker",
    category: "Career",
    desc: "Sistema para gestionar vacantes, seguimiento de entrevistas y optimización de CV.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "#f59e0b",
  },
  {
    title: "Personal Finance",
    category: "Wealth",
    desc: "Control de ingresos, gastos y metas de ahorro con visualización de datos.",
    icon: <Wallet className="w-5 h-5" />,
    color: "#10b981",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function PlantillasPage() {
  return (
    <>
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(180, 79, 223, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .glass-card:hover {
          border-color: rgba(180, 79, 223, 0.4);
          background: rgba(180, 79, 223, 0.04);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>

      <div className="min-h-screen relative z-10 pt-12 pb-20 px-6 md:px-16 bg-[#030308]">
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          
          {/* Top bar */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Wendy Nieto</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/70" style={{ animation: "blink 1.8s infinite" }} />
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Plantillas</span>
          </div>
          
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-20">
          </motion.div>

          {/* Sección 1: Business & Tech */}
          <div className="mb-20">
            <h2 className="font-mono text-[11px] tracking-[.3em] uppercase text-purple-500 mb-10 flex items-center gap-4">
              <span>01. Business & Tech</span>
              <div className="h-px bg-purple-500/20 flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TECH_TEMPLATES.map((tpl, i) => (
                <TemplateCard key={i} tpl={tpl} index={i} />
              ))}
            </div>
          </div>

          {/* Sección 2: Life OS (Gente Normal) */}
          <div>
            <h2 className="font-mono text-[11px] tracking-[.3em] uppercase text-blue-400 mb-10 flex items-center gap-4">
              <span>02. Life OS</span>
              <div className="h-px bg-blue-400/20 flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LIFE_TEMPLATES.map((tpl, i) => (
                <TemplateCard key={i} tpl={tpl} index={i + 2} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function TemplateCard({ tpl, index }: { tpl: any; index: number }) {
  return (
    <motion.div
      {...fadeUp(0.1 * index)}
      className="glass-card rounded-2xl p-8 flex flex-col h-full group"
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="p-3 rounded-xl bg-white/5 text-white transition-colors group-hover:bg-white/10" 
             style={{ border: `1px solid ${tpl.color}44` }}>
          {tpl.icon}
        </div>
        <span className="font-mono text-[9px] tracking-widest uppercase py-1 px-2 bg-white/5 rounded text-white/40">
          {tpl.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
        {tpl.title}
      </h3>
      
      <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
        {tpl.desc}
      </p>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
        <button className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">
          <Download size={14} /> Descargar
        </button>
        <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
}