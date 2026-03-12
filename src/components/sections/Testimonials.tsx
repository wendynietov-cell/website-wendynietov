'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

// Accent colors cycling per card
const ACCENTS = [
  { color: '#10b981', rgb: '16,185,129' },
  { color: '#c084fc', rgb: '192,132,252' },
  { color: '#f472b6', rgb: '244,114,182' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Testimonials() {
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
                Clientes
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #e8f5f0 0%, #6ee7b7 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Lo que dicen </span>
                <span style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #f0c96a, #d4a843)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>mis clientes</span>
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.82rem', lineHeight: 1.7,
                color: 'rgba(232,245,240,0.4)',
                fontWeight: 300, margin: 0, maxWidth: '280px', textAlign: 'right',
              }}>
                Resultados comprobados en los marketplaces más grandes de LATAM.
              </p>
            </div>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}
          >
            {TESTIMONIALS.map((t, i) => {
              const ac = ACCENTS[i % ACCENTS.length];
              return (
                <motion.div
                  key={i}
                  variants={card}
                  whileHover={{
                    y: -4,
                    borderColor: `rgba(${ac.rgb},0.28)`,
                    boxShadow: `0 8px 36px rgba(${ac.rgb},0.09), 0 0 0 1px rgba(${ac.rgb},0.16)`,
                    transition: { duration: 0.22 },
                  }}
                  style={{
                    borderRadius: '14px',
                    border: `1px solid rgba(${ac.rgb},0.1)`,
                    background: 'rgba(255,255,255,0.025)',
                    backdropFilter: 'blur(16px)',
                    padding: '28px 24px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {/* Thin running stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                    background: `linear-gradient(90deg, transparent, ${ac.color} 40%, rgba(${ac.rgb},0.2) 60%, transparent)`,
                    backgroundSize: '200% 100%',
                    animation: 'stripeSlide 5s linear infinite',
                  }} />

                  {/* Left micro bar */}
                  <div style={{
                    position: 'absolute', left: 0, top: '18%', bottom: '18%', width: '1.5px',
                    background: `linear-gradient(to bottom, transparent, ${ac.color} 45%, rgba(${ac.rgb},0.3) 55%, transparent)`,
                    opacity: 0.4,
                  }} />

                  {/* Quote icon — top right, very subtle */}
                  <Quote
                    size={22}
                    style={{
                      position: 'absolute', top: '18px', right: '18px',
                      color: `rgba(${ac.rgb},0.12)`,
                    }}
                  />

                  {/* Avatar / icon */}
                  <div style={{
                    width: '38px', height: '38px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `rgba(${ac.rgb},0.07)`,
                    border: `1px solid rgba(${ac.rgb},0.2)`,
                    clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                    flexShrink: 0,
                    position: 'relative', zIndex: 1,
                  }}>
                    <t.icon size={16} style={{ color: ac.color }} />
                  </div>

                  {/* Quote text — protagonist */}
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.9rem', lineHeight: 1.75,
                    color: 'rgba(232,245,240,0.75)',
                    fontWeight: 300,
                    margin: 0, flex: 1,
                    position: 'relative', zIndex: 1,
                    fontStyle: 'italic',
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div style={{
                    height: '1px',
                    background: `linear-gradient(90deg, rgba(${ac.rgb},0.2), transparent)`,
                  }} />

                  {/* Author */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1rem', fontWeight: 700,
                      color: '#e8f5f0', letterSpacing: '-0.01em',
                      marginBottom: '2px',
                    }}>
                      {t.author}
                    </div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.52rem', letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: `rgba(${ac.rgb},0.6)`,
                    }}>
                      {t.role}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}