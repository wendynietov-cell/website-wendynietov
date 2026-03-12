import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { ProblemSolutionSplit } from "@/components/ProblemSolutionSplit";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ─── PALETA ────────────────────────────────────────────────── */
const C = {
  purple: "#b44fdf",  purpleA: "rgba(180,79,223,",
  pink:   "#e040a0",  pinkA:   "rgba(224,64,160,",
  teal:   "#5effd8",  tealA:   "rgba(94,255,216,",
  indigo: "#a5b4fc",  indigoA: "rgba(165,180,252,",
  bg:     "#06060f",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Wendy Nieto`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

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

          {/* ── top bar ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Wendy Nieto</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(180,79,223,.5),transparent)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.purple, opacity: .8, animation: "blink 1.8s infinite" }} />
            <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Servicios</span>
          </div>

          {/* ── Back link ── */}
          <Link
            href="/servicios"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px", 
              fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "40px", transition: "all 0.3s ease",
              color: `${C.purple}dd`
            }}
          >
            <ArrowLeft size={12} />
            Todos los servicios
          </Link>

          {/* ── Hero del servicio ── */}
          <div style={{ marginBottom: "24px" }}>
            {/* Título fuera del contenedor */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div
                style={{ padding: "8px", borderRadius: "12px", background: `${C.purpleA}.12)`, border: `1px solid ${C.purpleA}.25)` }}
              >
                <service.icon size={24} style={{ color: C.purple }} />
              </div>
              <div>
                <p style={{
                  fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px",
                  color: `${C.purple}dd`
                }}>
                  Servicio
                </p>
                <h1
                  style={{
                    color: "#fff", fontWeight: 700, lineHeight: 1.1, margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.5rem,3.5vw,2.5rem)",
                    letterSpacing: "-.02em",
                  }}
                >
                  {service.title}
                </h1>
              </div>
            </div>
          </div>

          {/* ── Short desc como tarjeta ── */}
          <div
            style={{
              position: "relative", borderRadius: "16px", overflow: "hidden", marginBottom: "32px",
              background: `${C.purpleA}.025)`,
              border: `1px solid ${C.purpleA}.18)`,
              backdropFilter: "blur(24px) saturate(1.4)",
              boxShadow: `inset 0 1px 0 rgba(255,255,255,.04), 0 24px 60px rgba(0,0,0,.4)`,
              width: "100%"
            }}
          >
            {/* stripe */}
            <div
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px", zIndex: 10,
                background: `linear-gradient(90deg,transparent,${C.purple} 35%,${C.pink} 65%,transparent)`,
                animation: "stripeAnim 4s ease-in-out infinite",
              }}
            />
            {/* corners */}
            {["top-[10px] left-[10px] borderTop borderLeft","top-[10px] right-[10px] borderTop borderRight","bottom-[10px] left-[10px] borderBottom borderLeft","bottom-[10px] right-[10px] borderBottom borderRight"].map((corners, i) => {
              const [t, l, b1, b2] = corners.split(" ");
              return (
                <div key={i} style={{ position: "absolute", [t]: "10px", [l]: "10px", width: "12px", height: "12px", pointerEvents: "none",
                  [b1]: `1px solid ${C.purpleA}.4)`, [b2]: `1px solid ${C.purpleA}.4)` }} />
              );
            })}
            
            <div style={{ padding: "24px 32px" }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.78)", fontSize: "1.1rem", lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                {service.shortDesc}
              </p>
            </div>
          </div>

          {/* ── Problem / Solution ── */}
          <ProblemSolutionSplit
            title={service.title}
            problem={service.problem}
            solution={service.solution}
            metrics={service.metrics}
          />
        </div>
      </main>
    </>
  );
}