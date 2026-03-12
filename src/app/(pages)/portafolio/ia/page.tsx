"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Bot, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
  bg:     "#06060f",
};

/* ─── DATA ───────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    num: "01",
    title: "AI Strategy for Startups",
    category: "Advisory",
    Icon: BrainCircuit,
    accent: C.purple, accentA: C.pA,
    desc: "Consultoría para la implementación de LLMs en flujos de trabajo operativos, reduciendo costos y optimizando la atención al cliente. Definición de roadmap, selección de modelos y gestión del cambio.",
    deliverables: ["Roadmap de implementación", "Selección de modelos", "Gestión del cambio", "KPIs de adopción"],
  },
  {
    num: "02",
    title: "Market Insight Agents",
    category: "Automation",
    Icon: Bot,
    accent: C.teal, accentA: C.tA,
    desc: "Desarrollo de agentes autónomos que analizan mercados Greenfield en tiempo real para identificar oportunidades de expansión. Integración con fuentes de datos propias y externas.",
    deliverables: ["Agentes de monitoreo", "Dashboards en tiempo real", "Alertas de oportunidad", "API de datos"],
  },
  {
    num: "03",
    title: "Data Architecture",
    category: "Infrastructure",
    Icon: Database,
    accent: C.pink, accentA: C.pkA,
    desc: "Estructuración de bases de datos para entrenamiento de modelos personalizados y análisis predictivo de ventas. Desde el diseño del esquema hasta el pipeline de datos.",
    deliverables: ["Diseño de esquemas", "Pipelines de datos", "Vector DBs", "Análisis predictivo"],
  },
];

const STACK = [
  { name: "OpenAI SDK",      level: "Avanzado",    c: C.purple },
  { name: "Python / Pandas", level: "Avanzado",    c: C.purple },
  { name: "Hugging Face",    level: "Intermedio",  c: C.teal   },
  { name: "Vector DBs",      level: "Intermedio",  c: C.teal   },
  { name: "LangChain",       level: "Explorando",  c: C.indigo },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

/* ─── PAGE ───────────────────────────────────────────────── */
export default function IAPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes cursor     { 0%,100%{opacity:1} 49%{opacity:1} 50%{opacity:0} 99%{opacity:0} }
        .terminal-cursor { animation: cursor 1.1s step-end infinite; }
      `}</style>

      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.07]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 7s linear infinite" }} />

      <main className="relative min-h-screen pt-20 pb-24 z-10">

        {/* ══════════════════════════════════════════════
            SECCIÓN HERO — full-width, asimétrica
        ══════════════════════════════════════════════ */}
        <div className="px-6 md:px-16 md:mr-20 mb-0">
          <div className="max-w-5xl mx-auto">

            {/* top bar */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-14">
              <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Wendy Nieto</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.purple, opacity: .65, animation: "blink 1.8s infinite" }} />
              <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Cloud & AI</span>
            </motion.div>

            </div>
        </div>

        {/* ══════════════════════════════════════════════
            SOLUCIONES — lista editorial full-width con
            líneas divisorias, sin cards
        ══════════════════════════════════════════════ */}
        <div className="px-6 md:px-16 md:mr-20 mb-20">
          <div className="max-w-5xl mx-auto">

            <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-2">
              <span className="font-mono text-[9px] tracking-[.15em] uppercase" style={{ color: "rgba(180,79,223,.45)" }}>Soluciones</span>
              <div className="flex-1 h-px" style={{ background: "rgba(180,79,223,.1)" }} />
            </motion.div>

            {SOLUTIONS.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 + i * 0.07)}
                  className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 py-10 relative"
                  style={{ borderBottom: `1px solid rgba(255,255,255,.05)` }}
                >
                  {/* número grande */}
                  <div className="flex items-start pt-1">
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3.5rem", fontWeight: 700, lineHeight: 1,
                      color: `${s.accentA}.12)`,
                      letterSpacing: "-.02em",
                      transition: "color .4s",
                    }}
                    className="group-hover:text-[color:var(--acc)]"
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* título + desc */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Icon size={15} style={{ color: `${s.accent}88` }} />
                      <span className="font-mono text-[9px] tracking-[.12em] uppercase"
                        style={{ color: `${s.accent}55` }}>{s.category}</span>
                    </div>
                    <h2 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.4rem,2.5vw,1.85rem)",
                      fontWeight: 700, letterSpacing: "-.015em", color: "#fff",
                      fontStyle: "italic",
                    }}>
                      {s.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-[1.85] font-light max-w-sm">{s.desc}</p>
                  </div>

                  {/* deliverables */}
                  <div className="flex flex-col gap-2 md:pt-8">
                    <p className="font-mono text-[8.5px] tracking-[.12em] uppercase mb-2"
                      style={{ color: `${s.accent}44` }}>Entregables</p>
                    {s.deliverables.map((d, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: `${s.accent}55` }} />
                        <span className="text-white/38 text-[12px] font-light">{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* accent line izquierda en hover */}
                  <div className="absolute left-0 top-0 w-px h-0 group-hover:h-full transition-all duration-500"
                    style={{ background: `linear-gradient(to bottom,transparent,${s.accent}44,transparent)` }} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            STACK — formato terminal, fondo distinto
        ══════════════════════════════════════════════ */}
        <div className="px-6 md:px-16 md:mr-20 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5">

              {/* terminal */}
              <motion.div {...fadeUp(0.2)}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(0,0,0,.55)", border: "1px solid rgba(255,255,255,.07)" }}>
                {/* barra de terminal */}
                <div className="flex items-center gap-2 px-5 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.03)" }}>
                  {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ background: c, opacity: .7 }} />
                  ))}
                  <span className="font-mono text-[9px] text-white/20 tracking-widest ml-2">ai_stack.sh</span>
                </div>

                {/* contenido */}
                <div className="p-6 font-mono text-[11px] leading-[2] space-y-0.5">
                  <div style={{ color: "rgba(180,79,223,.5)" }}>$ cat ai_technical_stack</div>
                  <div className="h-3" />
                  {STACK.map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ color: `${t.c}88` }}>▸</span>
                      <span className="text-white/65">{t.name}</span>
                      <span className="ml-auto" style={{
                        color: t.level === "Avanzado" ? `${C.teal}88`
                             : t.level === "Intermedio" ? `${C.purple}88`
                             : `${C.indigo}66`,
                      }}>{t.level}</span>
                    </div>
                  ))}
                  <div className="h-3" />
                  <div className="flex items-center gap-1" style={{ color: "rgba(180,79,223,.4)" }}>
                    <span>$</span>
                    <span className="terminal-cursor ml-1 inline-block w-2 h-3.5 align-middle"
                      style={{ background: "rgba(180,79,223,.5)" }} />
                  </div>
                </div>
              </motion.div>

              {/* CTA — texto largo editorial */}
              <motion.div {...fadeUp(0.25)}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between"
                style={{
                  background: "rgba(180,79,223,.016)",
                  border: "1px solid rgba(180,79,223,.12)",
                  backdropFilter: "blur(24px) saturate(1.4)",
                }}>
                {/* stripe */}
                <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{ background: "linear-gradient(90deg,transparent,#b44fdf 35%,#e040a0 65%,transparent)", opacity: .35 }} />

                <div className="p-8 md:p-10 flex flex-col gap-6 flex-1">
                  <div>
                    <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-3"
                      style={{ color: "rgba(180,79,223,.55)" }}>¿Listo para escalar?</p>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.6rem,3vw,2.4rem)",
                      fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.05, color: "#fff",
                    }}>
                      Convierte la IA en una<br />
                      <span className="font-light italic" style={{
                        background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink})`,
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundSize: "200%", animation: "shimmer 6s ease infinite",
                      }}>ventaja real</span>
                    </h3>
                  </div>

                  <p className="text-white/38 text-sm leading-[1.85] font-light">
                    Ayudo a startups y equipos de ventas a integrar modelos de lenguaje y
                    automatización inteligente en sus procesos — sin fricciones, con foco en ROI medible.
                  </p>

                  {/* mini checklist */}
                  <div className="flex flex-col gap-2">
                    {["Sin overhead técnico innecesario", "Resultados medibles desde la semana 1", "Transferencia de conocimiento al equipo"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full" style={{ background: `${C.teal}66` }} />
                        <span className="text-white/42 text-[12px] font-light">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href="/contacto"
                      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.1em] uppercase px-6 py-3 text-white transition-all hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg,#b44fdf,#e040a0)",
                        clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                        boxShadow: "0 5px 18px rgba(180,79,223,.2)",
                      }}>
                      Agendar consultoría <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="px-6 md:px-16 md:mr-20">
          <div className="max-w-5xl mx-auto flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-white/18">
            <div className="relative w-10 h-px overflow-hidden" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400"
                style={{ animation: "trackSlide 2s ease-in-out infinite" }} />
            </div>
            <span>End of AI services</span>
          </div>
        </div>

      </main>
    </>
  );
}