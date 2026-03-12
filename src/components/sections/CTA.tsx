'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <>
      <style>{`
        @keyframes stripeSlide {
          from { background-position: 200% 0 }
          to   { background-position: -200% 0 }
        }
        @keyframes ctaMirror {
          0%   { left: -60%; opacity: 0 }
          8%   { opacity: 1 }
          92%  { opacity: 1 }
          100% { left: 160%; opacity: 0 }
        }
        @keyframes dotBlink {
          0%,100% { opacity: 1; box-shadow: 0 0 6px #10b981; }
          50%      { opacity: 0.2; box-shadow: none; }
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        id="contact"
        style={{
          margin: '0 24px 80px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(192,132,252,0.18)',
          zIndex: 1,
        }}
      >
        {/* Background gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(192,132,252,0.12) 0%, rgba(244,114,182,0.09) 50%, rgba(16,185,129,0.07) 100%)',
          backdropFilter: 'blur(24px)',
        }} />

        {/* Running top stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
          background: 'linear-gradient(90deg, transparent, #c084fc 25%, #f472b6 50%, #10b981 75%, transparent)',
          backgroundSize: '200% 100%',
          animation: 'stripeSlide 4s linear infinite',
          boxShadow: '0 0 12px rgba(192,132,252,0.5)',
        }} />

        {/* Mirror sweep */}
        <div style={{
          position: 'absolute', top: 0, left: '-60%', width: '35%', height: '100%',
          background: 'linear-gradient(105deg, transparent, rgba(255,255,255,0.04), transparent)',
          transform: 'skewX(-12deg)',
          animation: 'ctaMirror 7s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Corner brackets */}
        {[
          { top: '14px', left:  '14px', borderWidth: '1.5px 0 0 1.5px' },
          { top: '14px', right: '14px', borderWidth: '1.5px 1.5px 0 0' },
          { bottom: '14px', left:  '14px', borderWidth: '0 0 1.5px 1.5px' },
          { bottom: '14px', right: '14px', borderWidth: '0 1.5px 1.5px 0' },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', width: '16px', height: '16px',
            borderColor: 'rgba(192,132,252,0.3)', borderStyle: 'solid', ...pos,
          }} />
        ))}

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(40px, 6vw, 72px) clamp(32px, 6vw, 72px)',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '48px', flexWrap: 'wrap',
        }}>

          {/* Left — text */}
          <div style={{ flex: 1, minWidth: '260px' }}>

            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', animation: 'dotBlink 1.8s infinite' }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#10b981',
              }}>
                Disponible para proyectos
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em',
              margin: '0 0 16px 0',
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #e8f5f0, #c4b5fd)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                ¿Lista para cerrar<br />tu próximo{' '}
              </span>
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f0c96a, #d4a843)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                big deal?
              </span>
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.92rem', lineHeight: 1.75,
              color: 'rgba(232,245,240,0.55)',
              fontWeight: 300, margin: 0, maxWidth: '420px',
            }}>
              Conversemos sobre cómo escalar tus ventas tech, construir un pipeline ganador y superar tus objetivos de revenue este año.
            </p>
          </div>

          {/* Right — actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', flexShrink: 0 }}>

            {/* Email */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem', letterSpacing: '0.1em',
              color: 'rgba(16,185,129,0.6)',
              marginBottom: '4px',
            }}>
              wendy@wendynieto.com
            </div>

            {/* Primary CTA */}
            <Link
              href="mailto:wendy@wendynieto.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 28px',
                background: 'linear-gradient(135deg, #c084fc, #f472b6)',
                color: '#fff',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                textDecoration: 'none',
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                boxShadow: '0 8px 28px rgba(192,132,252,0.35)',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(192,132,252,0.55)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(192,132,252,0.35)';
              }}
            >
              Agendar llamada <ArrowRight size={15} />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px',
                border: '1px solid rgba(244,114,182,0.3)',
                background: 'rgba(244,114,182,0.05)',
                color: 'rgba(232,245,240,0.55)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                textDecoration: 'none',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                transition: 'color 0.22s, background 0.22s, border-color 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#e8f5f0';
                el.style.background = 'rgba(244,114,182,0.1)';
                el.style.borderColor = 'rgba(244,114,182,0.5)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(232,245,240,0.55)';
                el.style.background = 'rgba(244,114,182,0.05)';
                el.style.borderColor = 'rgba(244,114,182,0.3)';
              }}
            >
              Ver LinkedIn
            </Link>

          </div>
        </div>
      </motion.section>
    </>
  );
}