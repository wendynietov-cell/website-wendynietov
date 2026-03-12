"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Zap, Bot, Database, BarChart3, Wand2 } from "lucide-react";

/* ─── Data de IA & Consultoría ──────────────────────────────── */
const AI_SOLUTIONS = [
  {
    title: "AI Strategy for Startups",
    category: "Advisory",
    desc: "Consultoría para la implementación de LLMs en flujos de trabajo operativos, reduciendo costos y optimizando la atención al cliente.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "#b44fdf",
  },
  {
    title: "Market Insight Agents",
    category: "Automation",
    desc: "Desarrollo de agentes autónomos que analizan mercados Greenfield en tiempo real para identificar oportunidades de expansión.",
    icon: <Bot className="w-6 h-6" />,
    color: "#5effd8",
  },
  {
    title: "Data Architecture",
    category: "Infrastructure",
    desc: "Estructuración de bases de datos para entrenamiento de modelos personalizados y análisis predictivo de ventas.",
    icon: <Database className="w-6 h-6" />,
    color: "#e040a0",
  },
];

const AI_STACK = [
  { name: "OpenAI SDK", level: "Avanzado" },
  { name: "Hugging Face", level: "Intermedio" },
  { name: "LangChain", level: "Explorando" },
  { name: "Python / Pandas", level: "Avanzado" },
  { name: "Vector DBs", level: "Intermedio" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function IAPage() {
  return (
    <>
      <style>{`
        .ai-grid {
          background-image: radial-gradient(rgba(180, 79, 223, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .ai-card {
          background: rgba(6, 6, 16, 0.6);
          border: 1px solid rgba(180, 79, 223, 0.1);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
        }
        .ai-card::before {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #b44fdf, transparent);
          animation: scan 4s linear infinite;
        }
        @keyframes scan {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>

      <div className="min-h-screen relative z-10 pt-32 pb-24 px-6 md:px-16 bg-[#030308] ai-grid">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-purple-400 w-5 h-5 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[.3em] uppercase text-purple-400/80">
                Cognitive Computing
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cloud <span className="italic font-light text-purple-300/60">&</span> AI Advisor
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              Transformando el potencial de la Inteligencia Artificial en ventajas competitivas. 
              Ayudo a startups a integrar modelos de lenguaje y automatización inteligente en su ADN.
            </p>
          </motion.div>

          {/* Grid de Soluciones de IA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {AI_SOLUTIONS.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 * i)}
                className="ai-card rounded-[32px] p-10 group hover:border-purple-500/30 transition-all"
              >
                <div className="mb-8 text-purple-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase block mb-4">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 italic">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack de IA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.3)} className="space-y-8">
              <h2 className="text-3xl font-bold text-white italic">AI Technical Stack</h2>
              <div className="flex flex-wrap gap-4">
                {AI_STACK.map((tech) => (
                  <div key={tech.name} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-tighter">{tech.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="relative p-10 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent border border-white/5">
              <Zap className="text-yellow-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">¿Listo para escalar con IA?</h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">
                No se trata solo de usar ChatGPT. Se trata de crear infraestructuras que aprendan y 
                evolucionen con tu negocio.
              </p>
              <button className="w-full py-4 bg-white text-black font-mono text-[10px] font-bold tracking-[.2em] uppercase rounded-xl hover:bg-purple-400 transition-all">
                Agendar Consultoría IA
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}