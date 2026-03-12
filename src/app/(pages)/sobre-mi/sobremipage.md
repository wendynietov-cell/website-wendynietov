import { useState, useRef, useEffect, useCallback } from "react";

/* ─── PALETTE ─────────────────────────────────────────────── */
const P = { purple:"#b44fdf", pink:"#e040a0", emerald:"#5effd8", indigo:"#a5b4fc", bg:"#06060f" };

/* ─── DATA ────────────────────────────────────────────────── */
const PAGES = [
  {
    id:"intro", num:"00", label:"Perfil", accent:P.purple,
  },
  {
    id:"sales", num:"01", label:"Ventas Tech", accent:P.pink,
    chapter:"Especialista en Ventas & Tech",
    subtitle:"KAM · Hunter · Sales Business",
    roles:[
      {
        period:"2022 — 2025", role:"Hunter Senior Top Deal", company:"Rappi",
        tags:["KAM","Hunter","Greenfield","Top Performer"],
        body:`Lideré la expansión nacional en ciudades Greenfield, abriendo mercados desde cero en más de 8 ciudades. Negocié contratos de alto impacto con grandes marcas del retail, restaurantes y consumo masivo — logrando acuerdos exclusivos y posicionamiento premium dentro de la plataforma.\n\nManagé un portafolio de cuentas clave con seguimiento de GMV, rentabilidad y churn. Diseñé estrategias de pricing y estructuras de comisión adaptadas a cada mercado. Coordiné equipos de operaciones y onboarding para la activación exitosa de socios comerciales.\n\nResultado: crecimiento 3× del portafolio asignado con reconocimiento como Top Performer nacional.`,
      },
      {
        period:"2019 — 2022", role:"Sales Business Specialist", company:"Sector Tech & Plataformas",
        tags:["B2B","CRM","Pipeline","Consultivo"],
        body:`Desarrollo de relaciones comerciales B2B en el ecosistema tech, identificando oportunidades con medianas y grandes empresas. Construcción de propuestas de valor adaptadas, ciclos de venta consultivo y cierre de contratos de mediano y largo plazo.\n\nGestión de pipeline CRM, análisis de conversión y optimización de procesos para reducir el ciclo de cierre. Trabajo transversal con equipos de producto, marketing y operaciones.`,
      },
    ],
  },
  {
    id:"cultural", num:"02", label:"Cultura & Gestión", accent:P.emerald,
    chapter:"Fundraising & Gestión Cultural",
    subtitle:"Sector Público · Media · Patrocinios",
    roles:[
      {
        period:"2016 — 2019", role:"Coordinadora de Proyectos y Gestión de Alianzas", company:"Alcaldía Municipal",
        tags:["Sector Público","Presupuesto +500M","50+ personas","Stakeholders"],
        body:`Lideré proyectos culturales de alto impacto: festivales, eventos masivos y programas de formación artística. Negocié alianzas con entidades privadas para conseguir patrocinios que complementaran el presupuesto público.\n\nAdministré presupuestos superiores a $500M COP coordinando equipos de más de 50 personas — contratistas, voluntarios y funcionarios. Gestión de stakeholders políticos, gremios empresariales y comunidades para alinear objetivos y garantizar viabilidad.`,
      },
      {
        period:"2014 — 2016", role:"Productora & Gestora Cultural", company:"Emisora Arauca · RCN Radio",
        tags:["Media","Radio","Pauta","Comunidad"],
        body:`Producción y dirección de contenido radiofónico cultural en uno de los medios de mayor audiencia regional. Gestión de pauta publicitaria y alianzas con anunciantes locales y nacionales; propuestas de patrocinio para programas especiales y transmisiones en vivo.\n\nCoordinación de eventos culturales, entrevistas con figuras del arte y la política regional, y construcción de puentes entre comunidad, sector privado e instituciones.`,
      },
    ],
  },
  {
    id:"dev", num:"03", label:"Dev & Builder", accent:P.indigo,
    chapter:"Programadora & Creadora",
    subtitle:"Full-Stack · Productos · Freelance",
    projects:[
      {
        name:"BuscArt", year:"2025",
        stack:["Next.js","Node.js","TypeScript","Stripe","Supabase"],
        status:"Beta activa", statusColor:P.emerald,
        desc:`Marketplace que conecta artistas emergentes con empresas que necesitan talento creativo. Arquitectura full-stack con panel admin, pagos integrados, perfiles verificados y motor de búsqueda por categoría, ciudad y presupuesto.\n\nDesde la visión de negocio hasta el deploy: diseñé el modelo de monetización, la UX/UI y el flujo completo de onboarding. Actualmente en fase beta con primeros usuarios activos en Medellín.`,
      },
      {
        name:"Portfolio Personal", year:"2026",
        stack:["Next.js","Framer Motion","Tailwind","TypeScript"],
        status:"Producción", statusColor:P.purple,
        desc:`Diseño y desarrollo completo de este portafolio — desde la arquitectura de componentes hasta cada micro-animación. Sistema de diseño propio con glassmorphism, paleta coherente y animaciones sin librerías de terceros para los efectos principales.\n\nEnfoque en performance, accesibilidad y experiencia móvil sin sacrificar densidad visual.`,
      },
      {
        name:"Proyectos Freelance", year:"2023 — hoy",
        stack:["React","WordPress","Webflow","APIs REST","Make"],
        status:"Continuo", statusColor:P.pink,
        desc:`Soluciones web para clientes en salud, retail y servicios profesionales. Integraciones con CRMs, pasarelas de pago, automatizaciones y despliegue cloud.\n\nEnfoque en soluciones pragmáticas orientadas al negocio: más conversiones, menos fricción, mayor autonomía operativa.`,
      },
    ],
  },
  {
    id:"stack", num:"04", label:"Stack & Skills", accent:P.pink,
  },
];

