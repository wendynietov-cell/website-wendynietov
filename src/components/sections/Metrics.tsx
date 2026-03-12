'use client';

import { motion } from 'framer-motion';
import { METRICS } from '@/lib/constants';

export function Metrics() {
  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden">

      {/* ── Background grid (matches hero) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.055) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px', left: '-120px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px', right: '-100px',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          {/* Left line */}
          <div style={{
            height: '1px', width: '48px',
            background: 'linear-gradient(90deg, transparent, #10b981)',
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#10b981',
          }}>
            Resultados en números
          </span>
          {/* Right line grows */}
          <div style={{
            height: '1px', flex: 1,
            background: 'linear-gradient(90deg, #10b981, transparent)',
          }} />
        </motion.div>

        {/* Metrics grid — wrapped in the big mirror card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: '20px',
            border: '1px solid rgba(16,185,129,0.18)',
            background: 'rgba(255,255,255,0.028)',
            backdropFilter: 'blur(28px) saturate(1.5)',
            boxShadow: `
              0 0 0 1px rgba(16,185,129,0.1),
              0 0 55px rgba(16,185,129,0.09),
              0 40px 100px rgba(0,0,0,0.4)
            `,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Running top stripe — same as hero card */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #10b981 25%, #34d399 50%, #d4a843 75%, transparent 100%)',
            backgroundSize: '200% 100%',
            boxShadow: '0 0 14px rgba(16,185,129,0.7), 0 0 28px rgba(16,185,129,0.3)',
            animation: 'stripeRun 3s linear infinite',
          }} />

          {/* Left neon bar */}
          <div style={{
            position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '3px',
            background: 'linear-gradient(to bottom, transparent, #10b981 35%, #34d399 65%, transparent)',
            borderRadius: '0 2px 2px 0',
            boxShadow: '0 0 16px rgba(16,185,129,0.7), 0 0 32px rgba(16,185,129,0.3)',
            animation: 'barGlow 3s ease-in-out infinite alternate',
          }} />

          {/* Corner brackets */}
          {[
            { top: '12px', left: '12px', borderWidth: '1.5px 0 0 1.5px' },
            { top: '12px', right: '12px', borderWidth: '1.5px 1.5px 0 0' },
            { bottom: '12px', left: '12px', borderWidth: '0 0 1.5px 1.5px' },
            { bottom: '12px', right: '12px', borderWidth: '0 1.5px 1.5px 0' },
          ].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute', width: '18px', height: '18px',
              borderColor: 'rgba(16,185,129,0.4)', borderStyle: 'solid',
              ...pos,
            }} />
          ))}

          {/* Mirror sweep */}
          <div style={{
            position: 'absolute', top: 0, left: '-80%',
            width: '35%', height: '100%',
            background: 'linear-gradient(105deg, transparent, rgba(255,255,255,0.045), transparent)',
            transform: 'skewX(-12deg)',
            animation: 'mirrorLoop 6s ease-in-out infinite',
            pointerEvents: 'none',
          }} />

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                whileHover={{ backgroundColor: 'rgba(16,185,129,0.06)' }}
                style={{
                  padding: '44px 32px',
                  borderRight: i < METRICS.length - 1 ? '1px solid rgba(16,185,129,0.13)' : 'none',
                  borderBottom: '1px solid rgba(16,185,129,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s',
                }}
                className="group flex flex-col items-center text-center"
              >
                {/* Hover top line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                    background: 'linear-gradient(90deg, #10b981, #d4a843)',
                    transformOrigin: 'left',
                  }}
                />

                {/* Icon box — glassmorphism hexagonal */}
                <div style={{
                  width: '52px', height: '52px',
                  marginBottom: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  boxShadow: '0 0 18px rgba(16,185,129,0.2)',
                  transition: 'box-shadow 0.3s, background 0.3s',
                }}
                  className="group-hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]"
                >
                  <metric.icon
                    size={22}
                    style={{ color: '#10b981', filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.6))' }}
                  />
                </div>

                {/* Number */}
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '10px',
                  background: 'linear-gradient(135deg, #34d399 0%, #f0c96a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.3))',
                }}>
                  {metric.number}
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,245,240,0.5)',
                  lineHeight: 1.5,
                }}>
                  {metric.label}
                </div>

                {/* Bottom emerald dot */}
                <div style={{
                  width: '4px', height: '4px',
                  borderRadius: '50%',
                  background: '#10b981',
                  marginTop: '18px',
                  boxShadow: '0 0 8px #10b981',
                  animation: `blink ${1.4 + i * 0.3}s ease-in-out infinite`,
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes stripeRun {
          from { background-position: 100% 0 }
          to   { background-position: -100% 0 }
        }
        @keyframes barGlow {
          from { box-shadow: 0 0 10px rgba(16,185,129,0.5); opacity: 0.65; }
          to   { box-shadow: 0 0 24px rgba(16,185,129,1), 0 0 50px rgba(16,185,129,0.4); opacity: 1; }
        }
        @keyframes mirrorLoop {
          0%   { left: -80%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 170%; opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #10b981; }
          50%       { opacity: 0.15; box-shadow: none; }
        }
      `}</style>
    </section>
  );
}