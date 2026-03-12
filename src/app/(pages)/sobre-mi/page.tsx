"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github as GithubIcon, Linkedin as LinkedinIcon, Download, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/* ─── PALETA OFICIAL ─────────────────────────────────────── */
// Purple:      #b44fdf  /  rgba(180,79,223,...)
// Pink:        #e040a0  /  rgba(224,64,160,...)
// Teal:        #5effd8  /  rgba(94,255,216,...)
// Light Indigo:#a5b4fc  /  rgba(165,180,252,...)

/* ─── PÁGINAS ────────────────────────────────────────────── */
const PAGES = [
  { id: "intro",    num: "01", label: "Perfil",          accent: "rgba(180,79,223,",   hex: "#b44fdf" },
  { id: "sales",    num: "02", label: "Ventas Tech",      accent: "rgba(224,64,160,",   hex: "#e040a0" },
  { id: "cultural", num: "03", label: "Cultura",          accent: "rgba(94,255,216,",   hex: "#5effd8" },
  { id: "dev",      num: "04", label: "Dev & Builder",    accent: "rgba(165,180,252,",  hex: "#a5b4fc" },
  { id: "stack",    num: "05", label: "Stack",            accent: "rgba(180,79,223,",   hex: "#b44fdf" },
  { id: "cta",      num: "06", label: "Contacto",         accent: "rgba(224,64,160,",   hex: "#e040a0" },
];

