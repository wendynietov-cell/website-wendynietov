"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/features/ContactForm";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
  bg:     "#06060f",
};


/* ─── HELPERS ────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});


/* ─── PAGE ───────────────────────────────────────────────── */
export default function ContactoPage() {



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes stripeAnim { 0%,100%{opacity:.45} 50%{opacity:.14} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
        textarea:focus { outline: none; }
        
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(180,79,223,0.2);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(180,79,223,0.4);
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.07]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 7s linear infinite" }} />

      <main className="relative min-h-screen pt-8 pb-24 px-6 md:px-16 md:mr-20 z-10">
        <div className="max-w-5xl mx-auto">

          {/* top bar */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Wendy Nieto</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(180,79,223,.35),transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.purple, opacity: .65, animation: "blink 1.8s infinite" }} />
            <span className="font-mono text-[10px] tracking-[.13em] uppercase text-white/25">Contacto</span>
          </motion.div>

          {/* header */}
          <motion.div {...fadeUp(0.05)} className="mb-8">
            <p className="font-mono text-[10px] tracking-[.15em] uppercase mb-3"
              style={{ color: "rgba(180,79,223,.6)" }}>
              Networking & Advisory
            </p>
            <h1 className="leading-[.9] mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.6rem,5vw,4.5rem)", fontWeight: 700, letterSpacing: "-.025em" }}>
              <span className="text-white">Hablemos de </span>
              <span className="font-light italic"
                style={{ background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200%", animation: "shimmer 6s ease infinite" }}>
                Estrategia
              </span>
            </h1>
            <p className="text-white/38 text-base max-w-xl leading-[1.85] font-light">
              Desde la arquitectura de software hasta la expansión en mercados Greenfield.
              Elige el canal que prefieras para conectar.
            </p>
          </motion.div>

          {/* ── FORMULARIO ── */}
          <div className="max-w-2xl mx-auto">
            <ContactForm fadeUp={fadeUp} />
          </div>

          {/* scroll indicator */}
          <div className="flex items-center gap-3 mt-12 font-mono text-[9px] tracking-widest uppercase text-white/18">
            <div className="relative w-10 h-px overflow-hidden" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400"
                style={{ animation: "trackSlide 2s ease-in-out infinite" }} />
            </div>
            <span>End of contact</span>
          </div>

        </div>
      </main>
    </>
  );
}