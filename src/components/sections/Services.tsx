'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Rocket, Handshake, BarChart2, Settings, Globe } from 'lucide-react';

const ITEMS = [
  {
    num: '01', Icon: Target,
    name: 'Sales Strategy',
    desc: 'Diseño de procesos end-to-end desde prospección hasta cierre. Metodologías consultivas para productos tech B2B y SaaS.',
    tag: 'Estrategia',
    accent: '#10b981', accentRgb: '16,185,129',
  },
  {
    num: '02', Icon: Rocket,
    name: 'Pipeline Development',
    desc: 'Construcción y optimización de pipelines de alta conversión. ICP definition, qualification frameworks y deal acceleration.',
    tag: 'Crecimiento',
    accent: '#f472b6', accentRgb: '244,114,182',
  },
  {
    num: '03', Icon: Handshake,
    name: 'Enterprise Partnerships',
    desc: 'Relaciones estratégicas con C-suite. Negociaciones complejas con múltiples stakeholders y ciclos largos de venta.',
    tag: 'Enterprise',
    accent: '#c084fc', accentRgb: '192,132,252',
  },
  {
    num: '04', Icon: BarChart2,
    name: 'Sales Coaching',
    desc: 'Entrenamiento de equipos: objection handling, discovery calls efectivas y demos de alto impacto que cierran.',
    tag: 'Coaching',
    accent: '#10b981', accentRgb: '16,185,129',
  },
  {
    num: '05', Icon: Settings,
    name: 'RevOps Consulting',
    desc: 'Optimización de tu stack de ventas: CRM, automatización, analytics y enablement para escalar revenue de forma sostenida.',
    tag: 'RevOps',
    accent: '#f472b6', accentRgb: '244,114,182',
  },
  {
    num: '06', Icon: Globe,
    name: 'GTM Strategy',
    desc: 'Go-to-market para productos tech. Segmentación, positioning, pricing y expansión a nuevos mercados en LATAM y USA.',
    tag: 'GTM',
    accent: '#c084fc', accentRgb: '192,132,252',
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', '-62%']);
  const x    = useSpring(rawX, { stiffness: 55, damping: 18 });

  return (
    <>
      <style>{`
        .tl-item .tl-desc  { opacity: 0; transform: translateY(10px); transition: opacity 0.32s ease, transform 0.32s ease; }
        .tl-item .tl-num   { transition: opacity 0.32s ease, transform 0.32s ease; }
        .tl-item .tl-icon  { opacity: 0; transform: translateY(8px) scale(0.88); transition: opacity 0.28s ease, transform 0.28s ease; }
        .tl-item .tl-dot   { transition: transform 0.28s ease, box-shadow 0.28s ease; }
        .tl-item:hover .tl-desc { opacity: 1 !important; transform: translateY(0) !important; }
        .tl-item:hover .tl-num  { opacity: 0.06 !important; transform: translateY(-6px) !important; }
        .tl-item:hover .tl-icon { opacity: 1 !important; transform: translateY(0) scale(1) !important; }
        .tl-item:hover .tl-dot  { transform: translateY(-50%) scale(1.6) !important; }
      `}</style>

      {/* Tall section to drive scroll */}
      <section
        ref={sectionRef}
        id="services"
        style={{ position: 'relative', height: '320vh', background: 'transparent' }}
      >
        {/* Sticky panel */}
        <div style={{
          position: 'sticky', top: 0,
          height: '100vh', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 64px',
        }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '48px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '26px', height: '1px', background: 'linear-gradient(90deg, transparent, #10b981)' }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#10b981', padding: '3px 10px',
                border: '1px solid rgba(16,185,129,0.28)',
                background: 'rgba(16,185,129,0.05)',
                clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
              }}>
                Servicios Tech Sales
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #e8f5f0 0%, #6ee7b7 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Lo que puedo hacer </span>
                <span style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #f0c96a, #d4a843)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>por tu negocio</span>
              </h2>

              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(232,245,240,0.28)',
                display: 'flex', alignItems: 'center', gap: '8px', margin: 0,
              }}>
                Desplaza para explorar <span>→</span>
              </p>
            </div>
          </motion.div>

          {/* ── Horizontal track ── */}
          <div style={{ position: 'relative' }}>

            {/* Spine line */}
            <div style={{
              position: 'absolute', top: '50%', left: '-64px',
              width: 'calc(100vw + 64px)',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 2%, rgba(16,185,129,0.15) 15%, rgba(16,185,129,0.15) 85%, transparent 98%)',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }} />

            <motion.div
              ref={trackRef}
              style={{
                x,
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                willChange: 'transform',
              }}
            >
              {ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="tl-item"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    width: '290px',
                    flexShrink: 0,
                    marginRight: i < ITEMS.length - 1 ? '60px' : '140px',
                    position: 'relative',
                    padding: '32px 0 32px 28px',
                    cursor: 'default',
                  }}
                >
                  {/* Dot on spine */}
                  <div
                    className="tl-dot"
                    style={{
                      position: 'absolute', left: '-5px', top: '50%',
                      transform: 'translateY(-50%)',
                      width: '10px', height: '10px', borderRadius: '50%',
                      background: item.accent,
                      boxShadow: `0 0 0 3px rgba(${item.accentRgb},0.15)`,
                      zIndex: 2,
                    }}
                  />

                  {/* Vertical left bar */}
                  <div style={{
                    position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '1.5px',
                    background: `linear-gradient(to bottom, transparent, ${item.accent} 40%, rgba(${item.accentRgb},0.3) 60%, transparent)`,
                    opacity: active === i ? 0.8 : 0.25,
                    transition: 'opacity 0.3s',
                  }} />

                  {/* Connector to next */}
                  {i < ITEMS.length - 1 && (
                    <div style={{
                      position: 'absolute', right: '-60px', top: '50%',
                      width: '60px', height: '1px',
                      background: `linear-gradient(90deg, rgba(${item.accentRgb},0.25), rgba(${ITEMS[i+1].accentRgb},0.25))`,
                      transform: 'translateY(-50%)',
                    }} />
                  )}

                  {/* Big ghost number */}
                  <div
                    className="tl-num"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '6rem', fontWeight: 700, lineHeight: 1,
                      color: item.accent,
                      opacity: 0.1,
                      position: 'absolute', top: '-8px', left: '22px',
                      pointerEvents: 'none', userSelect: 'none',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="tl-icon"
                    style={{
                      width: '34px', height: '34px', marginBottom: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `rgba(${item.accentRgb},0.08)`,
                      border: `1px solid rgba(${item.accentRgb},0.22)`,
                      clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                      position: 'relative', zIndex: 1,
                    }}
                  >
                    <item.Icon size={14} style={{ color: item.accent }} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    color: active === i ? '#e8f5f0' : 'rgba(232,245,240,0.65)',
                    margin: '0 0 10px 0',
                    position: 'relative', zIndex: 1,
                    transition: 'color 0.28s',
                  }}>
                    {item.name}
                  </h3>

                  {/* Description — reveals on hover */}
                  <p
                    className="tl-desc"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '0.82rem', lineHeight: 1.72,
                      color: 'rgba(232,245,240,0.6)',
                      fontWeight: 300, margin: '0 0 14px 0',
                      position: 'relative', zIndex: 1,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Tag */}
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: item.accent,
                      padding: '3px 9px',
                      border: `1px solid rgba(${item.accentRgb},0.22)`,
                      background: `rgba(${item.accentRgb},0.06)`,
                      clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                      display: 'inline-block',
                      opacity: active === i ? 1 : 0.45,
                      transition: 'opacity 0.28s',
                      position: 'relative', zIndex: 1,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Progress bar ── */}
          <div style={{
            position: 'absolute', bottom: '36px', left: '64px', right: '64px',
            height: '1px', background: 'rgba(255,255,255,0.06)',
          }}>
            <motion.div style={{
              height: '100%',
              background: 'linear-gradient(90deg, #10b981, #f472b6, #c084fc)',
              scaleX: scrollYProgress,
              transformOrigin: 'left',
            }} />
            <motion.div style={{
              position: 'absolute', top: '-3px',
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              left: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              x: '-50%',
            }} />
          </div>

        </div>
      </section>
    </>
  );
}