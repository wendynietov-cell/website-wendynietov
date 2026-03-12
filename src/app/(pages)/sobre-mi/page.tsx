"use client";

import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

/* ─── Data ──────────────────────────────────────────────────── */

/* ─── Helpers ────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1], delay },
});

function Tag({ label, color }: { label: string; color: string }) {
  const c = color === "purple" ? "#b44fdf" : color === "pink" ? "#e040a0" : "#5effd8";
  return (
    <span
      className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 inline-block"
      style={{
        border: `1px solid ${c}44`,
        color: `${c}cc`,
        background: `${c}11`,
        clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Component ──────────────────────────────────────────────── */
export default function SobreMiPage() {
  const dividerRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes nameShimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes stripeShimmer{ 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes scanDown { from{top:-4px} to{top:100vh} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        .name-shimmer { animation: nameShimmer 5s ease infinite; background-size: 200%; }
        .stripe-anim  { animation: stripeShimmer 4s ease-in-out infinite; }
        .blink-dot    { animation: blink 1.8s infinite; }
        .scanline-el  { animation: scanDown 7s linear infinite; }
        .track-dot    { animation: trackSlide 2s ease-in-out infinite; }
        .glass-panel  {
          background: rgba(180,79,223,.025);
          border: 1px solid rgba(180,79,223,.18);
          backdrop-filter: blur(28px) saturate(1.5);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 32px 80px rgba(0,0,0,.35);
        }
        .corner::before, .corner::after {
          content:''; position:absolute; width:14px; height:14px;
          border-color: rgba(180,79,223,.35); border-style:solid;
        }
        .corner-tl::before { top:10px; left:10px; border-width:1px 0 0 1px; }
        .corner-tr::after  { top:10px; right:10px; border-width:1px 1px 0 0; }
        .corner-bl::before { bottom:10px; left:10px; border-width:0 0 1px 1px; }
        .corner-br::after  { bottom:10px; right:10px; border-width:0 1px 1px 0; }
      `}</style>

      {/* Scanline */}
      <div className="scanline-el fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-10"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)" }} />

      <main className="relative min-h-screen pt-4 pb-24 px-6 md:px-14 z-10">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* ── Top label ── */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 font-mono text-[10px] text-white/30 tracking-[.1em] uppercase">
            <span>Sobre Mí · Perfil</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }} />
            <span className="blink-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
            <span>Wendy Nieto · 2026</span>
          </motion.div>

          {/* ══════════════════════════════════════════════
              HERO PANEL — foto + texto
          ══════════════════════════════════════════════ */}
          <motion.div
            {...fadeUp(0.1)}
            className="glass-panel relative rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 corner corner-tl corner-tr corner-bl corner-br"
            style={{ minHeight: 220 }}
          >
            {/* Top stripe */}
            <div className="stripe-anim absolute top-0 left-0 right-0 h-0.5 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg,transparent,#b44fdf 25%,#e040a0 50%,#5effd8 75%,transparent)" }} />

            {/* Divider */}
            <div className="absolute top-[8%] left-1/2 bottom-[8%] w-px hidden md:block pointer-events-none"
              style={{ background: "linear-gradient(to bottom,transparent,rgba(180,79,223,.2) 30%,rgba(224,64,160,.2) 70%,transparent)" }} />

            {/* LEFT: text */}
            <div className="flex flex-col justify-center gap-5 px-10 md:px-14 py-10 relative z-10">
              <div>
                <span className="font-mono text-[10px] tracking-[.13em] uppercase px-3 py-1 text-purple-300"
                  style={{ border:"1px solid rgba(180,79,223,.35)", background:"rgba(180,79,223,.07)", clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
                  Founder &amp; Developer
                </span>
              </div>

              <div>
                <h1 className="leading-[.9] select-none"
                  style={{ fontSize:"clamp(2.8rem,4.5vw,5rem)", fontFamily:"'Cormorant Garamond',serif", fontWeight:700, letterSpacing:"-.03em" }}>
                  <span style={{ color:"#fff" }}>Estratega de<br /></span>
                  <span className="name-shimmer font-light italic"
                    style={{ background:"linear-gradient(135deg,#a5b4fc 0%,#b44fdf 40%,#e040a0 80%,#5effd8 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                    Negocios &amp; Builder
                  </span>
                </h1>
              </div>

              <p className="text-white/55 leading-[1.8] text-[.92rem] font-light max-w-md">
                De liderar negociaciones políticas y expansión de mercados en Rappi, a construir la infraestructura 
                tecnológica para la economía creativa en LATAM. No solo escribo código — diseño soluciones 
                escalables con visión de negocio y gestión de stakeholders.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/cv.pdf" download
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-6 py-3 text-white transition-all hover:-translate-y-0.5"
                  style={{ background:"linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)", boxShadow:"0 6px 24px rgba(180,79,223,.35)" }}>
                  <Download size={14} /> Descargar CV
                </a>
                <a href="https://linkedin.com/in/wendynietovasquez/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-5 py-3 text-purple-200/70 transition-all hover:-translate-y-0.5 hover:text-white"
                  style={{ border:"1px solid rgba(165,180,252,.3)", background:"rgba(165,180,252,.05)", clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
                  <Linkedin size={14} /> LinkedIn ↗
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-4 py-3 text-purple-200/50 transition-all hover:-translate-y-0.5 hover:text-white"
                  style={{ border:"1px solid rgba(180,79,223,.2)", background:"rgba(180,79,223,.04)", clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
                  <Github size={14} />
                </a>
              </div>

              {/* Stat badge */}
              <div className="inline-flex items-end gap-2">
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:700, lineHeight:1,
                  background:"linear-gradient(135deg,#e040a0,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  9+
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">Años de Trayectoria</span>
              </div>
            </div>

            {/* RIGHT: photo */}
            <div className="relative hidden md:block overflow-hidden">
              <Image
                src="/sobremisection.png"
                alt="Wendy Nieto"
                fill
                className="object-cover object-top"
                style={{ mixBlendMode:"luminosity", filter:"contrast(1.05) brightness(0.88)" }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                background:`linear-gradient(to right,rgba(6,6,16,.6) 0%,transparent 20%),
                            linear-gradient(to left,rgba(6,6,16,.5) 0%,transparent 20%),
                            linear-gradient(to top,rgba(6,6,16,.85) 0%,transparent 35%)`
              }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background:"linear-gradient(135deg,rgba(109,40,217,.15) 0%,transparent 50%,rgba(224,64,160,.08) 100%)", mixBlendMode:"color" }} />
            </div>
          </motion.div>

          
          {/* ══════════════════════════════════════════════
              CTA BOTTOM STRIP
          ══════════════════════════════════════════════ */}
          <motion.div {...fadeUp(0.3)}
            className="glass-panel relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8">
            <div className="stripe-anim absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
              style={{ background:"linear-gradient(90deg,transparent,#b44fdf 25%,#e040a0 50%,#5effd8 75%,transparent)" }} />

            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">¿Hablamos?</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.9rem", fontWeight:700, color:"#fff" }}>
                Construyamos algo
                <span className="name-shimmer font-light italic ml-3"
                  style={{ background:"linear-gradient(135deg,#a5b4fc,#b44fdf,#e040a0,#5effd8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundSize:"200%" }}>
                  extraordinario
                </span>
              </p>
            </div>

            <a href="/contacto"
              className="shrink-0 inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-8 py-4 text-white transition-all hover:-translate-y-0.5"
              style={{ background:"linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)", boxShadow:"0 6px 24px rgba(180,79,223,.35)" }}>
              Trabajemos juntos <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-white/25 pt-2">
            <div className="relative w-10 h-px overflow-hidden" style={{ background:"linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="track-dot absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400" />
            </div>
            <span>End of profile</span>
          </div>

        </div>
      </main>
    </>
  );
}