"use client";

import { motion } from "framer-motion";
import { Share2, TrendingUp, Users, MessageSquare, Linkedin, Instagram, Twitter, BarChart3, Globe } from "lucide-react";

/* ─── Data de Estrategias & Resultados ─────────────────────── */
const SOCIAL_STRATEGIES = [
  {
    title: "LinkedIn B2B Growth",
    client: "Tech Startups",
    metric: "+180% Engagement",
    desc: "Posicionamiento de marca personal para fundadores y generación de leads mediante Thought Leadership.",
    tags: ["LinkedIn", "B2B", "Growth"],
    icon: <Linkedin className="w-5 h-5" />,
    color: "#5effd8"
  },
  {
    title: "TikTok & Reels Mastery",
    client: "Digital Brands",
    metric: "1M+ Views Avg",
    desc: "Creación de contenido vertical de alto impacto basado en tendencias para posicionamiento acelerado.",
    tags: ["TikTok", "Reels", "Viral"],
    icon: <Globe className="w-5 h-5" />,
    color: "#e040a0"
  },
  {
    title: "Community Architecture",
    client: "SaaS Ecosystems",
    metric: "95% Sat. Rate",
    desc: "Estrategias de gestión de comunidades en X y Discord para soporte y fidelización de usuarios en tiempo real.",
    tags: ["Community", "X/Twitter", "Retention"],
    icon: <MessageSquare className="w-5 h-5" />,
    color: "#b44fdf"
  }
];

const PLATFORMS = [
  { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { name: "TikTok", icon: <TrendingUp className="w-4 h-4" /> },
  { name: "X / Twitter", icon: <Twitter className="w-4 h-4" /> },
  { name: "Canva Pro", icon: <Share2 className="w-4 h-4" /> },
  { name: "Meta Ads", icon: <BarChart3 className="w-4 h-4" /> },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function RedesSocialesPage() {
  return (
    <>
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(180, 79, 223, 0.1);
          backdrop-filter: blur(12px);
        }
        .metric-badge {
          background: linear-gradient(90deg, rgba(94, 255, 216, 0.1), transparent);
          border-left: 2px solid #5effd8;
        }
      `}</style>

      <div className="min-h-screen relative z-10 pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-purple-400 w-5 h-5" />
              <span className="font-mono text-[10px] tracking-[.3em] uppercase text-purple-400/80">
                Growth & Community
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Redes <span className="italic font-light text-purple-300/60">Sociales</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              Construyendo puentes digitales entre marcas y audiencias. 
              Estrategias basadas en datos, narrativa visual y ejecución de alto impacto.
            </p>
          </motion.div>

          {/* Grid de Estrategias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {SOCIAL_STRATEGIES.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 * i)}
                className="glass-panel rounded-3xl p-8 group hover:border-purple-400/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-white border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <div className="metric-badge px-3 py-1 font-mono text-[10px] text-[#5effd8] tracking-wider uppercase">
                    {item.metric}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 italic group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ecosistema de Plataformas */}
          <motion.div {...fadeUp(0.4)} className="glass-panel rounded-[40px] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4 italic">Plataformas & Tooling</h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  Dominio de herramientas de análisis, programación y diseño para una gestión 360° de la presencia digital.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
                {PLATFORMS.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-purple-400">{p.icon}</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/60">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Bottom */}
          <motion.div {...fadeUp(0.5)} className="mt-20 text-center">
            <p className="font-mono text-[10px] tracking-[.4em] uppercase text-white/20 mb-6 italic">
              Ready to scale your digital presence?
            </p>
            <button className="px-12 py-5 bg-white text-black font-mono text-xs font-bold tracking-[.3em] uppercase rounded-full hover:scale-105 hover:bg-purple-400 transition-all duration-300">
              Work Together
            </button>
          </motion.div>

        </div>
      </div>
    </>
  );
}