const SKILLS = [
  { cat:"Sales & Revenue", color:P.pink,   items:["KAM","Hunter Comercial","Sales Business","Greenfield Expansion","Pipeline CRM","Negociación B2B","Revenue Growth","Marketplace Ops"] },
  { cat:"Tech Stack",      color:P.indigo, items:["Next.js","React","Node.js","TypeScript","Supabase","Stripe","REST APIs","Git/GitHub"] },
  { cat:"Strategy",        color:P.purple, items:["Fundraising","Gestión de Alianzas","Patrocinios","Gestión Pública","Stakeholders","Presupuestos","Proyectos Culturales"] },
  { cat:"Tools & AI",      color:P.emerald,items:["AI Tools","Zapier / Make","Notion","Figma","HubSpot CRM","Webflow","Analytics","Vercel"] },
];

/* ─── SMALL COMPONENTS ───────────────────────────────────── */
function Tag({ label, color }) {
  return (
    <span style={{
      fontFamily:"monospace", fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase",
      padding:"3px 10px", display:"inline-block", color:`${color}cc`,
      border:`1px solid ${color}33`, background:`${color}11`,
      clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
    }}>{label}</span>
  );
}

function PageNum({ num, accent }) {
  return (
    <div style={{ fontFamily:"monospace", fontSize:11, color:`${accent}55`, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:6 }}>
      PAGE {num}
    </div>
  );
}

