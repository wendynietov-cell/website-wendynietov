"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XOctagon } from "lucide-react";
import Link from "next/link";

interface ProblemSolutionSplitProps {
  title: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
}

export function ProblemSolutionSplit({
  title,
  problem,
  solution,
  metrics,
}: ProblemSolutionSplitProps) {
  return (
    <div className="w-full">

      {/* ── Problema / Solución ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mt-10 rounded-2xl overflow-hidden relative"
        style={{
          background: "rgba(255,255,255,.018)",
          border: "1px solid rgba(180,79,223,.12)",
          backdropFilter: "blur(24px) saturate(1.4)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 24px 60px rgba(0,0,0,.3)",
        }}
      >
        {/* divider vertical */}
        <div
          className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom,transparent,rgba(180,79,223,.2) 30%,rgba(224,64,160,.15) 70%,transparent)",
          }}
        />

        {/* ── PROBLEMA ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="p-8 md:p-12"
        >
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 font-mono text-[10px] tracking-[.1em] uppercase"
            style={{
              border: "1px solid rgba(224,64,160,.25)",
              color: "rgba(224,64,160,.8)",
              background: "rgba(224,64,160,.06)",
              clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
            }}
          >
            <XOctagon size={12} />
            El Problema
          </div>

          <h3
            className="text-white font-bold mb-5 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem,2.5vw,2rem)",
              letterSpacing: "-.01em",
            }}
          >
            Status Quo Ineficiente
          </h3>

          <p className="text-white/45 text-base leading-[1.85] font-light">
            {problem}
          </p>
        </motion.div>

        {/* ── SOLUCIÓN ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="p-8 md:p-12"
          style={{ background: "rgba(180,79,223,.025)" }}
        >
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 font-mono text-[10px] tracking-[.1em] uppercase"
            style={{
              border: "1px solid rgba(180,79,223,.3)",
              color: "rgba(180,79,223,.85)",
              background: "rgba(180,79,223,.07)",
              clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
            }}
          >
            <CheckCircle2 size={12} />
            La Solución
          </div>

          <h3
            className="text-white font-bold mb-5 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem,2.5vw,2rem)",
              letterSpacing: "-.01em",
            }}
          >
            Arquitectura Optimizada
          </h3>

          <p className="text-white/55 text-base leading-[1.85] font-light mb-10">
            {solution}
          </p>

          {/* metrics */}
          <div
            className="grid grid-cols-3 gap-4 pt-7"
            style={{ borderTop: "1px solid rgba(180,79,223,.12)" }}
          >
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-bold mb-1 leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.6rem,3vw,2.4rem)",
                    color: i === 0 ? "#b44fdf" : i === 1 ? "#e040a0" : "#5effd8",
                  }}
                >
                  {metric.value}
                </div>
                <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
        className="mt-5 rounded-2xl overflow-hidden relative"
        style={{
          background: "rgba(224,64,160,.018)",
          border: "1px solid rgba(224,64,160,.12)",
          backdropFilter: "blur(24px) saturate(1.4)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 20px 50px rgba(0,0,0,.25)",
        }}
      >
        {/* top stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg,transparent,#b44fdf 30%,#e040a0 60%,transparent)",
            opacity: .45,
          }}
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10">
          <div className="max-w-lg">
            <p className="font-mono text-[10px] tracking-[.13em] uppercase mb-2"
              style={{ color: "rgba(224,64,160,.6)" }}>
              ¿Hablamos?
            </p>
            <h4
              className="text-white font-bold mb-2 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                letterSpacing: "-.01em",
              }}
            >
              ¿Listo para transformar tus operaciones?
            </h4>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Hablemos de tu caso específico y descubramos oportunidades de optimización.
            </p>
          </div>

          <Link
            href="/contacto"
            className="shrink-0 inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-7 py-3.5 text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#b44fdf,#e040a0)",
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
              boxShadow: "0 6px 20px rgba(180,79,223,.25)",
            }}
          >
            Agendar consultoría <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>

    </div>
  );
}