'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, Handshake, BarChart2, Settings, Globe } from 'lucide-react';

const ITEMS = [
  {
    num: '01', Icon: Target,
    name: 'Sales Strategy',
    desc: 'Diseño de procesos end-to-end desde prospección hasta cierre. Metodologías consultivas para productos tech B2B y SaaS.',
    tag: 'Estrategia',
    accent: '#5effd8', accentRgb: '94,255,216',
  },
  {
    num: '02', Icon: Rocket,
    name: 'Pipeline Development',
    desc: 'Construcción y optimización de pipelines de alta conversión. ICP definition, qualification frameworks y deal acceleration.',
    tag: 'Crecimiento',
    accent: '#e040a0', accentRgb: '224,64,160',
  },
  {
    num: '03', Icon: Handshake,
    name: 'Enterprise Partnerships',
    desc: 'Relaciones estratégicas con C-suite. Negociaciones complejas con múltiples stakeholders y ciclos largos de venta.',
    tag: 'Enterprise',
    accent: '#b44fdf', accentRgb: '180,79,223',
  },
  {
    num: '04', Icon: BarChart2,
    name: 'Sales Coaching',
    desc: 'Entrenamiento de equipos: objection handling, discovery calls efectivas y demos de alto impacto que cierran.',
    tag: 'Coaching',
    accent: '#5effd8', accentRgb: '94,255,216',
  },
  {
    num: '05', Icon: Settings,
    name: 'RevOps Consulting',
    desc: 'Optimización de tu stack de ventas: CRM, automatización, analytics y enablement para escalar revenue de forma sostenida.',
    tag: 'RevOps',
    accent: '#e040a0', accentRgb: '224,64,160',
  },
  {
    num: '06', Icon: Globe,
    name: 'GTM Strategy',
    desc: 'Go-to-market para productos tech. Segmentación, positioning, pricing y expansión a nuevos mercados en LATAM y USA.',
    tag: 'GTM',
    accent: '#b44fdf', accentRgb: '180,79,223',
  },
];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 },
  },
});

export function Services() {
  return (
    <>
      <style>{`
        @keyframes stripeSlide {
          from { background-position: 200% 0 }
          to   { background-position: -200% 0 }
        }
      `}</style>

      <section id="services" style={{ position: 'relative', padding: '64px 24px 72px', background: 'transparent' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg, transparent, #5effd8)' }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#5effd8', padding: '3px 10px',
                border: '1px solid rgba(94,255,216,0.28)',
                background: 'rgba(94,255,216,0.05)',
                clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
              }}>
                Servicios Tech Sales
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #f0eaff 0%, #c4b5fd 50%, #b44fdf 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Lo que puedo hacer </span>
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #e040a0, #b44fdf)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>por tu negocio</span>
            </h2>
          </motion.div>

          {/* ── Grid 3×2 ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    borderColor: `rgba(${item.accentRgb},0.32)`,
                    boxShadow: `0 8px 36px rgba(${item.accentRgb},0.1), 0 0 0 1px rgba(${item.accentRgb},0.18)`,
                  }}
                  transition={{ duration: 0.22 }}
                  style={{
                    borderRadius: '14px',
                    border: `1px solid rgba(${item.accentRgb},0.12)`,
                    background: 'rgba(255,255,255,0.025)',
                    backdropFilter: 'blur(16px)',
                    padding: '28px 24px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    height: '100%',
                  }}
                >
                  {/* Animated top stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                    background: `linear-gradient(90deg, transparent, ${item.accent} 40%, rgba(${item.accentRgb},0.2) 60%, transparent)`,
                    backgroundSize: '200% 100%',
                    animation: 'stripeSlide 5s linear infinite',
                  }} />

                  {/* Left micro bar */}
                  <div style={{
                    position: 'absolute', left: 0, top: '18%', bottom: '18%', width: '2px',
                    background: `linear-gradient(to bottom, transparent, ${item.accent} 45%, rgba(${item.accentRgb},0.4) 55%, transparent)`,
                    opacity: 0.45,
                  }} />

                  {/* Ghost number */}
                  <div style={{
                    position: 'absolute', top: '8px', right: '16px',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '4.5rem', fontWeight: 700, lineHeight: 1,
                    color: item.accent, opacity: 0.06,
                    pointerEvents: 'none', userSelect: 'none',
                    letterSpacing: '-0.04em',
                  }}>
                    {item.num}
                  </div>

                  {/* Icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '36px', height: '36px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `rgba(${item.accentRgb},0.07)`,
                      border: `1px solid rgba(${item.accentRgb},0.22)`,
                      clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                    }}>
                      <item.Icon size={16} style={{ color: item.accent }} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                      fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.01em',
                      color: '#e8f5f0', margin: 0,
                    }}>
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(0.82rem, 1vw, 0.9rem)',
                    lineHeight: 1.72,
                    color: 'rgba(232,245,240,0.68)',
                    fontWeight: 300, margin: 0, flex: 1,
                    position: 'relative', zIndex: 1,
                  }}>
                    {item.desc}
                  </p>

                  {/* Tag */}
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: item.accent,
                    padding: '3px 9px',
                    border: `1px solid rgba(${item.accentRgb},0.22)`,
                    background: `rgba(${item.accentRgb},0.06)`,
                    clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                    display: 'inline-block',
                    position: 'relative', zIndex: 1,
                  }}>
                    {item.tag}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