/* ─── PAGES CONTENT ──────────────────────────────────────── */
function PageIntro({ goTo }) {
  const acc = P.purple;
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", justifyContent:"space-between", padding:"40px 48px" }}>
      <div>
        <PageNum num="00" accent={acc} />
        <div style={{ height:1, background:`linear-gradient(90deg,${acc},transparent)`, marginBottom:32 }} />
        <div style={{ fontFamily:"'Georgia',serif", fontSize:"clamp(2.4rem,4vw,3.8rem)", fontWeight:700, lineHeight:.9, letterSpacing:"-.02em", color:"#fff", marginBottom:24 }}>
          Wendy<br/>
          <span style={{ fontStyle:"italic", fontWeight:400, background:`linear-gradient(135deg,${P.indigo},${P.purple},${P.pink},${P.emerald})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundSize:"200%", animation:"shimmer 5s ease infinite" }}>
            Nieto
          </span>
        </div>
        <div style={{ fontFamily:"monospace", fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:`${acc}99`, marginBottom:28 }}>
          Estratega de Negocios · Builder · Creadora
        </div>
        <p style={{ color:"rgba(255,255,255,.55)", lineHeight:1.85, fontSize:"0.9rem", maxWidth:420 }}>
          Nueve años construyendo desde los dos extremos del tablero: la calle y el código. 
          De negociar contratos políticos a desplegar infraestructura tech para la economía creativa en LATAM.
          <br/><br/>
          No soy solo vendedora, ni solo programadora. Soy la persona que entiende <em>por qué</em> algo debe existir 
          y sabe <em>cómo</em> construirlo.
        </p>
      </div>

      <div>
        {/* Mini nav */}
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:32 }}>
          {PAGES.filter(p => p.num).map((p, i) => (
            <button key={i} onClick={() => goTo(i+1)}
              style={{ display:"flex", alignItems:"center", gap:12, background:"none", border:"none", cursor:"pointer", textAlign:"left", padding:"8px 0" }}>
              <span style={{ fontFamily:"monospace", fontSize:9, color:`${p.accent}66`, letterSpacing:"0.1em", minWidth:24 }}>{p.num}</span>
              <div style={{ flex:1, height:1, background:`${p.accent}22` }} />
              <span style={{ fontFamily:"monospace", fontSize:9, color:`${p.accent}99`, letterSpacing:"0.1em", textTransform:"uppercase" }}>{p.label}</span>
              <div style={{ width:6, height:6, borderRadius:"50%", background:p.accent, opacity:.6 }} />
            </button>
          ))}
        </div>
        <div style={{ fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,.2)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
          Desliza para explorar →
        </div>
      </div>
    </div>
  );
}

function PageSales({ data }) {
  const [active, setActive] = useState(0);
  const r = data.roles[active];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", padding:"40px 48px" }}>
      <PageNum num={data.num} accent={data.accent} />
      <div style={{ height:1, background:`linear-gradient(90deg,${data.accent},transparent)`, marginBottom:20 }} />
      <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}88`, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>{data.subtitle}</div>
      <div style={{ fontFamily:"'Georgia',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, color:"#fff", marginBottom:24, lineHeight:1.1 }}>{data.chapter}</div>

      {/* Tab selector */}
      <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
        {data.roles.map((ro, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase",
              padding:"6px 14px", cursor:"pointer", transition:"all .2s",
              border:`1px solid ${i===active ? data.accent : data.accent+"33"}`,
              background: i===active ? `${data.accent}22` : "transparent",
              color: i===active ? data.accent : `${data.accent}66`,
              clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
            {ro.company}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex:1, overflowY:"auto", paddingRight:8 }}>
        <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}77`, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>{r.period}</div>
        <div style={{ fontFamily:"'Georgia',serif", fontSize:"1.2rem", fontWeight:700, color:"#fff", marginBottom:12 }}>{r.role}</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
          {r.tags.map((t,i) => <Tag key={i} label={t} color={data.accent} />)}
        </div>
        {r.body.split("\n\n").map((para, i) => (
          <p key={i} style={{ color:"rgba(255,255,255,.55)", lineHeight:1.85, fontSize:".875rem", marginBottom:14 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

function PageCultural({ data }) {
  const [active, setActive] = useState(0);
  const r = data.roles[active];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", padding:"40px 48px" }}>
      <PageNum num={data.num} accent={data.accent} />
      <div style={{ height:1, background:`linear-gradient(90deg,${data.accent},transparent)`, marginBottom:20 }} />
      <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}88`, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>{data.subtitle}</div>
      <div style={{ fontFamily:"'Georgia',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, color:"#fff", marginBottom:24, lineHeight:1.1 }}>{data.chapter}</div>

      <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
        {data.roles.map((ro, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase",
              padding:"6px 14px", cursor:"pointer", transition:"all .2s",
              border:`1px solid ${i===active ? data.accent : data.accent+"33"}`,
              background: i===active ? `${data.accent}22` : "transparent",
              color: i===active ? data.accent : `${data.accent}66`,
              clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
            {ro.period.split(" — ")[0]}
          </button>
        ))}
      </div>

      <div style={{ flex:1, overflowY:"auto", paddingRight:8 }}>
        <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}77`, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>{r.period}</div>
        <div style={{ fontFamily:"'Georgia',serif", fontSize:"1.2rem", fontWeight:700, color:"#fff", marginBottom:4 }}>{r.role}</div>
        <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}99`, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>{r.company}</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
          {r.tags.map((t,i) => <Tag key={i} label={t} color={data.accent} />)}
        </div>
        {r.body.split("\n\n").map((para, i) => (
          <p key={i} style={{ color:"rgba(255,255,255,.55)", lineHeight:1.85, fontSize:".875rem", marginBottom:14 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

function PageDev({ data }) {
  const [active, setActive] = useState(0);
  const p = data.projects[active];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", padding:"40px 48px" }}>
      <PageNum num={data.num} accent={data.accent} />
      <div style={{ height:1, background:`linear-gradient(90deg,${data.accent},transparent)`, marginBottom:20 }} />
      <div style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}88`, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>{data.subtitle}</div>
      <div style={{ fontFamily:"'Georgia',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, color:"#fff", marginBottom:24, lineHeight:1.1 }}>{data.chapter}</div>

      <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
        {data.projects.map((pr, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase",
              padding:"6px 14px", cursor:"pointer", transition:"all .2s",
              border:`1px solid ${i===active ? data.accent : data.accent+"33"}`,
              background: i===active ? `${data.accent}22` : "transparent",
              color: i===active ? data.accent : `${data.accent}66`,
              clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
            {pr.name}
          </button>
        ))}
      </div>

      <div style={{ flex:1, overflowY:"auto", paddingRight:8 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, flexWrap:"wrap" }}>
          <div style={{ fontFamily:"'Georgia',serif", fontSize:"1.35rem", fontWeight:700, color:"#fff" }}>{p.name}</div>
          <span style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase",
            padding:"3px 10px", border:`1px solid ${p.statusColor}44`, color:p.statusColor, background:`${p.statusColor}11`,
            clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)" }}>
            ● {p.status}
          </span>
          <span style={{ fontFamily:"monospace", fontSize:9, color:`${data.accent}66` }}>{p.year}</span>
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:16 }}>
          {p.stack.map((t,i) => <Tag key={i} label={t} color={data.accent} />)}
        </div>
        {p.desc.split("\n\n").map((para, i) => (
          <p key={i} style={{ color:"rgba(255,255,255,.55)", lineHeight:1.85, fontSize:".875rem", marginBottom:14 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

function PageStack({ data }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", padding:"40px 48px" }}>
      <PageNum num={data.num} accent={data.accent} />
      <div style={{ height:1, background:`linear-gradient(90deg,${data.accent},transparent)`, marginBottom:20 }} />
      <div style={{ fontFamily:"'Georgia',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, color:"#fff", marginBottom:28, lineHeight:1.1 }}>
        Stack & Skills
      </div>
      <div style={{ flex:1, overflowY:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, alignContent:"start" }}>
        {SKILLS.map((s, i) => (
          <div key={i} style={{ background:"rgba(255,255,255,.025)", border:`1px solid ${s.color}22`, borderRadius:12, padding:"16px 18px" }}>
            <div style={{ fontFamily:"monospace", fontSize:9, color:`${s.color}99`, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>{s.cat}</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {s.items.map((t,j) => <Tag key={j} label={t} color={s.color} />)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:24, fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,.2)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
        9+ años · Medellín, Colombia · Disponible 2026
      </div>
    </div>
  );
}

/* ─── MAIN BOOK COMPONENT ────────────────────────────────── */
export default function SobreMiBook() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null); // 'left' | 'right'
  const [visible, setVisible] = useState(true);
  const totalPages = PAGES.length;

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= totalPages || idx === current) return;
    const dir = idx > current ? "left" : "right";
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
      setAnimDir(null);
    }, 220);
  }, [current, totalPages]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // keyboard
  useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  // touch swipe
  const touchX = useRef(null);
  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    touchX.current = null;
  };

  const page = PAGES[current];
  const acc  = page.accent;

  const pageStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0) scale(1)" : animDir === "left" ? "translateX(-30px) scale(.98)" : "translateX(30px) scale(.98)",
    transition: "opacity .22s ease, transform .22s ease",
    height:"100%", overflow:"hidden",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:${P.bg}; }
        @keyframes shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes stripe  { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes scandown{ from{top:0} to{top:100%} }
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:.1} }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(180,79,223,.3); border-radius:2px; }
        button { outline:none; }
      `}</style>

      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          minHeight:"100vh", background:P.bg, display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", padding:"20px 16px",
          fontFamily:"'Cormorant Garamond', Georgia, serif",
        }}
      >
        {/* Header bar */}
        <div style={{ width:"100%", maxWidth:760, display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
          <span style={{ fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,.25)", letterSpacing:"0.12em", textTransform:"uppercase" }}>
            Wendy Nieto · Portafolio
          </span>
          <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${acc}44,transparent)` }} />
          <div style={{ width:6, height:6, borderRadius:"50%", background:acc, opacity:.7, animation:"blink 1.8s infinite" }} />
          <span style={{ fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,.25)", letterSpacing:"0.12em", textTransform:"uppercase" }}>
            {current + 1} / {totalPages}
          </span>
        </div>

        {/* Book card */}
        <div style={{
          width:"100%", maxWidth:760,
          height: "min(75vh, 600px)",
          background:"rgba(180,79,223,.022)",
          border:`1px solid ${acc}2a`,
          borderRadius:18,
          backdropFilter:"blur(24px) saturate(1.4)",
          boxShadow:`inset 0 1px 0 rgba(255,255,255,.05), 0 0 80px ${acc}18, 0 32px 80px rgba(0,0,0,.5)`,
          position:"relative",
          overflow:"hidden",
        }}>
          {/* Top stripe */}
          <div style={{
            position:"absolute", top:0, left:0, right:0, height:2, zIndex:10, pointerEvents:"none",
            background:`linear-gradient(90deg,transparent,${acc} 30%,${P.pink} 60%,${P.emerald} 85%,transparent)`,
            animation:"stripe 4s ease-in-out infinite",
          }} />

          {/* Corner marks */}
          {[["tl","top:10px","left:10px","1px 0 0 1px"],["tr","top:10px","right:10px","1px 1px 0 0"],
            ["bl","bottom:10px","left:10px","0 0 1px 1px"],["br","bottom:10px","right:10px","0 1px 1px 0"]
          ].map(([id, tb, lr, bw]) => (
            <div key={id} style={{
              position:"absolute", [tb.split(":")[0]]:10, [lr.split(":")[0]]:10,
              width:12, height:12, borderStyle:"solid", borderWidth:bw,
              borderColor:`${acc}44`, pointerEvents:"none",
            }} />
          ))}

          {/* Page content */}
          <div style={pageStyle}>
            {page.id === "intro"    && <PageIntro goTo={goTo} />}
            {page.id === "sales"    && <PageSales data={page} />}
            {page.id === "cultural" && <PageCultural data={page} />}
            {page.id === "dev"      && <PageDev data={page} />}
            {page.id === "stack"    && <PageStack data={page} />}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ width:"100%", maxWidth:760, display:"flex", alignItems:"center", gap:12, marginTop:14 }}>
          <button onClick={prev} disabled={current === 0}
            style={{ fontFamily:"monospace", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase",
              padding:"8px 18px", border:`1px solid ${acc}33`, background:"transparent",
              color: current === 0 ? "rgba(255,255,255,.15)" : `${acc}99`,
              cursor: current === 0 ? "default" : "pointer",
              clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)", transition:"all .2s" }}>
            ← Anterior
          </button>

          <div style={{ flex:1, display:"flex", gap:6, justifyContent:"center" }}>
            {PAGES.map((p, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{ width: i===current ? 24 : 8, height:8, borderRadius:4,
                  background: i===current ? p.accent : `${p.accent}33`,
                  border:"none", cursor:"pointer", transition:"all .3s ease", padding:0 }} />
            ))}
          </div>

          <button onClick={next} disabled={current === totalPages - 1}
            style={{ fontFamily:"monospace", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase",
              padding:"8px 18px", border:`1px solid ${acc}33`,
              background: current === totalPages - 1 ? "transparent" : `${acc}18`,
              color: current === totalPages - 1 ? "rgba(255,255,255,.15)" : acc,
              cursor: current === totalPages - 1 ? "default" : "pointer",
              clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)", transition:"all .2s" }}>
            Siguiente →
          </button>
        </div>

        <div style={{ marginTop:10, fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,.18)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
          Usa ← → o desliza para navegar
        </div>
      </div>
    </>
  );
}