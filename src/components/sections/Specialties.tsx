'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, Handshake, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    slug: 'tecnologia-restaurantes',
    title: 'Tecnología para Restaurantes',
    shortDesc: 'Sistemas POS, integraciones de delivery y optimización de operaciones gastronómicas para equipos que necesitan precisión en cada turno.',
    icon: Target,
    accent: '#10b981',
    accentRgb: '16,185,129',
    metrics: [
      { value: '-35%', label: 'Tiempos' },
      { value: '+15%', label: 'Ticket' },
      { value: '99.9%', label: 'Inventario' },
    ],
  },
  {
    slug: 'estrategia-plataformas',
    title: 'Estrategia de Plataformas',
    shortDesc: 'Escalabilidad, retención y marketplaces para startups de alto crecimiento que buscan diferenciarse con tecnología.',
    icon: Rocket,
    accent: '#c084fc',
    accentRgb: '192,132,252',
    metrics: [
      { value: '10x',  label: 'Escala' },
      { value: '-40%', label: 'CAC' },
      { value: '+25%', label: 'Retención' },
    ],
  },
  {
    slug: 'dark-kitchens',
    title: 'Dark Kitchens',
    shortDesc: 'Despliegue operativo y tecnológico para marcas virtuales multicanal con lanzamiento ágil y control total del delivery.',
    icon: Handshake,
    accent: '#f472b6',
    accentRgb: '244,114,182',
    metrics: [
      { value: '+50%',   label: 'Eficiencia' },
      { value: '<20min', label: 'Entrega' },
      { value: '2 sem',  label: 'Lanzamiento' },
    ],
  },
  {
    slug: 'economia-creativa',
    title: 'Economía Creativa',
    shortDesc: 'Sistemas de monetización y distribución para creadores UGC que quieren convertir su audiencia en ingresos sostenibles.',
    icon: BarChart2,
    accent: '#38bdf8',
    accentRgb: '56,189,248',
    metrics: [
      { value: '300%',  label: 'Monetiz.' },
      { value: '4.5x',  label: 'Engagement' },
      { value: '3',     label: 'Canales' },
    ],
  },
];

const zigzag = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -28 : 28 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 },
  },
});

export function Specialties() {
  return (
    <>
      <style>{`
        @keyframes stripeSlide {
          from { background-position: 200% 0 }
          to   { background-position: -200% 0 }
        }
      `}</style>

      <section style={{ position: 'relative', padding: '64px 24px 72px', background: 'transparent' }}>
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
              <div style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg, transparent, #10b981)' }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#10b981', padding: '3px 10px',
                border: '1px solid rgba(16,185,129,0.28)',
                background: 'rgba(16,185,129,0.05)',
                clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
              }}>
                Especialidades
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #e8f5f0 0%, #6ee7b7 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Áreas de{' '}
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f0c96a, #d4a843)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Especialidad
              </span>
            </h2>
          </motion.div>

          {/* ── Cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={zigzag(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <Link href={`/servicios/${service.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{
                      x: i % 2 === 0 ? 3 : -3,
                      borderColor: `rgba(${service.accentRgb},0.28)`,
                      boxShadow: `0 6px 32px rgba(${service.accentRgb},0.08), 0 0 0 1px rgba(${service.accentRgb},0.16)`,
                    }}
                    transition={{ duration: 0.22 }}
                    style={{
                      borderRadius: '14px',
                      border: `1px solid rgba(${service.accentRgb},0.1)`,
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(16px)',
                      padding: '26px 24px',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    {/* Thin top stripe — only animation kept */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                      background: `linear-gradient(90deg, transparent, ${service.accent} 40%, rgba(${service.accentRgb},0.2) 60%, transparent)`,
                      backgroundSize: '200% 100%',
                      animation: 'stripeSlide 5s linear infinite',
                    }} />

                    {/* Left micro bar */}
                    <div style={{
                      position: 'absolute', left: 0, top: '18%', bottom: '18%', width: '2px',
                      background: `linear-gradient(to bottom, transparent, ${service.accent} 45%, rgba(${service.accentRgb},0.4) 55%, transparent)`,
                      opacity: 0.5,
                    }} />

                    {/* Icon + Title row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: '36px', height: '36px', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `rgba(${service.accentRgb},0.07)`,
                        border: `1px solid rgba(${service.accentRgb},0.22)`,
                        clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                      }}>
                        <service.icon size={16} style={{ color: service.accent }} />
                      </div>

                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                        fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.01em',
                        color: '#e8f5f0',
                        margin: 0,
                      }}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description — protagonist */}
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 'clamp(0.88rem, 1.1vw, 0.95rem)',
                      lineHeight: 1.75,
                      color: 'rgba(232,245,240,0.72)',   /* brighter than before */
                      fontWeight: 300,
                      margin: 0,
                      position: 'relative', zIndex: 1,
                    }}>
                      {service.shortDesc}
                    </p>

                    {/* Metrics — small, understated */}
                    <div style={{
                      display: 'flex', gap: '0',
                      borderTop: `1px solid rgba(${service.accentRgb},0.1)`,
                      paddingTop: '12px',
                      position: 'relative', zIndex: 1,
                    }}>
                      {service.metrics.map((m, mi) => (
                        <div key={mi} style={{
                          flex: 1,
                          paddingRight: mi < 2 ? '10px' : 0,
                          borderRight: mi < 2 ? `1px solid rgba(${service.accentRgb},0.08)` : 'none',
                          paddingLeft: mi > 0 ? '10px' : 0,
                        }}>
                          <div style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.78rem', fontWeight: 700, lineHeight: 1,
                            color: service.accent,
                            marginBottom: '2px',
                          }}>
                            {m.value}
                          </div>
                          <div style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.46rem', letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'rgba(232,245,240,0.28)',
                            lineHeight: 1.4,
                          }}>
                            {m.label}
                          </div>
                        </div>
                      ))}

                      {/* Arrow — far right */}
                      <div style={{
                        marginLeft: 'auto',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        color: `rgba(${service.accentRgb},0.4)`,
                        alignSelf: 'center',
                        paddingLeft: '12px',
                      }}>
                        →
                      </div>
                    </div>

                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}