"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
  bg:     "#06060f",
};

interface ContactInfoProps {
  fadeUp: (delay?: number) => any;
}

export default function ContactInfo({ fadeUp }: ContactInfoProps) {
  return (
    <motion.div {...fadeUp(0.1)} className="flex flex-col gap-5">
      <div className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(180,79,223,.016)",
          border: "1px solid rgba(180,79,223,.12)",
          backdropFilter: "blur(24px) saturate(1.4)",
        }}>
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,#b44fdf 35%,#e040a0 65%,transparent)", animation: "stripeAnim 4s ease-in-out infinite" }} />
        {/* corners */}
        {([["top-[9px]","left-[9px]","borderTop","borderLeft"],["top-[9px]","right-[9px]","borderTop","borderRight"],
           ["bottom-[9px]","left-[9px]","borderBottom","borderLeft"],["bottom-[9px]","right-[9px]","borderBottom","borderRight"]]
        ).map(([t,l,b1,b2],i) => (
          <div key={i} className={`absolute ${t} ${l} w-3 h-3 pointer-events-none`}
            style={{ [b1]: "1px solid rgba(180,79,223,.22)", [b2]: "1px solid rgba(180,79,223,.22)" }} />
        ))}

        <div className="p-7 flex flex-col gap-5">
          <p className="font-mono text-[9px] tracking-[.13em] uppercase"
            style={{ color: "rgba(180,79,223,.55)" }}>Datos de contacto</p>

          {[
            { Icon: Mail,    label: "Email",     value: "wendy021993@hotmail.com", accent: C.purple, accentA: C.pA },
            { Icon: MapPin,  label: "Ubicación", value: "Medellín, CO · Remoto",   accent: C.teal,   accentA: C.tA },
          ].map(({ Icon, label, value, accent, accentA }, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl shrink-0"
                style={{ background: `${accentA}.07)`, border: `1px solid ${accentA}.2)` }}>
                <Icon size={15} style={{ color: accent }} />
              </div>
              <div>
                <p className="font-mono text-[8.5px] tracking-[.1em] uppercase text-white/28 mb-0.5">{label}</p>
                <p className="text-white/65 text-sm font-light">{value}</p>
              </div>
            </div>
          ))}

          {/* disponibilidad */}
          <div className="flex items-center gap-2.5 pt-2"
            style={{ borderTop: "1px solid rgba(180,79,223,.08)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.teal, animation: "blink 2.4s infinite" }} />
            <span className="font-mono text-[9px] tracking-[.1em] uppercase"
              style={{ color: "rgba(94,255,216,.7)" }}>
              Disponible para proyectos · 2026
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