/* ─── TAG (idéntico al original) ─────────────────────────── */
function Tag({ label, color }: { label: string; color: "purple" | "pink" | "teal" | "indigo" }) {
  const c = color === "purple" ? "#b44fdf"
          : color === "pink"   ? "#e040a0"
          : color === "teal"   ? "#5effd8"
          : "#a5b4fc";
  return (
    <span className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 inline-block"
      style={{ border:`1px solid ${c}44`, color:`${c}cc`, background:`${c}11`,
        clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)" }}>
      {label}
    </span>
  );
}

/* ─── GLASS PANEL WRAPPER ────────────────────────────────── */
function GlassPanel({ children, accent, className = "", style }: {
  children: React.ReactNode;
  accent: { hex: string; rgba: string };
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: `${accent.rgba}.025)`,
        border: `1px solid ${accent.rgba}.18)`,
        backdropFilter: "blur(28px) saturate(1.5)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,.05), 0 32px 80px rgba(0,0,0,.35), 0 0 60px ${accent.rgba}.06)`,
        ...style,
      }}
    >
      {/* Top stripe */}
      <div className="stripe-anim absolute top-0 left-0 right-0 h-0.5 z-10 pointer-events-none"
        style={{ background: `linear-gradient(90deg,transparent,${accent.hex} 25%,#e040a0 50%,#5effd8 75%,transparent)` }} />
      {/* Corners */}
      <div className="absolute pointer-events-none" style={{ top:10, left:10, width:14, height:14, borderTop:`1px solid ${accent.rgba}.35)`, borderLeft:`1px solid ${accent.rgba}.35)` }} />
      <div className="absolute pointer-events-none" style={{ top:10, right:10, width:14, height:14, borderTop:`1px solid ${accent.rgba}.35)`, borderRight:`1px solid ${accent.rgba}.35)` }} />
      <div className="absolute pointer-events-none" style={{ bottom:10, left:10, width:14, height:14, borderBottom:`1px solid ${accent.rgba}.35)`, borderLeft:`1px solid ${accent.rgba}.35)` }} />
      <div className="absolute pointer-events-none" style={{ bottom:10, right:10, width:14, height:14, borderBottom:`1px solid ${accent.rgba}.35)`, borderRight:`1px solid ${accent.rgba}.35)` }} />
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 01 — INTRO (idéntico al hero original)
═══════════════════════════════════════════════════════════ */
function PageIntro() {
  return (
    <GlassPanel accent={{ hex:"#b44fdf", rgba:"rgba(180,79,223," }} className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight:460 }}>
      {/* Divider vertical */}
      <div className="absolute top-[8%] left-1/2 bottom-[8%] w-px hidden md:block pointer-events-none"
        style={{ background:"linear-gradient(to bottom,transparent,rgba(180,79,223,.2) 30%,rgba(224,64,160,.2) 70%,transparent)" }} />

      {/* LEFT */}
      <div className="flex flex-col justify-center gap-5 px-10 md:px-14 py-10 relative z-10">
        <span className="font-mono text-[10px] tracking-[.13em] uppercase px-3 py-1 text-purple-300 self-start"
          style={{ border:"1px solid rgba(180,79,223,.35)", background:"rgba(180,79,223,.07)", clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
          Founder &amp; Developer
        </span>

        <h1 className="leading-[.9] select-none"
          style={{ fontSize:"clamp(2.8rem,4.5vw,5rem)", fontFamily:"'Cormorant Garamond',serif", fontWeight:700, letterSpacing:"-.03em" }}>
          <span style={{ color:"#fff" }}>Estratega de<br /></span>
          <span className="name-shimmer font-light italic"
            style={{ background:"linear-gradient(135deg,#a5b4fc 0%,#b44fdf 40%,#e040a0 80%,#5effd8 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Negocios &amp; Builder
          </span>
        </h1>

        <p className="text-white/55 leading-[1.8] text-[.92rem] font-light max-w-md">
          De liderar negociaciones políticas y expansión de mercados en Rappi, a construir la 
          infraestructura tecnológica para la economía creativa en LATAM. No solo escribo código — 
          diseño soluciones escalables con visión de negocio y gestión de stakeholders.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="/cv.pdf" download
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-6 py-3 text-white transition-all hover:-translate-y-0.5"
            style={{ background:"linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)",
              clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
              boxShadow:"0 6px 24px rgba(180,79,223,.35)" }}>
            <Download size={14} /> Descargar CV
          </a>
          <a href="https://linkedin.com/in/wendynietovasquez/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-5 py-3 text-purple-200/70 transition-all hover:-translate-y-0.5 hover:text-white"
            style={{ border:"1px solid rgba(165,180,252,.3)", background:"rgba(165,180,252,.05)",
              clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
            <LinkedinIcon size={14} /> LinkedIn ↗
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-4 py-3 text-purple-200/50 transition-all hover:-translate-y-0.5 hover:text-white"
            style={{ border:"1px solid rgba(180,79,223,.2)", background:"rgba(180,79,223,.04)",
              clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
            <GithubIcon size={14} />
          </a>
        </div>

        <div className="inline-flex items-end gap-2">
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:700, lineHeight:1,
            background:"linear-gradient(135deg,#e040a0,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            9+
          </span>
          <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">Años de Trayectoria</span>
        </div>
      </div>

      {/* RIGHT — foto */}
      <div className="relative hidden md:block overflow-hidden">
        <Image src="/sobremisection.png" alt="Wendy Nieto" fill
          className="object-cover object-top"
          style={{ mixBlendMode:"luminosity", filter:"contrast(1.05) brightness(0.88)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background:`linear-gradient(to right,rgba(6,6,16,.6) 0%,transparent 20%),
                      linear-gradient(to left,rgba(6,6,16,.5) 0%,transparent 20%),
                      linear-gradient(to top,rgba(6,6,16,.85) 0%,transparent 35%)`
        }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"linear-gradient(135deg,rgba(109,40,217,.15) 0%,transparent 50%,rgba(224,64,160,.08) 100%)", mixBlendMode:"color" }} />
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 02 — VENTAS TECH
═══════════════════════════════════════════════════════════ */
function PageSales() {
  const [active, setActive] = useState(0);
  const acc = { hex:"#e040a0", rgba:"rgba(224,64,160," };

  const roles = [
    {
      period: "2022 — 2025", role: "Hunter Senior Top Deal", company: "Rappi",
      tags: ["KAM","Hunter","Greenfield","Top Performer"] as const,
      body: [
        "Lideré la expansión nacional en ciudades Greenfield, abriendo mercados desde cero en más de 8 ciudades del país. Negocié contratos de alto impacto con grandes marcas del retail, restaurantes y consumo masivo — logrando acuerdos exclusivos y posicionamiento premium dentro de la plataforma.",
        "Managé un portafolio de cuentas clave (KAM) con seguimiento continuo de GMV, rentabilidad y churn. Diseñé estrategias de pricing y estructuras de comisión adaptadas a cada mercado, coordinando equipos de operaciones y onboarding para garantizar la activación exitosa de nuevos socios.",
        "Resultado: crecimiento 3× del portafolio asignado con reconocimiento como Top Performer a nivel nacional.",
      ],
    },
    {
      period: "2019 — 2022", role: "Sales Business Specialist", company: "Sector Tech & Plataformas",
      tags: ["B2B","CRM","Pipeline","Consultivo"] as const,
      body: [
        "Desarrollo de relaciones comerciales B2B en el ecosistema tech, identificando oportunidades con medianas y grandes empresas. Construcción de propuestas de valor adaptadas a cada cliente, ciclos de venta consultivo y cierre de contratos de mediano y largo plazo.",
        "Gestión de pipeline en CRM, análisis de datos de conversión y optimización de procesos para reducir el ciclo de cierre. Trabajo transversal con equipos de producto, marketing y operaciones para asegurar la correcta implementación de cada solución.",
      ],
    },
  ];

  const r = roles[active];

  return (
    <GlassPanel accent={acc}>
      <div className="flex flex-col gap-6 px-10 md:px-14 py-10">
        {/* Header */}
        <div>
          <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-1" style={{ color:"rgba(224,64,160,.7)" }}>
            KAM · Hunter · Sales Business
          </p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:700, color:"#fff", lineHeight:1 }}>
            Especialista en<br />
            <span className="font-light italic" style={{ background:"linear-gradient(135deg,#e040a0,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Ventas &amp; Tech
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 flex-wrap">
          {roles.map((ro, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="font-mono text-[10px] tracking-[.08em] uppercase px-4 py-2 transition-all"
              style={{
                border: `1px solid ${i === active ? "rgba(224,64,160,.6)" : "rgba(224,64,160,.2)"}`,
                background: i === active ? "rgba(224,64,160,.12)" : "rgba(224,64,160,.03)",
                color: i === active ? "#e040a0" : "rgba(224,64,160,.5)",
                clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
              }}>
              {ro.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          {/* Left: meta */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Período</p>
              <p className="font-mono text-[11px]" style={{ color:"rgba(224,64,160,.8)" }}>{r.period}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Rol</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:700, color:"#fff", lineHeight:1.2 }}>{r.role}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t, i) => <Tag key={i} label={t} color="pink" />)}
              </div>
            </div>
            {/* Divider vertical decorativo */}
            <div className="hidden md:block flex-1 w-px self-stretch ml-auto mt-4"
              style={{ background:"linear-gradient(to bottom,rgba(224,64,160,.2),transparent)" }} />
          </div>

          {/* Right: body */}
          <div className="flex flex-col gap-4">
            {r.body.map((para, i) => (
              <p key={i} className="text-white/55 leading-[1.85] text-[.9rem] font-light">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 03 — CULTURA & GESTIÓN
═══════════════════════════════════════════════════════════ */
function PageCultural() {
  const [active, setActive] = useState(0);
  const acc = { hex:"#5effd8", rgba:"rgba(94,255,216," };

  const roles = [
    {
      period: "2016 — 2019", role: "Coordinadora de Proyectos y Gestión de Alianzas", company: "Alcaldía Municipal",
      tags: ["Sector Público","Patrocinios","Presupuesto +500M","50+ personas"] as const,
      body: [
        "Lideré la gestión de proyectos culturales de alto impacto social: festivales masivos, eventos regionales y programas de formación artística. Fui responsable de negociar con entidades privadas para conseguir patrocinios y alianzas estratégicas que complementaran el presupuesto público.",
        "Administré presupuestos anuales superiores a $500M COP, coordinando equipos de más de 50 personas entre contratistas, voluntarios y funcionarios. Gestión de stakeholders políticos, gremios empresariales y comunidades para alinear objetivos y garantizar la viabilidad de cada proyecto.",
      ],
    },
    {
      period: "2014 — 2016", role: "Productora & Gestora Cultural", company: "Emisora Arauca · RCN Radio",
      tags: ["Media","Radio","Pauta Publicitaria","Comunidad"] as const,
      body: [
        "Producción y dirección de contenido radiofónico cultural en uno de los medios de mayor audiencia regional. Gestión de pauta publicitaria y alianzas con anunciantes locales y nacionales, desarrollando propuestas de patrocinio para programas especiales y transmisiones en vivo.",
        "Coordinación de eventos de difusión cultural, entrevistas con figuras del arte y política regional, y construcción de puentes entre comunidad, sector privado e instituciones. Experiencia directa en narrativa, comunicación de impacto y posicionamiento de marca en medios masivos.",
      ],
    },
  ];

  const r = roles[active];

  return (
    <GlassPanel accent={acc}>
      <div className="flex flex-col gap-6 px-10 md:px-14 py-10">
        <div>
          <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-1" style={{ color:"rgba(94,255,216,.7)" }}>
            Sector Público · Media · Patrocinios
          </p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:700, color:"#fff", lineHeight:1 }}>
            Fundraising &amp;<br />
            <span className="font-light italic" style={{ background:"linear-gradient(135deg,#5effd8,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Gestión Cultural
            </span>
          </h2>
        </div>

        <div className="flex gap-3 flex-wrap">
          {roles.map((ro, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="font-mono text-[10px] tracking-[.08em] uppercase px-4 py-2 transition-all"
              style={{
                border: `1px solid ${i === active ? "rgba(94,255,216,.6)" : "rgba(94,255,216,.2)"}`,
                background: i === active ? "rgba(94,255,216,.08)" : "rgba(94,255,216,.02)",
                color: i === active ? "#5effd8" : "rgba(94,255,216,.45)",
                clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
              }}>
              {ro.period.split(" — ")[0]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Período</p>
              <p className="font-mono text-[11px]" style={{ color:"rgba(94,255,216,.8)" }}>{r.period}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Rol</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", fontWeight:700, color:"#fff", lineHeight:1.25 }}>{r.role}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Empresa</p>
              <p className="font-mono text-[10px]" style={{ color:"rgba(94,255,216,.7)" }}>{r.company}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t, i) => <Tag key={i} label={t} color="teal" />)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {r.body.map((para, i) => (
              <p key={i} className="text-white/55 leading-[1.85] text-[.9rem] font-light">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 04 — DEV & BUILDER
═══════════════════════════════════════════════════════════ */
function PageDev() {
  const [active, setActive] = useState(0);
  const acc = { hex:"#a5b4fc", rgba:"rgba(165,180,252," };

  const projects = [
    {
      name: "BuscArt", year: "2025", status: "Beta activa", statusColor: "#5effd8",
      stack: ["Next.js","Node.js","TypeScript","Stripe","Supabase"] as const,
      body: [
        "Marketplace que conecta artistas emergentes con empresas que necesitan talento creativo para eventos, campañas y espacios. Arquitectura full-stack con panel de administración, sistema de pagos integrado, perfiles verificados y motor de búsqueda por categoría, ciudad y presupuesto.",
        "Desde la visión de negocio hasta el deploy: diseñé el modelo de monetización, la UX/UI completa y el flujo de onboarding tanto para artistas como para empresas. Actualmente en fase beta con primeros usuarios activos en Medellín.",
      ],
    },
    {
      name: "Portfolio Personal", year: "2026", status: "Producción", statusColor: "#b44fdf",
      stack: ["Next.js","Framer Motion","Tailwind","TypeScript"] as const,
      body: [
        "Diseño y desarrollo completo de este portafolio — desde la arquitectura de componentes hasta cada micro-animación. Sistema de diseño propio con glassmorphism, paleta de color coherente y animaciones CSS/JS para todos los efectos visuales principales.",
        "Enfoque en performance, accesibilidad y experiencia móvil sin sacrificar la densidad visual del diseño.",
      ],
    },
    {
      name: "Proyectos Freelance", year: "2023 — hoy", status: "Continuo", statusColor: "#e040a0",
      stack: ["React","WordPress","Webflow","APIs REST","Make"] as const,
      body: [
        "Desarrollo de soluciones web para clientes en sectores de salud, retail y servicios profesionales. Integraciones con CRMs, pasarelas de pago, automatizaciones y despliegue en infraestructura cloud.",
        "Enfoque en soluciones pragmáticas orientadas al negocio: más conversiones, menos fricción, mayor autonomía operativa para el cliente.",
      ],
    },
  ];

  const p = projects[active];

  return (
    <GlassPanel accent={acc}>
      <div className="flex flex-col gap-6 px-10 md:px-14 py-10">
        <div>
          <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-1" style={{ color:"rgba(165,180,252,.7)" }}>
            Full-Stack · Productos · Freelance
          </p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:700, color:"#fff", lineHeight:1 }}>
            Programadora &amp;<br />
            <span className="font-light italic" style={{ background:"linear-gradient(135deg,#a5b4fc,#b44fdf)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Creadora
            </span>
          </h2>
        </div>

        <div className="flex gap-3 flex-wrap">
          {projects.map((pr, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="font-mono text-[10px] tracking-[.08em] uppercase px-4 py-2 transition-all"
              style={{
                border: `1px solid ${i === active ? "rgba(165,180,252,.6)" : "rgba(165,180,252,.2)"}`,
                background: i === active ? "rgba(165,180,252,.1)" : "rgba(165,180,252,.02)",
                color: i === active ? "#a5b4fc" : "rgba(165,180,252,.45)",
                clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
              }}>
              {pr.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Año</p>
              <p className="font-mono text-[11px]" style={{ color:"rgba(165,180,252,.8)" }}>{p.year}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1">Estado</p>
              <span className="font-mono text-[9px] tracking-[.1em] uppercase px-3 py-1 inline-block"
                style={{ border:`1px solid ${p.statusColor}44`, color:p.statusColor, background:`${p.statusColor}11`,
                  clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)" }}>
                ● {p.status}
              </span>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t, i) => <Tag key={i} label={t} color="indigo" />)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {p.body.map((para, i) => (
              <p key={i} className="text-white/55 leading-[1.85] text-[.9rem] font-light">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 05 — STACK & SKILLS (grid de tags, misma estética)
═══════════════════════════════════════════════════════════ */
function PageStack() {
  const acc = { hex:"#b44fdf", rgba:"rgba(180,79,223," };
  const sections = [
    { title:"Sales & Revenue",  color:"pink"   as const, items:["KAM","Hunter Comercial","Sales Business","Greenfield Expansion","Pipeline CRM","Negociación B2B","Revenue Growth","Marketplace Ops"] },
    { title:"Tech Stack",       color:"indigo" as const, items:["Next.js","React","Node.js","TypeScript","Supabase","Stripe","REST APIs","Git / GitHub"] },
    { title:"Strategy",         color:"purple" as const, items:["Fundraising","Gestión de Alianzas","Patrocinios","Gestión Pública","Stakeholders","Presupuestos","Proyectos Culturales"] },
    { title:"Tools & AI",       color:"teal"   as const, items:["AI Tools","Zapier / Make","Notion","Figma","HubSpot CRM","Webflow","Analytics","Vercel"] },
  ];

  return (
    <GlassPanel accent={acc}>
      <div className="flex flex-col gap-6 px-10 md:px-14 py-10">
        <div>
          <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-1 text-white/30">Capacidades completas</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:700, color:"#fff", lineHeight:1 }}>
            Hard Skills &amp;{" "}
            <span className="font-light italic" style={{ background:"linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Business
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((s, i) => {
            const borderColor = s.color === "pink" ? "rgba(224,64,160,.15)" : s.color === "indigo" ? "rgba(165,180,252,.15)" : s.color === "teal" ? "rgba(94,255,216,.15)" : "rgba(180,79,223,.15)";
            const labelColor  = s.color === "pink" ? "rgba(224,64,160,.7)"  : s.color === "indigo" ? "rgba(165,180,252,.7)"  : s.color === "teal" ? "rgba(94,255,216,.7)"  : "rgba(180,79,223,.7)";
            return (
              <div key={i} className="rounded-xl p-5"
                style={{ background:"rgba(255,255,255,.025)", border:`1px solid ${borderColor}` }}>
                <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-4" style={{ color:labelColor }}>{s.title}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((t, j) => <Tag key={j} label={t} color={s.color} />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   PÁGINA 06 — CTA (idéntico al original)
═══════════════════════════════════════════════════════════ */
function PageCTA() {
  return (
    <GlassPanel accent={{ hex:"#e040a0", rgba:"rgba(224,64,160," }}
      className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-12">
      <div>
        <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2">¿Hablamos?</p>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, color:"#fff" }}>
          Construyamos algo
          <span className="name-shimmer font-light italic ml-3"
            style={{ background:"linear-gradient(135deg,#a5b4fc,#b44fdf,#e040a0,#5effd8)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundSize:"200%" }}>
            extraordinario
          </span>
        </p>
        <p className="text-white/40 text-[.9rem] font-light mt-4 max-w-md leading-relaxed">
          ¿Tienes un proyecto que necesita visión de negocio y ejecución técnica? 
          Hablemos de cómo puedo ayudarte a construirlo.
        </p>
      </div>

      <div className="flex flex-col gap-3 shrink-0 items-start md:items-end">
        <a href="/contacto"
          className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-8 py-4 text-white transition-all hover:-translate-y-0.5"
          style={{ background:"linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)",
            clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            boxShadow:"0 6px 24px rgba(180,79,223,.35)" }}>
          Trabajemos juntos <ArrowUpRight size={14} />
        </a>
        <a href="https://linkedin.com/in/wendynietovasquez/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-6 py-3 text-purple-200/60 transition-all hover:-translate-y-0.5 hover:text-white"
          style={{ border:"1px solid rgba(165,180,252,.25)", background:"rgba(165,180,252,.04)",
            clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
          <LinkedinIcon size={13} /> LinkedIn ↗
        </a>
      </div>
    </GlassPanel>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN — LIBRO NAVEGABLE
═══════════════════════════════════════════════════════════ */
export default function SobreMiBook() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchX = useRef<number | null>(null);
  const total = PAGES.length;

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= total || idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current, total]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current]);

  const page = PAGES[current];

  const pageVariants = {
    enter:  (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @keyframes nameShimmer  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes stripeShimmer{ 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes blink        { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes scanDown     { from{top:-4px} to{top:100vh} }
        @keyframes trackSlide   { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        .name-shimmer { animation: nameShimmer 5s ease infinite; background-size: 200%; }
        .stripe-anim  { animation: stripeShimmer 4s ease-in-out infinite; }
        .blink-dot    { animation: blink 1.8s infinite; }
        .scanline-el  { animation: scanDown 7s linear infinite; }
        .track-dot    { animation: trackSlide 2s ease-in-out infinite; }
      `}</style>

      {/* Scanline */}
      <div className="scanline-el fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-10"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)" }} />

      <main className="relative min-h-screen pt-4 pb-10 px-6 md:px-14 z-10"
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
          touchX.current = null;
        }}>
        <div className="max-w-5xl mx-auto space-y-5">

          {/* ── Top bar (igual al original) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4 font-mono text-[10px] text-white/30 tracking-[.1em] uppercase">
            <span>Sobre Mí · Perfil</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#b44fdf,transparent)" }} />
            <span className="blink-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
            <span>Wendy Nieto · 2026</span>
          </motion.div>

          {/* ── Página label ── */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[.15em] uppercase" style={{ color:`${page.hex}66` }}>
              {page.num}
            </span>
            <div className="h-px w-8" style={{ background:`${page.hex}44` }} />
            <span className="font-mono text-[9px] tracking-[.12em] uppercase" style={{ color:`${page.hex}88` }}>
              {page.label}
            </span>
          </div>

          {/* ── Contenido animado ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            >
              {current === 0 && <PageIntro />}
              {current === 1 && <PageSales />}
              {current === 2 && <PageCultural />}
              {current === 3 && <PageDev />}
              {current === 4 && <PageStack />}
              {current === 5 && <PageCTA />}
            </motion.div>
          </AnimatePresence>

          {/* ── Navegación ── */}
          <div className="flex items-center gap-4 pt-1">
            {/* Prev */}
            <button onClick={prev} disabled={current === 0}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[.08em] uppercase px-4 py-2.5 transition-all hover:-translate-y-0.5 disabled:opacity-20 disabled:cursor-default disabled:hover:translate-y-0"
              style={{ border:`1px solid ${page.hex}33`, background:`${page.hex}08`,
                color: `${page.hex}88`, clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
              <ChevronLeft size={12} /> Anterior
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 flex-1 justify-center">
              {PAGES.map((p, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 22 : 7,
                    height: 7,
                    background: i === current ? p.hex : `${p.hex}33`,
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 4,
                  }} />
              ))}
            </div>

            {/* Next */}
            <button onClick={next} disabled={current === total - 1}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[.08em] uppercase px-4 py-2.5 transition-all hover:-translate-y-0.5 disabled:opacity-20 disabled:cursor-default disabled:hover:translate-y-0"
              style={{ border:`1px solid ${page.hex}55`, background:`${page.hex}15`,
                color: page.hex, clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
              Siguiente <ChevronRight size={12} />
            </button>
          </div>

          {/* ── Scroll indicator (igual al original) ── */}
          <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-white/25">
            <div className="relative w-10 h-px overflow-hidden" style={{ background:"linear-gradient(90deg,#b44fdf,transparent)" }}>
              <div className="track-dot absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400" />
            </div>
            <span>Usa ← → o desliza · {current + 1} / {total}</span>
          </div>

        </div>
      </main>
    </>
  );
}