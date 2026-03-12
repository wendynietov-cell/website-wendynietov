"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Download, Linkedin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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

/* ─── TAG ───────────────────────────────────────────────────── */
function Tag({ label, c = C.purple }: { label: string; c?: string }) {
  return (
    <span style={{
      fontFamily: "monospace", fontSize: 10, letterSpacing: "0.11em",
      textTransform: "uppercase", padding: "3px 10px", display: "inline-block",
      color: `${c}dd`, border: `1px solid ${c}44`, background: `${c}14`,
      clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
    }}>{label}</span>
  );
}

/* ─── STRIPE ANIMADA ────────────────────────────────────────── */
function StripeTop({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 10,
      background: `linear-gradient(90deg,transparent,${color} 40%,#e040a0 70%,transparent)`,
      animation: "stripeAnim 4s ease-in-out infinite",
    }} />
  );
}

/* ─── PAGE LABEL ────────────────────────────────────────────── */
function PageLabel({ num, label, color }: { num: string; label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <span style={{ fontFamily: "monospace", fontSize: 11, color: `${color}66`, letterSpacing: "0.15em" }}>{num}</span>
      <div style={{ width: 20, height: 1, background: `${color}55` }} />
      <span style={{ fontFamily: "monospace", fontSize: 11, color: `${color}99`, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

/* ─── ACCENT SIDE BAR ──────────────────────────────────────── */
/* Barra de 3px en el borde exterior — el color va aquí, no en el fondo */
function AccentBar({ color, side }: { color: string; side: "left" | "right" }) {
  return (
    <div style={{
      position: "absolute",
      top: "12%", bottom: "12%",
      [side]: 0,
      width: 3,
      background: `linear-gradient(to bottom, transparent, ${color} 30%, ${color} 70%, transparent)`,
      opacity: 0.7,
      zIndex: 5,
    }} />
  );
}

/* ════════════════════════════════════════════════════════════
   PÁGINAS
════════════════════════════════════════════════════════════ */

/* Spread 0 — Portada izq: intro | der: foto */
function S0Left() {
  return (
    <div style={{ padding: "40px 36px 40px 44px", display: "flex", flexDirection: "column", gap: 18, height: "100%", justifyContent: "center", position: "relative", zIndex: 1 }}>
      <StripeTop color={C.purple} />
      <AccentBar color={C.purple} side="left" />
      <PageLabel num="01" label="Perfil" color={C.purple} />

      <span style={{
        fontFamily: "monospace", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase",
        padding: "4px 12px", color: "#c084fc", alignSelf: "flex-start",
        border: `1px solid ${C.purpleA}.4)`, background: `${C.purpleA}.08)`,
        clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
      }}>Founder · Developer</span>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem,3.2vw,3.2rem)",
        fontWeight: 700, letterSpacing: "-.03em", lineHeight: .9, color: "#fff", margin: 0,
      }}>
        Estratega de<br />
        <span style={{
          fontStyle: "italic", fontWeight: 400,
          background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink},${C.teal})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundSize: "200%", animation: "shimmer 5s ease infinite",
        }}>Negocios &amp; Builder</span>
      </h1>

      <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.72)", lineHeight: 1.85, fontSize: ".9rem", fontWeight: 300, maxWidth: 340, margin: 0 }}>
        De liderar negociaciones políticas y expansión de mercados en Rappi, a construir
        infraestructura tech para la economía creativa en LATAM.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        <a href="/cv.pdf" download style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", padding: "10px 20px", color: "#fff", textDecoration: "none",
          background: `linear-gradient(135deg,${C.purple},${C.pink},${C.teal})`,
          clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
          boxShadow: `0 6px 20px ${C.purpleA}.4)`,
        }}><Download size={13} /> Descargar CV</a>

        <a href="https://linkedin.com/in/wendynietovasquez/" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "10px 16px", color: "rgba(165,180,252,.8)", textDecoration: "none",
          border: `1px solid ${C.indigoA}.35)`, background: `${C.indigoA}.07)`,
          clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
        }}><Linkedin size={13} /> LinkedIn</a>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 2 }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1,
          background: `linear-gradient(135deg,${C.pink},${C.indigo})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>9+</span>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Años de trayectoria</span>
      </div>
    </div>
  );
}

function S0Right() {
  return (
    <div style={{ position: "relative", height: "100%", minHeight: "300px", overflow: "hidden" }}>
      <StripeTop color={C.pink} />
      <AccentBar color={C.pink} side="right" />
      <Image src="/sobremisection.png" alt="Wendy Nieto" fill sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top", mixBlendMode: "luminosity", filter: "contrast(1.08) brightness(.9)" }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right,${C.bg}aa 0%,transparent 30%), linear-gradient(to top,${C.bg}cc 0%,transparent 45%)` }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,rgba(109,40,217,.18),transparent 50%,rgba(224,64,160,.1))`, mixBlendMode: "color" }} />
      <div style={{ position: "absolute", bottom: 36, left: 24, display: "flex", flexDirection: "column", gap: 6, zIndex: 2 }}>
        {["Sales Strategy", "AI Tools", "Revenue Growth"].map((t, i) => (
          <Tag key={i} label={t} c={i === 0 ? C.purple : i === 1 ? C.pink : C.teal} />
        ))}
      </div>
      <div style={{ position: "absolute", top: 44, right: 20, display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", zIndex: 2 }}>
        {["Data-Driven", "CRM Expert", "Tech Stack"].map((t, i) => (
          <Tag key={i} label={t} c={i === 0 ? C.indigo : i === 1 ? C.purple : C.pink} />
        ))}
      </div>
    </div>
  );
}

/* Spread 1 — Ventas */
function S1Left() {
  return (
    <div style={{ padding: "32px 36px 32px 44px", height: "100%", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.pink} />
      <AccentBar color={C.pink} side="left" />
      <PageLabel num="02" label="Ventas Tech" color={C.pink} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          Hunter Senior · <span style={{ fontStyle: "italic", fontWeight: 400, color: C.pink }}>Top Deal</span>
        </h2>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: `${C.pink}88`, letterSpacing: "0.1em", textTransform: "uppercase" }}>Rappi · 2022—2025</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {["KAM","Hunter","Greenfield","Top Performer"].map((t,i) => <Tag key={i} label={t} c={C.pink} />)}
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
        {[
          "Lideré la expansión nacional en ciudades Greenfield, abriendo mercados desde cero en más de 8 ciudades. Negocié contratos con grandes marcas del retail, restaurantes y consumo masivo — logrando acuerdos exclusivos y posicionamiento premium.",
          "Managé un portafolio de cuentas clave con seguimiento continuo de GMV, rentabilidad y churn. Diseñé estrategias de pricing y estructuras de comisión adaptadas a cada mercado regional.",
          "Resultado: crecimiento 3× del portafolio con reconocimiento como Top Performer nacional.",
          "Desarrollo de estrategias de entrada a nuevos mercados con análisis competitivo y posicionamiento diferenciado. Implementación de modelos de negocio adaptados a las características locales de cada región.",
          "Coordinación de equipos multidisciplinarios para asegurar la ejecución exitosa de planes de expansión. Monitoreo constante de KPIs y métricas de performance para optimizar resultados.",
        ].map((p, i) => <p key={i} style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.82)", lineHeight: 1.9, fontSize: ".93rem", fontWeight: 300, margin: 0 }}>{p}</p>)}
      </div>
    </div>
  );
}

function S1Right() {
  return (
    <div style={{ padding: "32px 44px 32px 36px", height: "100%", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.purple} />
      <AccentBar color={C.purple} side="right" />
      <PageLabel num="02b" label="Sales Business" color={C.purple} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          Sales Business · <span style={{ fontStyle: "italic", fontWeight: 400, color: C.purple }}>Specialist</span>
        </h2>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: `${C.purple}88`, letterSpacing: "0.1em", textTransform: "uppercase" }}>Tech & Plataformas · 2019—2022</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {["B2B","CRM","Pipeline","Consultivo"].map((t,i) => <Tag key={i} label={t} c={C.purple} />)}
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
        {[
          "Desarrollo de relaciones comerciales B2B en el ecosistema tech con medianas y grandes empresas. Propuestas de valor adaptadas, venta consultiva y cierre de contratos de mediano y largo plazo.",
          "Gestión de pipeline CRM, análisis de conversión y optimización de procesos para reducir el ciclo de cierre. Trabajo transversal con equipos de producto, marketing y operaciones.",
          "Implementación de sistemas de seguimiento y automatización de procesos de venta para mejorar eficiencia y escalabilidad del equipo comercial.",
          "Análisis de datos y métricas para identificar oportunidades de mejora y optimización continua de estrategias comerciales.",
        ].map((p, i) => <p key={i} style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.82)", lineHeight: 1.9, fontSize: ".93rem", fontWeight: 300, margin: 0 }}>{p}</p>)}
      </div>
    </div>
  );
}

/* Spread 2 — Cultural */
function S2Left() {
  return (
    <div style={{ padding: "32px 36px 32px 44px", height: "100%", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.teal} />
      <AccentBar color={C.teal} side="left" />
      <PageLabel num="03" label="Cultura & Gestión" color={C.teal} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          Coordinadora · <span style={{ fontStyle: "italic", fontWeight: 400, color: C.teal }}>Proyectos & Alianzas</span>
        </h2>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: `${C.teal}88`, letterSpacing: "0.1em", textTransform: "uppercase" }}>Alcaldía · 2016—2019</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {["Sector Público","Patrocinios","$500M+ COP","50+ personas"].map((t,i) => <Tag key={i} label={t} c={C.teal} />)}
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
        {[
          "Lideré proyectos culturales de alto impacto: festivales masivos, eventos regionales y programas de formación artística. Responsable de negociar con entidades privadas para conseguir patrocinios complementarios al presupuesto público.",
          "Administré presupuestos superiores a $500M COP coordinando equipos de más de 50 personas. Gestión de stakeholders políticos, gremios empresariales y comunidades.",
        ].map((p, i) => <p key={i} style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.82)", lineHeight: 1.9, fontSize: ".93rem", fontWeight: 300, margin: 0 }}>{p}</p>)}
      </div>
    </div>
  );
}

function S2Right() {
  return (
    <div style={{ padding: "32px 44px 32px 36px", height: "100%", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.indigo} />
      <AccentBar color={C.indigo} side="right" />
      <PageLabel num="03b" label="Media & Radio" color={C.indigo} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          Productora · <span style={{ fontStyle: "italic", fontWeight: 400, color: C.indigo }}>Gestora Cultural</span>
        </h2>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: `${C.indigo}88`, letterSpacing: "0.1em", textTransform: "uppercase" }}>RCN Radio · 2014—2016</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {["Radio","Pauta","Comunidad","Narrativa"].map((t,i) => <Tag key={i} label={t} c={C.indigo} />)}
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
        {[
          "Producción y dirección de contenido radiofónico cultural en uno de los medios de mayor audiencia regional. Gestión de pauta publicitaria y alianzas con anunciantes locales y nacionales.",
          "Coordinación de eventos culturales, entrevistas con figuras del arte y política regional. Construcción de puentes entre comunidad, sector privado e instituciones. Narrativa y posicionamiento de marca en medios masivos.",
        ].map((p, i) => <p key={i} style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.82)", lineHeight: 1.9, fontSize: ".93rem", fontWeight: 300, margin: 0 }}>{p}</p>)}
      </div>
    </div>
  );
}

/* Spread 3 — Dev */
function S3Left() {
  return (
    <div style={{ padding: "32px 36px 32px 44px", height: "100%", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.indigo} />
      <AccentBar color={C.indigo} side="left" />
      <PageLabel num="04" label="Dev & Builder" color={C.indigo} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          BuscArt · <span style={{ fontStyle: "italic", fontWeight: 400, color: C.indigo }}>Marketplace</span>
        </h2>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: `${C.indigo}88`, letterSpacing: "0.1em", textTransform: "uppercase" }}>Full-Stack · 2025</span>
      </div>
      <span style={{
        fontFamily: "monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "4px 11px", alignSelf: "flex-start",
        border: `1px solid ${C.teal}44`, color: C.teal, background: `${C.teal}12`,
        clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
      }}>● Beta activa — Medellín</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {["Next.js","Node.js","TypeScript","Stripe","Supabase"].map((t,i) => <Tag key={i} label={t} c={C.indigo} />)}
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
        {[
          "Marketplace que conecta artistas emergentes con empresas que necesitan talento creativo. Arquitectura full-stack con panel admin, pagos integrados, perfiles verificados y motor de búsqueda por categoría, ciudad y presupuesto.",
          "Desde la visión de negocio hasta el deploy: modelo de monetización, UX/UI completa y flujo de onboarding para artistas y empresas.",
        ].map((p, i) => <p key={i} style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.82)", lineHeight: 1.9, fontSize: ".93rem", fontWeight: 300, margin: 0 }}>{p}</p>)}
      </div>
    </div>
  );
}

function S3Right() {
  return (
    <div style={{ padding: "40px 44px 40px 36px", height: "100%", display: "flex", flexDirection: "column", gap: 18, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.purple} />
      <AccentBar color={C.purple} side="right" />
      <PageLabel num="04b" label="Más Proyectos" color={C.purple} />
      {[
        { name: "Portfolio Personal", year: "2026", status: "Producción", sc: C.purple, stack: ["Next.js","Framer Motion","Tailwind"], desc: "Diseño y desarrollo completo — arquitectura de componentes, micro-animaciones y sistema de diseño propio con glassmorphism." },
        { name: "Proyectos Freelance", year: "2023—hoy", status: "Continuo", sc: C.pink, stack: ["React","WordPress","Webflow","Make"], desc: "Soluciones web para clientes en salud, retail y servicios. Integraciones CRM, pasarelas de pago y automatizaciones cloud." },
      ].map((p, i) => (
        <div key={i} style={{ padding: "16px 18px", background: "rgba(255,255,255,.03)", borderRadius: 10, border: `1px solid ${i === 0 ? C.purpleA : C.pinkA}.2)`, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 700, color: "#fff" }}>{p.name}</span>
            <span style={{ fontFamily: "monospace", fontSize: 10, padding: "2px 8px", border: `1px solid ${p.sc}44`, color: p.sc, background: `${p.sc}12`, clipPath: "polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)", textTransform: "uppercase", letterSpacing: "0.08em" }}>● {p.status}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {p.stack.map((t, j) => <Tag key={j} label={t} c={i === 0 ? C.purple : C.pink} />)}
          </div>
          <p style={{ color: "rgba(255,255,255,.58)", lineHeight: 1.75, fontSize: ".85rem", fontWeight: 300, margin: 0 }}>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* Spread 4 — Stack + CTA */
function S4Left() {
  const sections = [
    { title: "Sales & Revenue", c: C.pink,   items: ["KAM","Hunter","Greenfield","Pipeline CRM","Negociación B2B","Revenue Growth"] },
    { title: "Tech Stack",      c: C.indigo,  items: ["Next.js","React","Node.js","TypeScript","Supabase","Stripe"] },
    { title: "Strategy",        c: C.purple,  items: ["Fundraising","Alianzas","Patrocinios","Stakeholders","Presupuestos"] },
    { title: "Tools & AI",      c: C.teal,    items: ["AI Tools","Make","Figma","HubSpot","Webflow","Vercel"] },
  ];
  return (
    <div style={{ padding: "40px 36px 40px 44px", height: "100%", display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.purple} />
      <AccentBar color={C.purple} side="left" />
      <PageLabel num="05" label="Stack & Skills" color={C.purple} />
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1, margin: 0 }}>
        Hard Skills &amp;{" "}
        <span style={{ fontStyle: "italic", fontWeight: 400, background: `linear-gradient(135deg,${C.purple},${C.pink},${C.teal})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Business</span>
      </h2>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, alignContent: "start" }}>
        {sections.map((s, i) => (
          <div key={i} style={{ padding: "11px 13px", background: "rgba(255,255,255,.03)", borderRadius: 8, border: `1px solid ${s.c}25`, display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontFamily: "monospace", fontSize: 10, color: `${s.c}99`, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.title}</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {s.items.map((t, j) => <Tag key={j} label={t} c={s.c} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function S4Right() {
  return (
    <div style={{ padding: "40px 44px 40px 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, position: "relative", zIndex: 1 }}>
      <StripeTop color={C.pink} />
      <AccentBar color={C.pink} side="right" />
      <PageLabel num="06" label="Contacto" color={C.pink} />
      <div>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,.3)", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>¿Hablamos?</span>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, margin: 0 }}>
          Construyamos algo{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400, background: `linear-gradient(135deg,${C.indigo},${C.purple},${C.pink},${C.teal})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200%", animation: "shimmer 5s ease infinite" }}>
            extraordinario
          </span>
        </p>
      </div>
      <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,.6)", lineHeight: 1.85, fontSize: ".9rem", fontWeight: 300, margin: 0 }}>
        ¿Tienes un proyecto que necesita visión de negocio y ejecución técnica?
        Hablemos de cómo puedo ayudarte a construirlo desde cero.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
        <a href="/contacto" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", padding: "13px 26px", color: "#fff", textDecoration: "none",
          background: `linear-gradient(135deg,${C.purple},${C.pink},${C.teal})`,
          clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
          boxShadow: `0 6px 22px ${C.purpleA}.4)`,
        }}>Trabajemos juntos <ArrowUpRight size={14} /></a>
        <a href="https://linkedin.com/in/wendynietovasquez/" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "10px 20px", color: "rgba(165,180,252,.75)", textDecoration: "none",
          border: `1px solid ${C.indigoA}.3)`, background: `${C.indigoA}.05)`,
          clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
        }}><Linkedin size={13} /> LinkedIn ↗</a>
      </div>
    </div>
  );
}

/* ─── SPREADS ARRAY ─────────────────────────────────────────── */
const SPREADS = [
  { Left: S0Left, Right: S0Right },
  { Left: S1Left, Right: S1Right },
  { Left: S2Left, Right: S2Right },
  { Left: S3Left, Right: S3Right },
  { Left: S4Left, Right: S4Right },
];

/* ════════════════════════════════════════════════════════════
   BOOK COMPONENT
════════════════════════════════════════════════════════════ */
export default function SobreMiLibro() {
  const [spread, setSpread]         = useState(0);
  const [flipping, setFlipping]     = useState(false);
  const [flipDir, setFlipDir]       = useState<"next" | "prev">("next");
  const [nextSpread, setNextSpread] = useState(0);
  const [isMobile, setIsMobile]     = useState(false);
  const touchX = useRef<number | null>(null);
  const total  = SPREADS.length;

  const flipTo = useCallback((target: number) => {
    if (flipping || target === spread || target < 0 || target >= total) return;
    setFlipDir(target > spread ? "next" : "prev");
    setNextSpread(target);
    setFlipping(true);
    setTimeout(() => {
      setSpread(target);
      setFlipping(false);
    }, 680);
  }, [flipping, spread, total]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") flipTo(spread + 1);
      if (e.key === "ArrowLeft")  flipTo(spread - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [spread, flipTo]);

  // Detectar dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const Cur  = SPREADS[spread];
  const Next = SPREADS[nextSpread];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@300;400&display=swap');
        @keyframes shimmer    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes stripeAnim { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes scanDown   { from{top:0} to{top:100vh} }
        @keyframes trackSlide { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }

        @keyframes flipPageNext {
          0%   { transform: rotateY(0deg);    z-index: 10; }
          49%  { transform: rotateY(-90deg);  z-index: 10; }
          50%  { transform: rotateY(-90deg);  z-index: 10; }
          100% { transform: rotateY(-180deg); z-index: 5;  }
        }
        @keyframes flipPagePrev {
          0%   { transform: rotateY(-180deg); z-index: 10; }
          50%  { transform: rotateY(-90deg);  z-index: 10; }
          100% { transform: rotateY(0deg);    z-index: 5;  }
        }
        .flip-next { animation: flipPageNext 0.68s cubic-bezier(.4,0,.2,1) forwards; transform-origin: left center; }
        .flip-prev { animation: flipPagePrev 0.68s cubic-bezier(.4,0,.2,1) forwards; transform-origin: right center; }
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
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "16px 16px 24px", background: C.bg, fontFamily: "'Cormorant Garamond', Georgia, serif", position: "relative", zIndex: 1 }}
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) dx < 0 ? flipTo(spread + 1) : flipTo(spread - 1);
          touchX.current = null;
        }}
      >
        {/* Top bar */}
        <div style={{ width: "100%", maxWidth: 920, display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Sobre Mí · Perfil</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(180,79,223,.5),transparent)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.purple, opacity: .8, animation: "blink 1.8s infinite" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Wendy Nieto · 2026</span>
        </div>

        {/* Mensaje para móvil */}
        {isMobile && (
          <div style={{
            width: "100%", maxWidth: 920, marginBottom: 16,
            padding: "12px 16px",
            background: "rgba(180,79,223,.08)",
            border: "1px solid rgba(180,79,223,.2)",
            borderRadius: "10px",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 24, height: 24,
              background: `linear-gradient(135deg,${C.purple},${C.pink})`,
              borderRadius: "6px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", color: "white",
              transform: "rotate(90deg)",
            }}>↻</div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: "monospace", fontSize: "9px", lineHeight: 1.4,
                color: "rgba(255,255,255,.6)", margin: 0,
                letterSpacing: "0.08em", textTransform: "uppercase"
              }}>
                Para mejor experiencia, gira tu celular horizontalmente
              </p>
            </div>
          </div>
        )}

        {/* LIBRO */}
        <div style={{
          width: "100%", maxWidth: 920,
          height: isMobile ? "min(85vh, 700px)" : "min(70vh, 580px)",
          position: "relative",
          perspective: isMobile ? "none" : "2200px",
          perspectiveOrigin: "50% 50%",
        }}>
          {/* Sombra */}
          <div style={{
            position: "absolute", bottom: -24, left: "4%", right: "4%", height: 44,
            background: "radial-gradient(ellipse,rgba(180,79,223,.28) 0%,transparent 70%)",
            filter: "blur(14px)", pointerEvents: "none",
          }} />

          {isMobile ? (
            // === VERSIÓN MÓVIL: UNA SOLA PÁGINA ===
            <div style={{
              position: "relative", width: "100%", height: "100%",
              background: C.pageL,
              border: "1px solid rgba(180,79,223,.22)",
              borderRadius: "14px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 0 28px rgba(0,0,0,.5)",
              overflow: "hidden",
            }}>
              <div style={{ padding: "24px 20px", height: "100%", overflowY: "auto" }}>
                <Cur.Left />
                <div style={{ marginTop: 20, borderTop: `1px solid ${C.purple}22`, paddingTop: 20 }}>
                  <Cur.Right />
                </div>
              </div>
            </div>
          ) : (
            // === VERSIÓN DESKTOP: LIBRO DOBLE ===
            <>
              {/* PÁGINA IZQUIERDA */}
              <div style={{
                position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
                background: C.pageL,
                border: "1px solid rgba(180,79,223,.22)",
                borderRight: "none",
                borderRadius: "14px 0 0 14px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), -6px 0 28px rgba(0,0,0,.5)",
                overflow: "hidden",
              }}>
                {flipping && flipDir === "prev" ? <Next.Left /> : <Cur.Left />}
              </div>

              {/* ENCUADERNACIÓN */}
              <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 16, height: "100%", zIndex: 20, pointerEvents: "none",
                background: "linear-gradient(90deg,rgba(0,0,0,.7) 0%,rgba(180,79,223,.12) 35%,rgba(224,64,160,.08) 50%,rgba(180,79,223,.12) 65%,rgba(0,0,0,.7) 100%)",
                boxShadow: "0 0 16px rgba(180,79,223,.15)",
              }}>
                <div style={{ position: "absolute", top: "8%", bottom: "8%", left: "50%", transform: "translateX(-50%)", width: 1, background: "linear-gradient(to bottom,transparent,rgba(180,79,223,.5) 20%,rgba(224,64,160,.5) 80%,transparent)" }} />
              </div>

              {/* PÁGINA DERECHA */}
              <div style={{
                position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
                background: C.pageR,
                border: "1px solid rgba(224,64,160,.18)",
                borderLeft: "none",
                borderRadius: "0 14px 14px 0",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.03), 6px 0 28px rgba(0,0,0,.5)",
                overflow: "hidden",
              }}>
                {flipping && flipDir === "next" ? <Next.Right /> : <Cur.Right />}
              </div>

              {/* HOJA QUE SE DOBLA */}
              {flipping && (
                <div
                  className={flipDir === "next" ? "flip-next" : "flip-prev"}
                  style={{
                    position: "absolute", top: 0,
                    left: flipDir === "next" ? "50%" : "0%",
                    width: "50%", height: "100%", zIndex: 10,
                    transformStyle: "preserve-3d",
                    transformOrigin: flipDir === "next" ? "left center" : "right center",
                  }}
                >
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    background: flipDir === "next" ? C.pageR : C.pageL,
                    border: flipDir === "next" ? "1px solid rgba(224,64,160,.2)" : "1px solid rgba(180,79,223,.22)",
                    borderRadius: flipDir === "next" ? "0 14px 14px 0" : "14px 0 0 14px",
                    overflow: "hidden",
                    boxShadow: flipDir === "next"
                      ? "inset -4px 0 18px rgba(0,0,0,.4), 4px 0 18px rgba(0,0,0,.5)"
                      : "inset 4px 0 18px rgba(0,0,0,.4), -4px 0 18px rgba(0,0,0,.5)",
                  }}>
                    {flipDir === "next" ? <Cur.Right /> : <Cur.Left />}
                  </div>

                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: flipDir === "next" ? C.pageL : C.pageR,
                    border: flipDir === "next" ? "1px solid rgba(180,79,223,.22)" : "1px solid rgba(224,64,160,.18)",
                    borderRadius: flipDir === "next" ? "14px 0 0 14px" : "0 14px 14px 0",
                    overflow: "hidden",
                    boxShadow: flipDir === "next"
                      ? "inset 4px 0 18px rgba(0,0,0,.4), -4px 0 18px rgba(0,0,0,.5)"
                      : "inset -4px 0 18px rgba(0,0,0,.4), 4px 0 18px rgba(0,0,0,.5)",
                  }}>
                    {flipDir === "next" ? <Next.Left /> : <Next.Right />}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* NAVEGACIÓN */}
        <div style={{ 
          width: "100%", maxWidth: 920, 
          display: "flex", 
          alignItems: "center", 
          gap: isMobile ? 8 : 12, 
          marginTop: isMobile ? 10 : 14,
          flexDirection: isMobile ? "column" : "row"
        }}>
          <div style={{ 
            display: "flex", 
            gap: isMobile ? 6 : 12, 
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "space-between" : "flex-start"
          }}>
            <button
              onClick={() => flipTo(spread - 1)}
              disabled={spread === 0 || flipping}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "monospace", fontSize: isMobile ? 9 : 10, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: isMobile ? "6px 12px" : "8px 16px", background: "transparent", cursor: spread === 0 ? "default" : "pointer",
                border: `1px solid rgba(180,79,223,${spread === 0 ? ".15" : ".4"})`,
                color: spread === 0 ? "rgba(255,255,255,.15)" : "rgba(180,79,223,.85)",
                clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
                transition: "all .2s",
              }}>
              <ChevronLeft size={isMobile ? 10 : 12} /> {isMobile ? "" : "Anterior"}
            </button>

            <button
              onClick={() => flipTo(spread + 1)}
              disabled={spread === total - 1 || flipping}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "monospace", fontSize: isMobile ? 9 : 10, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: isMobile ? "6px 12px" : "8px 16px", cursor: spread === total - 1 ? "default" : "pointer",
                border: `1px solid rgba(180,79,223,${spread === total - 1 ? ".15" : ".55"})`,
                background: spread === total - 1 ? "transparent" : "rgba(180,79,223,.12)",
                color: spread === total - 1 ? "rgba(255,255,255,.15)" : C.purple,
                clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
                transition: "all .2s",
              }}>
              {isMobile ? "" : "Siguiente"} <ChevronRight size={isMobile ? 10 : 12} />
            </button>
          </div>

          <div style={{ 
            flex: 1, 
            display: "flex", 
            gap: isMobile ? 4 : 6, 
            justifyContent: "center",
            marginTop: isMobile ? 8 : 0
          }}>
            {SPREADS.map((_, i) => (
              <button key={i} onClick={() => flipTo(i)}
                style={{
                  width: i === spread ? (isMobile ? 18 : 22) : (isMobile ? 5 : 7), 
                  height: isMobile ? 5 : 7, 
                  borderRadius: 4, 
                  border: "none",
                  cursor: "pointer", 
                  padding: 0,
                  background: i === spread ? C.purple : `${C.purple}33`,
                  transition: "all .3s ease",
                }} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,.22)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div style={{ position: "relative", width: 40, height: 1, overflow: "hidden", background: "linear-gradient(90deg,#b44fdf,transparent)" }}>
            <div style={{ position: "absolute", top: -2, left: -6, width: 6, height: 6, borderRadius: "50%", background: C.purple, animation: "trackSlide 2s ease-in-out infinite" }} />
          </div>
          <span>Usa ← → o desliza · {spread + 1} / {total}</span>
        </div>

      </main>
    </>
  );
}
