import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

/* ─── PALETA ────────────────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  purpleA: "rgba(180,79,223,",
  pink:   "#e040a0",  pinkA:   "rgba(224,64,160,",
  teal:   "#5effd8",  tealA:   "rgba(94,255,216,",
  indigo: "#a5b4fc",  indigoA: "rgba(165,180,252,",
  bg:     "#06060f",
  // Fondo de página: oscuro opaco — máximo contraste para texto
  pageL:  "rgba(8,6,20,.93)",
  pageR:  "rgba(6,8,18,.92)",
};

export const metadata = {
  title: "Servicios | Wendy Nieto",
  description: "Consultoría tecnológica en restaurantes, plataformas, ghost kitchens y economía creativa.",
};

export default function ServiciosPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@300;400&display=swap');
        @keyframes stripeAnim { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
        ::-webkit-scrollbar       { width: 3px; }
        ::-webkit-scrollbar-thumb { background: rgba(180,79,223,.35); border-radius: 2px; }
        * { box-sizing: border-box; }
      `}</style>

      {/* Scanline */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)",
        opacity: .1, pointerEvents: "none", zIndex: 0,
        animation: "scanDown 7s linear infinite",
      }} />

      <main
        style={{ minHeight: "100vh", paddingTop: "40px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px", background: C.bg, fontFamily: "'Cormorant Garamond', Georgia, serif", position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ marginBottom: "64px" }}>
            {/* top bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Wendy Nieto</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(180,79,223,.5),transparent)" }} />
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.purple, opacity: .8, animation: "blink 1.8s infinite" }} />
              <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Servicios</span>
            </div>

            <p style={{
              fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px",
              color: `${C.purple}dd`
            }}>
              Soluciones
            </p>

            <h1
              style={{
                fontWeight: 700, marginBottom: "20px", lineHeight: ".92", color: "#fff", margin: 0,
                fontSize: "clamp(2.8rem,5vw,5rem)",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "-.02em",
              }}
            >
              <span>Soluciones que </span>
              <span
                style={{
                  fontStyle: "italic", fontWeight: 400,
                  background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink},${C.teal})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200%",
                  animation: "shimmer 6s ease infinite",
                }}
              >
                escalan
              </span>
            </h1>

            <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.72)", lineHeight: 1.85, fontSize: "1rem", fontWeight: 300, maxWidth: "480px", margin: 0 }}>
              Arquitectura estratégica para plataformas que crecen 10×. Cada servicio
              está diseñado desde la experiencia en campo real.
            </p>
          </div>

          {/* ── Grid ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "20px" }}>
            {SERVICES.map((service, idx) => {
              const accent = idx % 4 === 0 ? "#b44fdf"
                           : idx % 4 === 1 ? "#e040a0"
                           : idx % 4 === 2 ? "#5effd8"
                           : "#a5b4fc";
              const accentA = idx % 4 === 0 ? "rgba(180,79,223,"
                            : idx % 4 === 1 ? "rgba(224,64,160,"
                            : idx % 4 === 2 ? "rgba(94,255,216,"
                            : "rgba(165,180,252,";

              return (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      position: "relative", borderRadius: "16px", overflow: "hidden", transition: "all 0.4s ease",
                      background: `${accentA}.025)`,
                      border: `1px solid ${accentA}.18)`,
                      backdropFilter: "blur(24px) saturate(1.4)",
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,.04), 0 24px 60px rgba(0,0,0,.4)`,
                    }}
                  >
                    {/* top stripe */}
                    <div
                      style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: "2px", zIndex: 10,
                        background: `linear-gradient(90deg,transparent,${accent} 40%,#e040a0 70%,transparent)`,
                        animation: "stripeAnim 4s ease-in-out infinite",
                      }}
                    />
                    {/* corner marks */}
                    <div style={{ position: "absolute", top: "10px", left: "10px", width: "12px", height: "12px", pointerEvents: "none",
                      borderTop: `1px solid ${accentA}.4)`, borderLeft: `1px solid ${accentA}.4)` }} />
                    <div style={{ position: "absolute", top: "10px", right: "10px", width: "12px", height: "12px", pointerEvents: "none",
                      borderTop: `1px solid ${accentA}.4)`, borderRight: `1px solid ${accentA}.4)` }} />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "12px", height: "12px", pointerEvents: "none",
                      borderBottom: `1px solid ${accentA}.4)`, borderLeft: `1px solid ${accentA}.4)` }} />
                    <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "12px", height: "12px", pointerEvents: "none",
                      borderBottom: `1px solid ${accentA}.4)`, borderRight: `1px solid ${accentA}.4)` }} />

                    <div style={{ padding: "32px" }}>
                      {/* icon + arrow */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px" }}>
                        <div
                          style={{ padding: "12px", borderRadius: "12px", background: `${accentA}.12)`, border: `1px solid ${accentA}.25)` }}
                        >
                          <service.icon size={24} style={{ color: accent }} />
                        </div>
                        <ArrowRight
                          size={16}
                          style={{ transition: "all 0.3s ease", color: `${accentA}.6)` }}
                        />
                      </div>

                      {/* title */}
                      <h2
                        style={{
                          fontWeight: 700, color: "#fff", marginBottom: "12px", lineHeight: 1.2,
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.45rem",
                          letterSpacing: "-.01em",
                        }}
                      >
                        {service.title}
                      </h2>

                      {/* desc */}
                      <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.68)", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 300, marginBottom: "28px", margin: 0 }}>
                        {service.shortDesc}
                      </p>

                      {/* metrics */}
                      <div
                        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", paddingTop: "20px", borderTop: `1px solid ${accentA}.15)` }}
                      >
                        {service.metrics.map((metric, i) => (
                          <div key={i}>
                            <div
                              style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px", color: accent }}
                            >
                              {metric.value}
                            </div>
                            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}